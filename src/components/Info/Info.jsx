import React from 'react'
import './Info.scss'

function Info({ title, description, imageSrc, imageAlt, buttonText }) {
    return (
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img 
                            src={imageSrc} 
                            alt={imageAlt}
                            className="img-fluid rounded" 
                        />
                    </div>
                    <div className="col-md-6 text-start p-5">
                        <h1 className="display-8 fw-bold mb-4">{title}</h1>
                        <p className="lead fs-6 mb-4 text-secondary">{description}</p>
                        <button className="btn btn-primary btn-md">{buttonText}</button>
                    </div>
                </div>
        </div>
    )
}

export default Info