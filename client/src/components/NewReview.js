import React,{useState} from 'react'

const NewReview = ({template, currentUser}) => {

    const [rating, setRating] = useState(1)
    const [comment, setComment] = useState("")

    const [errors, setErrors] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rating: rating,
                comment: comment,
                template_id: template.id,
                user_id: currentUser.id
            })
        })
      .then(r => 
        r.json().then(data => {
            if (r.ok) {
                console.log("data",data)
                setRating(1)
                setComment("")
                window.location.reload()
            } else {
                setErrors(data.errors)
            }
        })
        )
        
    }

    console.log(errors)





  return (
    <div>
        {/* Bootstrap */}
        <div style={{marginBottom: "30px"}} className="log-in container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div id="first">
                        <div className="myform form ">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h3>Leave a Review</h3>
                                    </div>
                                    </div>
                                    <form
                                    onSubmit={handleSubmit}
                                    >
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Rating</label>
                                            <input
                                            type="number"
                                            name="rating"
                                            className="form-control"
                                            id="rating"
                                            aria-describedby="emailHelp"
                                            value={rating}
                                            onChange={(e) => setRating(e.target.value)}
                                            />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Comment</label>
                                                <textarea
                                                type="text"
                                                name="comment"
                                                className="form-control"
                                                id="comment"
                                                aria-describedby="emailHelp"
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                                />
                                                </div>
                                                <div className="row">
                                                    <div className="col ">
                                                        <button type="submit" className="log-in btn btn-block mybtn btn-primary tx-tfm">Submit</button>
                                                    </div>
                                                    <div className="col ">
                                                    <button type="submit" className="log-in btn btn-block mybtn btn-danger tx-tfm"
                                                    onClick={() => window.location.reload()}
                                                    >Close</button>
                                                    </div>
                                                </div>
                                {
                                    errors ?
                                    errors.map(error => 
                                        <div className="alert alert-danger" role="alert">
                                            <p>{error}</p>
                                        </div>

                                    
                                    )
                                    :
                                    null
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewReview