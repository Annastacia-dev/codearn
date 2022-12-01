import React from 'react'
import '../css/TemplateCard.css'

const TemplateCard = ({ template }) => {

    const {id,image_url, title,category, technologies} = template
  return (
    <>
    <div key={id} className="card h-100">
        <img className="card-img-top" src={image_url} alt={title} />
        <div className="card-body">
            <h4 className="card-title">
                {title}
            </h4>
        </div>
        <div className="card-footer">
             <i className="fa-solid fa-layer-group"></i>
            <small className="text-muted">{category}</small> 
            <span>
                <i class="fa-solid fa-file-code"></i>
                <small className="text-muted">{technologies}</small>
            </span>
        </div>
    </div>
    </>
  )
}

export default TemplateCard