import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/password_resets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        })
        .then(r => {
            if (r.ok) {
                r.json().then(data => {
                    navigate('/new_password')
                })
            } else {
                r.json().then(err => {
                    setErrors(err.errors)
                })
            }
        })
    }

  return (
    <>
    <div className="container">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="submit" value="Reset Password" />
        </form>
        {errors.map(error => <p key={error}>{error}</p>)}
    </div>
    </>
  )
}

export default ResetPassword