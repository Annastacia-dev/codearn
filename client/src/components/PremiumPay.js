import React from 'react'
import Brand from './Brand'



const PremiumPay = () => {
  return (
    <>

    {/* Bootstrap */}

    <div style={{marginTop: "40px"}} className=" container">
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div id="first">
                    <div className="myform form ">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <Brand/>
                                <h3>Pay for Premium</h3>
                            </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <p>One time payment of Kshs 50.00 for 30 days, Starting today! </p>
                            </div>
                            <div className="col-md-12 text-center">
                                <p>Pay with M-Pesa</p>
                                {/* mpesa logo */}
                                <img style={{marginTop: '-30px'}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/2560px-M-PESA_LOGO-01.svg.png" alt="mpesa logo" width="100px" height="100px"/>
                                <p>Enter your phone number below to pay for Codearn with M-pesa 
                                    <br />
                                    You will receive a prompt to enter your M-Pesa PIN on your phone
                                    to complete the transaction.
                                </p>
                            </div>

                            <form style={{padding: "30px", border: "1px solid #ccc", borderRadius: "5px" }}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Phone Number</label>
                                    <input
                                    type="number"
                                    name="phone"
                                    className="form-control"
                                    id="phone"
                                    aria-describedby="emailHelp"
                                    placeholder='Enter your phone number'
                                    />
                                </div>
                            </form>
                            <div className="col-md-12 text-center ">
                                <button type="submit" className="log-in btn btn-block mybtn btn-primary tx-tfm">Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
                                

    </>
  )
}

export default PremiumPay