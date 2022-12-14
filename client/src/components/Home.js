import React,{  useState } from 'react'
import NavBar from './NavBar'
import TemplateCard from './TemplateCard'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import PremiumPay from './PremiumPay'

const Home = ({ user, setUser, templates }) => {

  const [search, setSearch] = useState('')

  const filteredTemplates =  templates.filter(template => {
    return template.title.toLowerCase().includes(search.toLowerCase()) || template.description.toLowerCase().includes(search.toLowerCase()) || template.category.toLowerCase().includes(search.toLowerCase()) || template.technologies.toLowerCase().includes(search.toLowerCase() )
  })


  return (
    <>
        <NavBar user={user} setUser={setUser} />  
        <div style={{marginTop: "8rem"}} className="container">
          <div className="row">
          {
            
          user ? user.premium ? null :
           (
            <>
            <Popup
            trigger={<button className="btn btn-primary banner">
            < i className="fas fa-star"></i>
            Upgrade to premium to access all templates
            </button> }
            modal
            nested
            contentStyle={{width: "50rem", height: "50rem"}}
            >
              <PremiumPay user={user} />
            </Popup>
            </>
           )
           : null
         }
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
               
                filteredTemplates ?(
                  filteredTemplates.sort(() => Math.random() - 0.5).map(template => {
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