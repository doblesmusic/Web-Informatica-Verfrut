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

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [activeId, setActiveId] = useState(null); // id del video activo (para el modal)
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // Debounce 250ms
  const tRef = useRef(null);
  useEffect(() => {
    clearTimeout(tRef.current);
    tRef.current = setTimeout(() => setDebouncedQ(q), 250);
    return () => clearTimeout(tRef.current);
  }, [q]);

  // Cargar videos (desde /public/json/videos.json)
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/json/videos.json", { cache: "no-store" });
        if (!res.ok) throw new Error("No se pudo cargar videos.json");
        const data = await res.json();

        // Enriquecer con campos normalizados y asegurar id
        const enriched = (Array.isArray(data) ? data : []).map((v, i) => ({
          id: v.id ?? v.src ?? String(i),
          ...v,
          _title: normalize(v.title),
          _description: normalize(v.description),
          _tags: (v.tags || []).map(normalize),
        }));

        setVideos(enriched);
      } catch (e) {
        console.error(e);
        setErr("Error cargando videos.");
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
                      type="text"
                      className="form-control"
                      placeholder="Buscar videos (ej: ERP, firmas, SVG, vacaciones, etc.)"
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Escape") setQ(""); }}
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        padding: "0.75rem",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                      }}
                    />
                    {q && (
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setQ("")}
                      >
                        Limpiar
                      </button>
                    )}
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
                            <img
                              src={video.thumbnail || "/src/assets/laptop.png"}
                              alt={video.title}
                              className="img-fluid rounded-2 w-100"
                              style={{ aspectRatio: "16/9", objectFit: "cover" }}
                              loading="lazy"
                            />
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
              poster={current.thumbnail}
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