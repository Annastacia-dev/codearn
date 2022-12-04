import React,{ useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleTemplate = (user) => {

  const [currentUser,setCurrentUser] = useState(user.user)

  useEffect(() => {
    setCurrentUser(user.user)
  },[user.user])

  console.log(currentUser)

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

 const {id, title, description, image_url, live_site, github_link, features, category, technologies, premium} = template


  return (
    <>
        {
            template ?
            (
              <div key={id} className="container px-4 px-lg-5">
              <div className="row">
                <div className="col-md-6">
                  <img src={image_url || "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"} alt={title} className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h1>{title}</h1>
                  <p>{description}</p>
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
                  <p>
                    {/* Show github link if user is premium */}
                    {
                      currentUser.premium ? (
                        <a href={github_link}>Github Link</a>
                      ) : (
                        template.user.id === currentUser.id ? (
                          <a href={github_link}>Github Link</a>
                        ) : (
                          <span>Not available</span>
                        )
                      )
                    }
                  </p>
                  <p>Features: {features}</p>
                  <p>Categories: {category}</p>
                  <p>Technologies: {technologies}</p>
                  <p>
                    {
                      template.user ? (
                        template.user.username === "admin" ? (
                          <span>Created by: Codearn</span>
                        ) : (
                          <span>Created by: {template.user.username}</span>
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