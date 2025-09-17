import React from 'react'
import './Breadcrumb.scss'

const Breadcrumb = ({ title }) => {
    return (
        <div className="breadcrumb-container">
            <div className="row align-items-center">
                <div className="col-12 text-center">
                    <h1 className="breadcrumb-title">{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb