import React,{ useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleTemplate = ({templates}) => {

  const [currentUser, setCurrentUser] = useState([])

   async function getUser() {
      const response = await fetch('/profile')
      const data = await response.json()
      setCurrentUser(data)
    }

  useEffect(() => {
    getUser();
  }, [])

    const params = useParams()

    const [template, setTemplate] = useState([])

  
  

  useEffect(() => {
    async function fetchTemplate(){
      const response = await fetch(`/templates/${params.id}`)
      const data = await response.json()
      setTemplate(data)
    }
    fetchTemplate()
  }, [params.id])

 const {id, title, description, image_url, live_site, github_link, features, category, technologies, more_by_author} = template


  return (
    <>
    {
      template ? (

        <div key={id} className="sigle-template container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col">
              < img className="img-fluid mb-5" src={image_url} alt="..." />
            </div>
            <div className="col">
                <h5>{title}</h5>
                <p className="subheading">{description}</p>
                <div className="col">
                  <a href={live_site} target="_blank" rel="noreferrer" className="btn btn-primary">Live Site</a>
                </div>
                <div className="col">
                  {
                    currentUser.premium ?(
                      <a href={github_link} target="_blank" rel="noreferrer" className="btn btn-primary">View Code Source</a>
                    ) :(
                      template.user ? (
                        template.user.id === currentUser.id ? (
                          <a href={github_link} target="_blank" rel="noreferrer" className="btn btn-primary">View Code Source</a>
                        ) : (
                          <button type="button" className="btn btn-primary">Go Premium</button>
                        )
                      ) :(null)
                    )
                  }
                </div>

                <div className="col">
                  <span className='meta'>
                  Category: {
                    category ? (
                      category.split(',').map((cat, index) => (
                        (
                         <ul>
                        <li key={index}>{cat}</li>
                        </ul>
                        )
                      ))
                    ) : (null)
                  }
                  </span>
                </div>
                <div className="col">
                  <span className='meta'>
                  Technologies: {
                    // split the string into an array, return a list
                   technologies ? (
                    technologies.split(',').map((tech, index) => {
                      return (
                        <ul>
                      <li key={index}>{tech}</li>
                       </ul>
                      )
                    }
                    )
                   ) : (null)
                  }
                  </span>
                </div>
                <span className="meta">
                  Created by {
                    template.user ?(
                      template.user.id === currentUser.id ? (
                        <a href="/profile">You</a>
                      ) : (
                        <a href={`/user/${template.user.id}`}>{template.user.username}</a>
                      )
                    ): "codearn"
                  }
                </span>
            </div>
          </div>
          {/* Features and related */}

          <div className="row gx-4 gx-lg-5">
            <div className="col">
              <h3>Features</h3>
              <ul>
                {
                  features ?(
                    features.split(',').map((feature,index) => (
                      <li key={index}>{feature}</li>
                    ))
                  ) : "No features"
                }
                </ul>
              </div>

              <div className="col">
                <h3>Same Category</h3>
                {
                  // Templates whose category matches the current template's category and are not the current template return "No related templates" if there are no matches
                  templates.filter(template => template.category === category && template.id !== id).length > 0 ? (
                    templates.filter(template => template.category === category && template.id !== id).map(template => (
                      <div key={template.id}>
                        <a href={`/templates/${template.id}`}>{template.title}</a>
                      </div>
                    ))
                  ) : (
                    <div>
                      No related templates
                    </div>
                  )  
                }
          </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Same Technologies</h3>
              {
                // check if template has technologies, if it does, split the string into an array and filter the templates array for templates whose technologies match the current template's technologies and are not the current template
                technologies ? (
                  templates.filter(template => template.technologies.split(',').some(tech => technologies.split(',').includes(tech)) && template.id !== id).length > 0 ? (
                    templates.filter(template => template.technologies.split(',').some(tech => technologies.split(',').includes(tech)) && template.id !== id).map(template => (
                      <div key={template.id}>
                        <a href={`/templates/${template.id}`}>{template.title}</a>
                      </div>
                    ))
                  ) : (
                    <div>
                      No related templates
                    </div>
                  )
                ) : (
                  <div>
                    No related templates
                  </div>
                )
               
              }
              </div>
          </div>

          {/* More from the author */}
          <div className="row">
            <div className="col">
              <h3>More from the author</h3>
              {
                more_by_author ? (
                  // id not equal to current template id
                  more_by_author.map(
                    template => template.id !== id ? (
                      <div key={template.id}>
                        <a href={`/templates/${template.id}`}>{template.title}</a>
                      </div>
                    ) : null
                  )
                ) : (
                  <div>
                    No related templates
                  </div>
                )
              }
              </div>
            </div>



        </div>
      ) : <h1>Loading...</h1>
    }
   


    </>
  )
}

export default SingleTemplate