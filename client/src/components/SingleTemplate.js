import React from 'react'
import { useParams } from 'react-router-dom'

const SingleTemplate = ({templates}) => {

    const params = useParams()

    const template = templates ? templates.find(template => template.id === parseInt(params.id)) : <h1>Loading...</h1>

    
    
    const {id, title, description, image_url, live_site, github_link, features, category, technologies, premium, price, user } = template


  return (
    <>
        {/* Bootstrap two columns */}
        {
            template ?
            (
              // Float image to the left
              <div key={id} className="container px-4 px-lg-5">
              <div className="row">
                <div className="col-md-6">
                  <img src={image_url || "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"} alt={title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <p>Price: ${price}</p>
                  <p>Premium: 
                    {
                      premium ? (
                        <span>Yes</span>
                      ) : (
                        <span>No</span>
                      )
                    }
                  </p>
                  <p>Live Site: {live_site}</p>
                  <p>Github Link: {github_link}</p>
                  <p>Features: {features}</p>
                  <p>Categories: {category}</p>
                  <p>Technologies: {technologies}</p>
                  <p>
                    {
                      user ? (
                        user.username === "admin" ? (
                          <span>Created by: Codearn</span>
                        ) : (
                          <span>Created by: {user.username}</span>
                        )
                      ) : (
                        null
                      )
                    }
                  </p>
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