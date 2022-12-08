import React,{ useState, useEffect } from 'react'
import Brand from './Brand'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const PremiumPay = ({user}) => {

// console.log("freeuser",user)

const [phoneNumber, setPhoneNumber] = useState('')


const [checkoutRequestID, setCheckoutRequestID] = useState('')

const handleMpesaStkPush = () => {
    fetch('https://2349-105-160-71-115.in.ngrok.io/stkpush', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phoneNumber: phoneNumber,
            amount: "50",        
    })
    })
    .then(res => res.json())
    .then(data => {
        console.log("stkpush",data)    
            setCheckoutRequestID(data[1].CheckoutRequestID)
    }
    )
}



const handleMpesaQuery = () => {

    setCheckoutRequestID(checkoutRequestID)
    console.log("checkoutRequestID",checkoutRequestID)
    
    fetch('https://2349-105-160-71-115.in.ngrok.io/stkquery', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            checkoutRequestID: checkoutRequestID,

    })
    })
    .then(res => res.json())
    .then(data => {
        console.log("stkquery",data)
        if(data[0]=== 'success'){
            toast.success("Payment Successful")
        }else{
            toast.error("Payment Failed")
        }
        // clear the form
        setPhoneNumber('')
        // update the user premium status to true
        fetch('/profile',{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                premium: true,
                password: user.password_digest
        })
        })
        .then(res => res.json())
        .then(data => {
            console.log("update user premium status",data)
        }
        )
        // refresh the page
        window.location.reload()
    }
    )
}

  return (
    <>

    <div style={{marginTop: "40px"}} className=" container">
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div id="first">
                    <div className="myform form ">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <Brand/>
                                <h3>Pay for Premium</h3>
                                < ToastContainer
                                    position="top-center"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme='colored'
                                 />
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

                            <form 
                            style={{padding: "30px", border: "1px solid #ccc", borderRadius: "5px" }}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Phone Number</label>
                                    <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    id="phone"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    aria-describedby="emailHelp"
                                    placeholder='Enter your phone number'
                                    required
                                    />
                                    <p>
                                        <small>
                                           Must be in the format '2547xxxxxxxx'
                                        </small>
                                    </p>
                                </div>
                            </form>
                            <div className="col-md-12 text-center ">
                                <button style={{marginRight: "15px"}} type="submit" className="log-in btn btn-block mybtn btn-primary tx-tfm"
                                onClick={
                                   ()=> {
                                    window.confirm("Are you sure you want to pay for premium?") && handleMpesaStkPush()
                                   }
                                }
                                >Send Prompt</button>
                                <span>
                                <button type="submit" className="log-in btn btn-block mybtn btn-primary tx-tfm"
                                onClick={
                                   ()=> {
                                    setTimeout(() => {
                                        handleMpesaQuery()
                                    }, 5000);
                                   }
                                }
                                >Pay</button>
                                </span>
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