import React from 'react'
import { useParams } from 'react-router-dom'

const SingleTemplate = ({ user, templates}) => {

    const params = useParams()

    const template = templates.find(template => template.id === parseInt(params.id))

    

    console.log(template)

    const {id, title, description, image_url, live_site, github_link, features, categories, technologies, premium, price } = template


  return (
    <>
        {/* Bootstrap two columns */}
        {
            template ?
            (
              // Float image to the left
              <div className="container px-4 px-lg-5">
              <div className="row">
                <div className="col-md-6">
                  <img src={image_url || "https://via.placeholder.com/300"} alt={title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <p>Price: {price}</p>
                  <p>Live Site: {live_site}</p>
                  <p>Github Link: {github_link}</p>
                  <p>Features: {features}</p>
                  <p>Categories: {categories}</p>
                  <p>Technologies: {technologies}</p>
                </div>
              </div>
              </div>

            ) : (
                <h1>Loading...</h1>
            )
        }

        

    </>
  )
}

export default SingleTemplate