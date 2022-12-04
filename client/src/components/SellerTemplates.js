import React from 'react'

const SellerTemplates = ({user, templates}) => {

    const sellerTemplates = user ? user.username === 'admin' ? templates : user.templates : null
   

  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>
                {
                    user ? user.username === 'admin' ? 'All Templates' : 'My Templates' : null
                }
                </h1>
            </div>
        </div>
        <div className="row">
            {
                sellerTemplates ? (
                    sellerTemplates.map(template => {

                        console.log(template)


                        return (
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={template.image_url} alt={template.title} />
                                    <div className="card-body">
                                        <h6 className="card-title">{template.title}</h6>
                                        <small className="card-text">{template.category}</small>
                                        <br />
                                        <small className="card-text">{template.technologies}</small>
                                        <br />
                                        <small>
                                            Created by {
                                                template.user ?( 
                                                    template.user.username === "admin" ? "Codearn" : template.user.first_name + " " + template.user.last_name
                                                     ): 'Codearn'
                                            }
                                        </small>
                                        {/* admin can edit and delete */}
                                        {
                                            user ? (
                                                user.username === 'admin' ? (
                                                    <>
                                                    <br />
                                                    <button className='btn'>Edit</button>
                                                    <span />
                                                    <button className='btn' >Delete</button>
                                                    </>
                                                ) : null
                                            ) : null
                                        }
                                        




                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </div>
    </div>
    </>
  )
}

export default SellerTemplates