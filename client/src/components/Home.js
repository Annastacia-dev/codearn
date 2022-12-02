import React from 'react'
import NavBar from './NavBar'
import TemplateCard from './TemplateCard'

const Home = ({ user, setUser, templates }) => {

  return (
    <>
        <NavBar user={user} setUser={setUser} />
        
        <div style={{marginTop: "8rem"}} className="container">
          <div className="row">
              {
                templates ?(
                  templates.map(template => {
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

export default Home