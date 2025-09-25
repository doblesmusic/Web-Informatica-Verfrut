import React from 'react'
import './Blog.scss'
import Footer from '../Footer/Footer'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Btn from '../Btn/Btn'


const Blog = () => {

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container-large">
        <Breadcrumb title="Blog"/>
      </div>

      <section className="th-blog-wrapper blog-details p-5 space-extra-bottom">
        <div className="container">
            <div className="row">
                <div className="col-xxl-12 col-lg-12">
                    <div className="blog-container">
                        <div className="blog-img d-flex justify-content-center">
                            <img className="img-fluid" src="public/laptop-glpi.png" alt="Blog Image" />
                        </div>
                        <div className="blog-content">
                            <h2 className="blog-title pt-4">¿Cómo realizar una incidencia correctamente? ☝️</h2>
                            <p className="blog-content">En el Grupo Verfrut, el manejo de incidencias en los sistemas es
                                clave para garantizar la continuidad operativa y la satisfacción
                                de los usuarios. Con este objetivo, se ha establecido un protocolo
                                claro y eficiente que involucra a todos los colaboradores del área
                                de Desarrollo, Sistemas e Innovación, tanto en Chile como en Perú.</p>

                            <h3 className="blog-subtitle pt-4">👉 Plataforma de Incidencias:</h3>
                            <p className="blog-content" style={{fontSize: 'larger'}}>
                                • Chile: <a href="https://incidencias.verfrut.cl/" target="_blank"
                                    rel="noopener noreferrer">https://incidencias.verfrut.cl/</a><br />
                                • Perú: <a href="https://incidencias.verfrut.pe/" target="_blank"
                                    rel="noopener noreferrer">https://incidencias.verfrut.pe/</a><br />
                            </p>
                            <p className="blog-content alert alert-primary">ℹ️ Nota: Estos enlaces solo están disponibles dentro de la red
                                corporativa de Verfrut. Si te encuentras trabajando fuera de las oficinas,
                                recuerda que puedes acceder a estas plataformas mediante la conexión VPN proporcionada
                                por el equipo de TI. Si necesitas ayuda para conectarte, no dudes en solicitar el
                                soporte correspondiente.</p>
                            <h3 className="blog-subtitle pt-4">👉 Alcance</h3>
                            <p className="blog-content">Antes de la implementación, gran parte de la información se gestionaba de manera
                                fragmentada entre planillas y sistemas heredados. Hoy, con esta plataforma unificada,
                                Verfrut ha reducido errores operacionales, acelerado los tiempos de respuesta y mejorado
                                la coordinación entre sus plantas y oficinas en ambos países.</p>
                                <hr className="blog-hr"/>
                            <h3 className="blog-subtitle pt-2">👉 Roles y Responsabilidades</h3>
                            <div className="blog-content pt-3" style={{fontSize: 'larger'}}>
                                <div className="blog-content">
                                  <p>
                                    🔹 <strong>Solicitante:</strong> Registra la incidencia en GLPi con todos los
                                    detalles necesarios: qué, por qué, cuándo y cómo. Debe colaborar estrechamente con el
                                    técnico para facilitar la resolución.
                                  </p>
                                    
                                <p>
                                  🔹 <strong>Técnico Asignado:</strong> Revisa la incidencia, establece comunicación
                                    con el solicitante, y documenta el proceso siguiendo metodologías ágiles en GLPi.
                                </p>
                                    
                                <p>

                                  🔹 <strong>Responsable de Asignar Incidencias:</strong> Asigna los casos y
                                    establece fechas tentativas para la resolución.
                                </p>
                                    
                                <p>
                                  🔹 <strong>Jefe de Proyecto y Subgerente de TI:</strong> Revisan, aprueban cambios
                                    en los plazos y garantizan la calidad de las soluciones entregadas.
                                </p>
                                    
                                </div>
                            </div>
                            <hr className="blog-hr"/>

                            <h3 className="blog-subtitle pt-2">👉 Tiempos Estimados de Resolución</h3>
                            <div className="blog-content pt-3" style={{fontSize: 'larger'}}>
                                <div className="blog-content">
                                    <p>
                                        🕑 <strong>Accesos:</strong> hasta 4 horas
                                    </p>

                                    <p>
                                        🕑 <strong>Errores:</strong> máximo 24 horas
                                    </p>

                                    <p>
                                        🕑 <strong>Modificaciones:</strong> hasta 1 semana
                                    </p>

                                    <p>
                                        🕑 <strong>Nuevos desarrollos:</strong> plazos definidos en conjunto con las áreas
                                        involucradas
                                    </p>
                                </div>
                            </div>
                            <hr className="blog-hr"/>

                            <h3 className="blog-subtitle pt-2">👉 Metodologías y Herramientas</h3>

                            <p className="blog-content">La documentación y el seguimiento se realizan
                                a través de metodologías ágiles, reforzadas con canales de
                                comunicación como correo electrónico, reuniones virtuales y
                                la plataforma GLPi. Esto garantiza la transparencia y el
                                registro completo de cada paso.</p>

                            <h3 className="blog-subtitle pt-2">👉 Mejora Continua</h3>

                            <p className="blog-content">Este protocolo es dinámico y está sujeto
                                a revisiones constantes para detectar áreas de mejora.
                                Se promueve la capacitación permanente del personal para
                                asegurar una gestión de incidencias efectiva y alineada
                                con las mejores prácticas.</p>

                            <h3 className="blog-subtitle pt-2">📝 Cómo registrar una incidencia</h3>

                            <p className="blog-content">Para garantizar una atención rápida y eficiente, sigue estos pasos al
                                registrar tu incidencia:</p><br />

                            <ol>
                                <li className="blog-content">
                                    <strong>Ingresa a la plataforma</strong><br />
                                    Accede a la plataforma correspondiente a tu país:<br />
                                    - Chile: <a href="https://incidencias.verfrut.cl/" target="_blank"
                                        rel="noopener noreferrer">https://incidencias.verfrut.cl/</a><br />
                                    - Perú: <a href="https://incidencias.verfrut.pe/" target="_blank"
                                        rel="noopener noreferrer">https://incidencias.verfrut.pe/</a>
                                </li>

                                <li className="blog-content">
                                    <strong>Completa todos los campos requeridos</strong><br />
                                    Describe detalladamente la incidencia, indicando:<br />

                                    <div className="blog-content">
                                        <strong>Qué necesitas:</strong> una descripción clara y precisa de la solicitud
                                        o problema.<br />
                                        <strong>Por qué lo necesitas:</strong> la razón o justificación.<br />
                                        <strong>Cuándo lo necesitas:</strong> el plazo o nivel de urgencia.<br />
                                        <strong>Cómo esperas que sea resuelto:</strong> cualquier detalle técnico o de
                                        formato relevante.
                                    </div>
                                </li>

                                <li className="blog-content">
                                    <strong>Adjunta la información necesaria</strong><br />
                                    Si es posible, añade capturas de pantalla, documentos o cualquier otro archivo que
                                    ayude a ilustrar mejor el problema o solicitud.
                                </li>

                                <li className="blog-content">
                                    <strong>Mantente disponible</strong><br />
                                    Una vez registrada, el técnico asignado se pondrá en contacto contigo para aclarar
                                    dudas o solicitar más información si es necesario. Tu colaboración es clave para
                                    resolver la incidencia de manera eficiente.
                                </li>
                            </ol>

                            <p className="blog-content alert alert-danger"><strong>💡 Recuerda:</strong><br />
                                Si estás fuera de las oficinas, asegúrate de estar conectado a través de la <strong>VPN
                                    de Verfrut</strong> para poder acceder a la plataforma GLPi.</p>
                            <h3 className="blog-subtitle pt-2">🎯 Compromiso con la mejora continua</h3>
                            <p className="blog-content">Con este protocolo y el uso de la plataforma GLPi,
                                buscamos optimizar la gestión de incidencias y
                                asegurar que todos los problemas o solicitudes sean
                                atendidos de forma oportuna. La participación activa
                                de cada usuario y la colaboración con el equipo de soporte
                                son fundamentales para lograr soluciones rápidas y efectivas.</p>
                        </div>
                        <div className="row mt-5 justify-content-center">
                          <div className="blog-btn col-12 col-md-3 d-flex justify-content-center">
                          <Btn className="btn-primary btn-xl d-flex justify-content-center" text="Volver al inicio" href="/" />
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="pt-5 mt-5">
      <Footer />
    </div>
    
    </div>
  )
}

export default Blog
