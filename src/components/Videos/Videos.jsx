import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Videos.scss";
import Footer from "../Footer/Footer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Fuse from "fuse.js";

// ========= Normalización y Sinónimos =========
function normalize(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

const SYN = {
  erp: ["sistema", "empresarial", "gestion", "gestión"],
  dte: ["factura", "boleta", "xml", "sii", "documento tributario"],
  vacaciones: ["feriado", "permiso"],
  rendiciones: ["gastos", "viaticos", "viáticos", "reembolso", "rendir"],
  firmas: ["firma", "firma digital", "firma electronica", "signature", "sign"],
  svg: ["vector", "gráfico", "grafico"],
  orden: ["oc", "orden de compra", "purchase order"],
  trazabilidad: ["flujo", "relaciones", "vínculos", "tracking"],
  recepcion: ["recepción", "ingreso", "entrada"],
};

function expandQuery(q) {
  const tokens = normalize(q).split(/\s+/).filter(Boolean);
  const out = new Set(tokens);
  for (const t of tokens) {
    if (SYN[t]) for (const s of SYN[t]) out.add(normalize(s));
  }
  return Array.from(out).join(" ");
}

// Resalta coincidencias básicas en el título
function highlight(text, query) {
  if (!query) return text;
  const q = normalize(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${q.split("\\ ").filter(Boolean).join("|")})`, "gi");
  const parts = String(text).split(re);
  return parts.map((p, i) =>
    re.test(normalize(p))
      ? <mark key={i}>{p}</mark>
      : <React.Fragment key={i}>{p}</React.Fragment>
  );
}

// Genera thumbnail dinámico basado en el ID del video
function getDynamicThumbnail(video) {
  // Si ya tiene thumbnail específico, lo usa
  if (video.thumbnail && video.thumbnail !== "/videos/intro.png") {
    return video.thumbnail;
  }
  
  // Genera thumbnail basado en el ID del video
  const thumbnailPath = `/videos/thumbnails/${video.id}.png`;
  
  // Fallback a thumbnail genérico si no existe el específico
  return thumbnailPath;
}

// Genera thumbnail automáticamente desde el video
function generateVideoThumbnail(videoSrc, callback, timeInSeconds = 20) {
  const video = document.createElement('video');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  video.crossOrigin = 'anonymous';
  video.currentTime = timeInSeconds;
  
  video.addEventListener('loadeddata', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Convierte el canvas a blob y luego a base64 para guardar en localStorage
    canvas.toBlob((blob) => {
      if (blob) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64Data = reader.result;
          callback(base64Data);
        };
        reader.readAsDataURL(blob);
      } else {
        callback(null);
      }
    }, 'image/jpeg', 0.8);
  });
  
  video.addEventListener('error', () => {
    callback(null);
  });
  
  video.src = videoSrc;
  video.load();
}

// Funciones para manejar cache en localStorage
function saveThumbnailToCache(videoId, thumbnailData) {
  try {
    const cache = JSON.parse(localStorage.getItem('videoThumbnails') || '{}');
    cache[videoId] = {
      data: thumbnailData,
      timestamp: Date.now(),
      expires: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 días
    };
    localStorage.setItem('videoThumbnails', JSON.stringify(cache));
  } catch (error) {
    console.warn('No se pudo guardar thumbnail en cache:', error);
  }
}

function getThumbnailFromCache(videoId) {
  try {
    const cache = JSON.parse(localStorage.getItem('videoThumbnails') || '{}');
    const cached = cache[videoId];
    
    if (cached && cached.expires > Date.now()) {
      return cached.data;
    }
    
    // Limpiar cache expirado
    if (cached && cached.expires <= Date.now()) {
      delete cache[videoId];
      localStorage.setItem('videoThumbnails', JSON.stringify(cache));
    }
    
    return null;
  } catch (error) {
    console.warn('Error leyendo cache de thumbnails:', error);
    return null;
  }
}

function clearExpiredThumbnails() {
  try {
    const cache = JSON.parse(localStorage.getItem('videoThumbnails') || '{}');
    const now = Date.now();
    let hasChanges = false;
    
    Object.keys(cache).forEach(videoId => {
      if (cache[videoId].expires <= now) {
        delete cache[videoId];
        hasChanges = true;
      }
    });
    
    if (hasChanges) {
      localStorage.setItem('videoThumbnails', JSON.stringify(cache));
    }
  } catch (error) {
    console.warn('Error limpiando cache expirado:', error);
  }
}

// Componente Skeleton para thumbnails
const SkeletonThumbnail = () => (
  <div 
    className="skeleton-thumbnail"
    style={{
      aspectRatio: "16/9",
      borderRadius: "8px",
      position: "relative",
      overflow: "hidden"
    }}
  >
    <div 
      className="play-icon-skeleton"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        color: "#c0c0c0"
      }}
    >
      <i className="fi fi-rr-play"></i>
    </div>
  </div>
);

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [activeId, setActiveId] = useState(null); // id del video activo (para el modal)
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [generatedThumbnails, setGeneratedThumbnails] = useState(new Map()); // Cache de thumbnails generados
  const [loadingThumbnails, setLoadingThumbnails] = useState(new Set()); // Videos que están generando thumbnail

  // Función para obtener thumbnail dinámico con generación automática
  const getDynamicThumbnailWithGeneration = (video) => {
    // Si ya tiene thumbnail específico, lo usa
    if (video.thumbnail && video.thumbnail !== "/videos/intro.png") {
      return video.thumbnail;
    }
    
    // Si ya generamos el thumbnail para este video, lo usa
    if (generatedThumbnails.has(video.id)) {
      return generatedThumbnails.get(video.id);
    }
    
    // Busca en localStorage primero
    const cachedThumbnail = getThumbnailFromCache(video.id);
    if (cachedThumbnail) {
      setGeneratedThumbnails(prev => new Map(prev).set(video.id, cachedThumbnail));
      return cachedThumbnail;
    }
    
    // Marca como cargando y genera thumbnail desde el video
    setLoadingThumbnails(prev => new Set(prev).add(video.id));
    generateVideoThumbnail(video.src, (thumbnailData) => {
      setLoadingThumbnails(prev => {
        const newSet = new Set(prev);
        newSet.delete(video.id);
        return newSet;
      });
      
      if (thumbnailData) {
        setGeneratedThumbnails(prev => new Map(prev).set(video.id, thumbnailData));
        saveThumbnailToCache(video.id, thumbnailData);
      }
    });
    
    // Mientras se genera, usa el fallback
    return "/src/assets/load.png";
  };

  // Debounce 250ms
  const tRef = useRef(null);
  useEffect(() => {
    clearTimeout(tRef.current);
    tRef.current = setTimeout(() => setDebouncedQ(q), 250);
    return () => clearTimeout(tRef.current);
  }, [q]);

  // Limpiar cache expirado al cargar
  useEffect(() => {
    clearExpiredThumbnails();
  }, []);

  // Función para parsear el nombre del video y generar metadatos
  function parseVideoName(fileName) {
    // Remover extensión si existe
    const nameWithoutExt = fileName.replace(/\.(mp4|avi|mov|webm|mkv)$/i, '');
    
    // Generar ID a partir del nombre
    const id = nameWithoutExt
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    
    // Generar título más legible
    const title = nameWithoutExt
      .replace(/^Video\s*-\s*/i, '') // Remover "Video - " del inicio
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase()); // Capitalizar primera letra de cada palabra
    
    // Mapeo de palabras clave a tags
    const tagMap = {
      'ciberseguridad': ['ciberseguridad', 'seguridad', 'información'],
      'authenticator': ['microsoft', 'authenticator', 'seguridad', 'tutorial'],
      'dte': ['dte', 'proveedores', 'portal', 'tutorial'],
      'intranet': ['intranet', 'promocional', 'corporativo'],
      'rendiciones': ['rendiciones', 'aplicación', 'tutorial'],
      'usb': ['seguridad', 'usb', 'buenas prácticas'],
      'radius': ['radius', 'sistema', 'tutorial', 'red'],
      'vacaciones': ['vacaciones', 'solicitud', 'rrhh', 'tutorial'],
      'frutappjob': ['frutappjob', 'aplicación', 'tutorial'],
      'karin': ['ley karin', 'legal', 'tutorial', 'rrhh'],
      'modulo': ['dte', 'módulo', 'tutorial', 'facturación'],
      'password': ['password', 'contraseña', 'seguridad', 'tutorial'],
      'transportistas': ['transportistas', 'sistema', 'tutorial', 'logística'],
    };
    
    // Buscar tags basados en palabras clave del nombre
    const lowerName = nameWithoutExt.toLowerCase();
    let tags = [];
    for (const [key, tagList] of Object.entries(tagMap)) {
      if (lowerName.includes(key)) {
        tags = tagList;
        break;
      }
    }
    
    // Generar descripción básica si no hay tags específicos
    const description = tags.length > 0 
      ? `Tutorial relacionado con ${tags[0]}.`
      : `Video tutorial: ${title}`;
    
    return {
      id,
      title,
      description,
      src: import.meta.env.DEV 
        ? `/api/qa_inicio/videos/${encodeURIComponent(fileName)}`
        : `https://api.verfrut.cl/qa_inicio/videos/${encodeURIComponent(fileName)}`,
      thumbnail: "/videos/intro.png",
      tags,
      date: new Date().toISOString().split('T')[0], // Fecha actual como fallback
    };
  }

  // Cargar videos desde la API
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setErr("");
        
        // Intentar cargar desde la API
        // En desarrollo, usar el proxy de Vite para evitar CORS
        // En producción, usar la URL completa directamente
        const apiUrl = import.meta.env.DEV 
          ? "/api/qa_inicio/videos/" 
          : "https://api.verfrut.cl/qa_inicio/videos/";
        
        console.log("Intentando cargar videos desde la API:", apiUrl);
        const apiRes = await fetch(apiUrl, { 
          cache: "no-store",
          mode: 'cors'
        });
        
        console.log("Respuesta de la API:", {
          ok: apiRes.ok,
          status: apiRes.status,
          statusText: apiRes.statusText,
          contentType: apiRes.headers.get('content-type')
        });
        
        let videoFiles = [];
        
        if (apiRes.ok) {
          const contentType = apiRes.headers.get('content-type') || '';
          const text = await apiRes.text(); // Leer el body una sola vez
          console.log("Contenido recibido (primeros 500 caracteres):", text.substring(0, 500));
          
          // Intentar parsear como JSON primero
          if (contentType.includes('application/json')) {
            try {
              const jsonData = JSON.parse(text);
              // Si es un array de strings (nombres de archivos)
              if (Array.isArray(jsonData)) {
                videoFiles = jsonData.filter(file => 
                  typeof file === 'string' && (file.includes('Video') || file.match(/\.(mp4|avi|mov|webm|mkv)$/i))
                );
              }
              // Si es un objeto con una propiedad que contiene los archivos
              else if (jsonData.files && Array.isArray(jsonData.files)) {
                videoFiles = jsonData.files.filter(file => 
                  typeof file === 'string' && (file.includes('Video') || file.match(/\.(mp4|avi|mov|webm|mkv)$/i))
                );
              }
            } catch (jsonError) {
              console.warn("No se pudo parsear como JSON, intentando como HTML/texto");
            }
          }
          
          // Si no hay videos aún, parsear como HTML/texto
          if (videoFiles.length === 0) {
            // Crear un parser DOM temporal para extraer enlaces/archivos
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            
            // Buscar enlaces <a> que apunten a archivos de video
            const links = doc.querySelectorAll('a[href]');
            links.forEach(link => {
              const href = link.getAttribute('href');
              const textContent = link.textContent.trim();
              
              // Si el href o el texto contienen "Video", es probable que sea un video
              if (href && (href.includes('Video') || textContent.includes('Video'))) {
                // Extraer nombre del archivo del href o del texto
                let fileName = href.split('/').pop() || textContent;
                
                // Limpiar el nombre
                fileName = fileName.trim();
                
                // Si no tiene extensión, agregar .mp4
                if (fileName && !fileName.match(/\.(mp4|avi|mov|webm|mkv)$/i)) {
                  fileName += '.mp4';
                }
                
                // Agregar si es válido y no está duplicado
                if (fileName && fileName.length > 5 && !videoFiles.includes(fileName)) {
                  videoFiles.push(fileName);
                }
              }
            });
            
            // Si no encontramos enlaces, parsear como texto plano
            if (videoFiles.length === 0) {
              const lines = text.split('\n');
              
              // Buscar líneas con patrones de nombres de video
              lines.forEach(line => {
                // Patrón 1: "Video - Nombre" seguido de números (tamaño) - más específico
                // Ejemplo: "Video - Informacion-Ciberseguridad    134541142"
                const pattern1 = /(Video\s*-\s*[^\s<>"]+?)(?:\s+\d+)?/gi;
                const matches1 = line.match(pattern1);
                if (matches1) {
                  matches1.forEach(match => {
                    let fileName = match.trim();
                    // Remover números al final si existen (tamaño del archivo)
                    fileName = fileName.replace(/\s+\d+$/, '');
                    if (!fileName.match(/\.(mp4|avi|mov|webm|mkv)$/i)) {
                      fileName += '.mp4';
                    }
                    if (!videoFiles.includes(fileName)) {
                      videoFiles.push(fileName);
                    }
                  });
                }
                
                // Patrón 2: Cualquier texto que termine con .mp4 u otra extensión de video
                const pattern2 = /([^\s<>"]+\.(mp4|avi|mov|webm|mkv))/gi;
                const matches2 = line.match(pattern2);
                if (matches2) {
                  matches2.forEach(match => {
                    const fileName = match.trim();
                    if (fileName.includes('Video') && !videoFiles.includes(fileName)) {
                      videoFiles.push(fileName);
                    }
                  });
                }
                
                // Patrón 3: Líneas que contienen "Video" y números (formato de lista de directorio)
                // Ejemplo: "   134541142 Video - Informacion-Ciberseguridad"
                const pattern3 = /\s+\d+\s+(Video\s*-\s*[^\s<>"]+)/gi;
                const matches3 = line.match(pattern3);
                if (matches3) {
                  matches3.forEach(match => {
                    let fileName = match.trim().replace(/^\d+\s+/, ''); // Remover número al inicio
                    if (!fileName.match(/\.(mp4|avi|mov|webm|mkv)$/i)) {
                      fileName += '.mp4';
                    }
                    if (!videoFiles.includes(fileName)) {
                      videoFiles.push(fileName);
                    }
                  });
                }
              });
            }
          }
          
          console.log(`Archivos de video encontrados: ${videoFiles.length}`, videoFiles);
        } else {
          console.error("La API no respondió correctamente:", apiRes.status, apiRes.statusText);
        }
        
        // Si la API no funciona o no devuelve videos, usar JSON como fallback
        if (videoFiles.length === 0) {
          console.warn("No se encontraron videos en la API, usando JSON local como fallback");
          const jsonRes = await fetch("/json/videos.json", { cache: "no-store" });
          if (jsonRes.ok) {
            const data = await jsonRes.json();
            const enriched = (Array.isArray(data) ? data : []).map((v, i) => ({
              id: v.id ?? v.src ?? String(i),
              ...v,
              _title: normalize(v.title),
              _description: normalize(v.description),
              _tags: (v.tags || []).map(normalize),
            }));
            setVideos(enriched);
            return;
          } else {
            throw new Error("No se pudo cargar videos desde la API ni desde el JSON local");
          }
        }
        
        // Mapear archivos de la API a la estructura esperada
        const videosData = videoFiles.map(fileName => {
          const parsed = parseVideoName(fileName);
          return {
            ...parsed,
            _title: normalize(parsed.title),
            _description: normalize(parsed.description),
            _tags: parsed.tags.map(normalize),
          };
        });

        console.log(`Cargados ${videosData.length} videos desde la API`);
        setVideos(videosData);
      } catch (e) {
        console.error("Error cargando videos desde API:", e);
        
        // Fallback a JSON local si la API falla
        try {
          const jsonRes = await fetch("/json/videos.json", { cache: "no-store" });
          if (jsonRes.ok) {
            const data = await jsonRes.json();
            const enriched = (Array.isArray(data) ? data : []).map((v, i) => ({
              id: v.id ?? v.src ?? String(i),
              ...v,
              _title: normalize(v.title),
              _description: normalize(v.description),
              _tags: (v.tags || []).map(normalize),
            }));
            setVideos(enriched);
            console.log("Videos cargados desde JSON local (fallback)");
          } else {
            setErr("Error cargando videos. Por favor, recarga la página.");
          }
        } catch (fallbackError) {
          console.error("Error en fallback:", fallbackError);
          setErr("Error cargando videos. Por favor, recarga la página.");
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Crear índice Fuse
  const fuse = useMemo(() => {
    if (!videos.length) return null;
    return new Fuse(videos, {
      includeScore: true,
      ignoreLocation: true,
      threshold: 0.34,          // 0.0 exacto | 1.0 muy laxo (0.28-0.34 es un buen rango)
      minMatchCharLength: 2,
      keys: [
        { name: "_title", weight: 0.5 },
        { name: "_description", weight: 0.3 },
        { name: "_tags", weight: 0.2 },
      ],
    });
  }, [videos]);

  // Búsqueda inteligente con sinónimos + fuzzy
  const results = useMemo(() => {
    const qTrim = debouncedQ.trim();
    if (!fuse) return videos;        // aún sin índice: muestra todo
    
    // Sin consulta: muestra todo ordenado por fecha (más recientes primero)
    if (!qTrim) {
      return [...videos].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    }

    const expanded = expandQuery(qTrim);
    const out = fuse.search(expanded).map(r => ({
      ...r.item,
      _score: r.score ?? 0,
    }));

    // Ordena por score y en empates por fecha (más recientes primero)
    out.sort((a, b) => a._score - b._score || (b.date || "").localeCompare(a.date || ""));
    return out;
  }, [fuse, videos, debouncedQ]);

  // Video actual
  const current = useMemo(
    () => results.find(v => v.id === activeId) || videos.find(v => v.id === activeId) || null,
    [activeId, results, videos]
  );

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (activeId) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = prev);
    }
  }, [activeId]);

  // Limpiar URLs de thumbnails generados al desmontar
  useEffect(() => {
    return () => {
      generatedThumbnails.forEach(url => {
        if (url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
        // Los base64 no necesitan limpieza manual
      });
    };
  }, [generatedThumbnails]);

  function openPlayer(id) {
    setActiveId(id);
  }
  function closePlayer() {
    setActiveId(null);
  }

  return (
    <div className="container-fluid">
      
      {/* Breadcrumb */}
      <div className="container-large">
        <Breadcrumb title="Videos" />
      </div>

      {/* Contenido */}
      <div className="videos-container">
        <div className="container">
          <div className="row">
            <div className="col-12">

              {/* Intro */}
              <div className="videos-section mb-5">
                <div className="row">
                  <div className="col-12">
                    <h2 className="section-title text-start">🎥 Video Tutoriales</h2>
                    <p className="section-description text-start">
                      Aquí encontrarás una colección de video tutoriales que te ayudarán a utilizar
                      los diferentes sistemas y herramientas disponibles. Usa el buscador para filtrar por tema.
                    </p>
                  </div>
                </div>
              </div>

              {/* Buscador */}
              <div className="row">
                <div className="col-12 mb-4">
                  <div className="search-container d-flex gap-2">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Buscar"
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Escape") setQ(""); }}
                      autoComplete="off"
                      name="search"
                      id="video-search-input"
                      data-form-type="other"
                      data-lpignore="true"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        padding: "0.75rem",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      }}
                    />
                    {/* {q && (
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setQ("")}
                      >
                        Limpiar
                      </button>
                    )} */}
                  </div>
                </div>
              </div>

              {/* Grid de videos */}
              <div className="videos-section pt-3">
                {loading && (
                  <div className="text-center py-5">Cargando…</div>
                )}
                {err && !loading && (
                  <div className="alert alert-danger">{err}</div>
                )}

                <div className="row justify-content-start p-0">
                  {!loading && !err && results.length > 0 ? (
                    results.map((video) => (
                      <div key={video.id || video.src} className="col-12 col-sm-6 col-lg-4 mb-4">
                        <div
                          className="video-card h-100"
                          role="button"
                          tabIndex={0}
                          onClick={() => openPlayer(video.id)}
                          onKeyDown={(e) => (e.key === "Enter" ? openPlayer(video.id) : null)}
                        >
                          <div className="video-thumbnail position-relative">
                            {loadingThumbnails.has(video.id) ? (
                              <SkeletonThumbnail />
                            ) : (
                              <img
                                src={getDynamicThumbnailWithGeneration(video)}
                                alt={video.title}
                                className="img-fluid rounded-2 w-100"
                                style={{ aspectRatio: "16/9", objectFit: "cover" }}
                                loading="lazy"
                                onError={(e) => {
                                  // Fallback a imagen genérica si no se puede cargar el thumbnail específico
                                  e.target.src = "/src/assets/laptop.png";
                                }}
                              />
                            )}
                            <div className="play-button d-flex align-items-center justify-content-center">
                              <i className="fi fi-rr-play"></i>
                            </div>
                          </div>
                          <div className="video-content">
                            <h3 className="video-title pt-3">{video.title}</h3>
                            {video.description && (
                              <p className="video-description">{video.description}</p>
                            )}
                            {video.tags?.length > 0 && (
                              <p className="opacity-75 d-flex gap-1 flex-wrap tag-container">
                                {video.tags.map(t => <span className="alert alert-primary p-1 small m-1" key={t}>#{t}</span>)}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (!loading && !err && (
                    <div className="col-12 text-center">
                      <p className="no-videos">No hay videos que coincidan con tu búsqueda.</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>      

      {/* Modal Reproductor */}
      {current && (
        <div
          className="video-modal-backdrop"
          onClick={closePlayer}
          role="dialog"
          aria-modal="true"
          aria-label={`Reproduciendo ${current.title}`}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "grid",
            placeItems: "center",
            padding: 16,
            zIndex: 1050
          }}
        >
          <div
            className="video-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(100%, 960px)",
              background: "#000",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
            }}
          >
            <video
              src={current.src}
              poster={getDynamicThumbnailWithGeneration(current)}
              controls
              autoPlay
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            <div className="p-3 bg-dark text-white d-flex align-items-center justify-content-between gap-2">
              <strong className="me-3">{current.title}</strong>
              <button className="btn btn-light btn-sm" onClick={closePlayer}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="pt-5 mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Videos;