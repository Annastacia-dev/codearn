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

 const {id, title, description, image_url, live_site, github_link, features, category, technologies} = template


  return (
    <>
    {
      template ? (

        <div key={id} className="container px-4 px-lg-5">
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
                  Category: {category}
                  </span>
                </div>
                <div className="col">
                  <span className='meta'>
                  Technologies: {technologies}
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



        </div>
      ) : <h1>Loading...</h1>
    }
   


    </>
  )
}

export default SingleTemplate