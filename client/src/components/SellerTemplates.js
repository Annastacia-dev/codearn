import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Brand from './Brand'
import Backbutton from './Backbutton'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import EditTemplate from './EditTemplate'

const SellerTemplates = ({user, templates}) => {

    const sellerTemplates = user ? user.username === 'admin' ? templates : user.templates : null





  return (
    <>
    <div className="container">
        < ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
         />
        <div className="row">
            <div className="col-md-12">
                <h2 style={{textAlign: "center", marginTop :"20px"}}>
                {
                    user ? user.username === 'admin' ? 'All Templates' : 'My Templates' : null
                }
                </h2>
                <div className="row">
                <div className="col">
                  <Backbutton/>
                  <div className="col">
                  <Brand/>
                </div>
                </div>   
              </div> 
            </div>
        </div>
        <div className="row">
            {
                sellerTemplates ? (
                    sellerTemplates.map(template => {

                        const handleDeleteTemplate = () => {
                            fetch(`/templates/${template.id}`, {
                                method: 'DELETE'
                            })
                            .then(r => r.json())
                            .then(data => {
                                toast.success(data.message,{
                                    position: "top-center",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored"
                                })
                                setTimeout(() => {
                                    window.location.reload()
                                }, 1000)
                            })
                        }



                        return (
                            <div key={template.id} className="col-lg-3 col-md-6 mb-4">
                                <div className="card h-100">
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
                                                    <div 
                                                    className="edit-button"
                                                    style={{
                                                        marginLeft: "160px"
                                                    }}
                                                    >
                                                    <br />

                                                    < Popup 
                                                    trigger ={<button className='btn'> <i className="fa-solid fa-pen" style={{color: "blue",fontSize: "15px"}}></i></button>} position = "right center"
                                                    // increase size of popup & add close button
                                                    modal
                                                    nested
                                                    // add close button
                                                    closeOnDocumentClick={true}



                                                    >
                                                        <div>
                                                            <EditTemplate template={template} />
                                                        </div>
                                                    </Popup>
                                                    

                                                    <span />
                                                    <button className='btn'onClick={handleDeleteTemplate}>
                                                    <i className="fa-solid fa-trash"style={{color: "red",fontSize:"15px"}}></i>
                                                    </button>
                                                    </div>
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