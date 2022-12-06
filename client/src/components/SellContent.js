import React from 'react'
import '../css/SellContent.css'
import Backbutton from './Backbutton'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import SellerExistingAccount from './SellerExistingAccount'
import SellerNewAccount from './SellerNewAccount'


const SellContent = () => {

  return (
    <>
    <div className='container sell-content px-4 px-lg-5'>
          <div className="row">
                 <div className="col-md-6">
                    < Backbutton />
                    <div className="brand-logo">
                    <i className="fa-brands fa-centercode"></i>
                    <h4 style={{display:"inline-block"}}>Codearn</h4>
                    </div>
                    <div className="sell-code-content">
                        <h4 className="subheading text-black">
                            Sell code templates.</h4>
                            <p className="text-black">
                            Become a Codearn contributor and make money selling UI code.
                            </p>
                            <div className='icon-text'> 
                                <i className="fa-solid fa-pen"></i>
                                <p className="text-black">
                                Create landing pages, cards, navigation layouts, forms, etc. We embrace all types of creativity.
                                </p>
                            </div>
                            <div className='icon-text'>   
                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                <p className="text-black">
                                Upload your resources to Codearn through our intuitive and easy-to-use interface.
                                </p>
                            </div>
                            <div className='icon-text'> 
                                <i className="fa-solid fa-sack-dollar"></i>
                                <p className="text-black">
                                Make money per every download your resources get. As simple as that.
                                </p>
                            </div>
                        </div>

                            {/* buttons */}

                            <div className="row">
                                <div className="col-md-6">
                                    < Popup
                                    trigger={
                                        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Existing account</button>
                                    }
                                    modal
                                    nested
                                    >
                                    < SellerExistingAccount />
                                    </Popup>
                                    </div>
                                    <div className="col-md-6">
                                     < Popup
                                     trigger={<button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Create New Account</button>}
                                        modal
                                        nested
                                        closeOnDocumentClick={true}
                                        contentStyle={{width: "50vw", height: "100vh"}}
                                        overlayStyle={{background: "rgba(0,0,0,0.5)"}}
                                        arrowStyle={{display: "none"}}
                                        >
                                        < SellerNewAccount />
                                     </Popup>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 how-img">
                            <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=740&t=st=1670004285~exp=1670004885~hmac=f363bb230dcaa562d43c779108ab6ad3a0ab72a51773d980d7f9de658bdaf60f" className="rounded-circle img-fluid" alt=""/>
                        </div>
                        </div>
    </div>
    </>
  )
}

export default SellContent