import React,{  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TemplateCard from './TemplateCard'

const UserView = ({ user, templates }) => {

    const navigate = useNavigate()

  const [search, setSearch] = useState('')

  const filteredTemplates = templates.filter(template => {
    return template.title.toLowerCase().includes(search.toLowerCase()) || template.description.toLowerCase().includes(search.toLowerCase()) || template.category.toLowerCase().includes(search.toLowerCase()) || template.technologies.toLowerCase().includes(search.toLowerCase() )
  })

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) {
      return 'Good Morning'
    } else if (hour < 17) {
      return 'Good Afternoon'
    } else {
      return 'Good Evening'
    }
  }

  const backToDashboard = () => {
    navigate('/dashboard')
  }



  return (
    <>
        {/* Nav */}
        <nav id="mainNav" className="home navbar navbar-expand-lg navbar-light fixed-top py-3">
                  <div className="container px-4 px-lg-5">
                    
                      <a href="#page-top"  style={{textAlign: "center"}} className="navbar-brand">
                        {
                          user ? (
                            <div className="greeting"> 
                                <h4>
                                <i className="fa-brands fa-centercode"></i>
                                  Codearn <span style={{marginLeft: "100px"}}>
                                  {getGreeting()} {user.first_name}
                                  </span>
                                  
                                  </h4>
                              
                            </div>
                          ) : (
                            <div className="greeting">
                              <h4>{getGreeting()}</h4>
                            </div>
                          )
                        }
                        </a>
                      <button 
                      className="navbar-toggler navbar-toggler-left"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarResponsive"
                      aria-controls="navbarResponsive"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      
                      <div className="collapse navbar-collapse" id="navbarResponsive">
                          <ul className="navbar-nav ms-auto my-2 my-lg-0">
                          <li className="nav-item">
                                  <button 
                                  className="btn btn-primary sell-content"
                                  onClick={backToDashboard}
                                  >Back to dashboard</button>
                              </li>
                          </ul>
                      </div>
                  </div>
                </nav>
        
        <div style={{marginTop: "8rem"}} className="container">
          <div className="row">
            <div style={{margin: "auto", marginBottom:"2rem"}} className="col-md-6">
              <div className="input-group mb-3">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Search for a template" 
                aria-label="Search for a template" aria-describedby="button-addon2"
                value={search}
                style={{borderRight: "none"}}
                onChange={e => setSearch(e.target.value)}
                 />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
              </div>
            </div>
          </div>

          
          <div className="row">
              {
                filteredTemplates  ?(
                  filteredTemplates.map(template => {
                    return <TemplateCard key={template.id} template={template} />
                  }
                  )
                ): (
                  <h1>Loading...</h1>
                )
              }
            </div>
          </div>
    </>
  )
}

export default UserView