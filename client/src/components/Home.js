import React from 'react'
import NavBar from './NavBar'
import TemplateCard from './TemplateCard'

const Home = ({ user, setUser, templates }) => {

  return (
    <>
        <NavBar user={user} setUser={setUser} />
       {/* Cards Container */}
        <div style={{marginTop: "8rem"}} className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              {
                templates.map(template => {
                  return <TemplateCard key={template.id} template={template} />
                }
                )
              }

              </div>
            </div>
          </div>
    </>
  )
}

export default Home