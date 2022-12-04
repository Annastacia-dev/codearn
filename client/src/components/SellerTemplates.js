import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

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
                            <div key={template.id} className="col-md-3">
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
                                                    <div 
                                                    className="edit-button"
                                                    style={{
                                                        marginLeft: "160px"
                                                    }}
                                                    >
                                                    <br />
                                                    <button className='btn'>
                                                    <i 
                                                    className="fa-solid fa-pen"
                                                    style={{
                                                        color: "blue",
                                                        fontSize: "15px"
                                                    }}
                                                    ></i>
                                                    </button>
                                                    <span />
                                                    <button 
                                                    className='btn'
                                                    onClick={handleDeleteTemplate}
                                                     >
                                                    <i 
                                                    className="fa-solid fa-trash"
                                                    style={{
                                                        color: "red",
                                                        fontSize: "15px"
                                                    }}
                                                    ></i>
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