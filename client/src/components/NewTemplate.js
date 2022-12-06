import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewTemplate = ({user}) => {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [technologies, setTechnologies] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [liveSite, setLiveSite] = useState('')
    const [githubLink, setGithubLink] = useState('')
    const [features, setFeatures] = useState('')
    const [errors, setErrors] = useState([])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/templates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                category,
                technologies,
                image_url: imageUrl,
                live_site: liveSite,
                github_link: githubLink,
                features,
                premium: user ? user.username === 'admin' ? false : true : false,
                user_id: user ? user.id : null
        })
        })
        .then( r => {
            if (r.ok) {
                r.json().then(template => {
                    toast.success("You have successfully created a new template!",{
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
                        navigate('/dashboard')
                        window.location.reload()
                    }
                    , 3000)
                    // clear form
                    setTitle('')
                    setDescription('')
                    setCategory('')
                    setTechnologies('')
                    setImageUrl('')
                    setLiveSite('')
                    setGithubLink('')
                    setFeatures('')
                    // refresh page
                    window.location.reload()
                })
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }


  return (
    <>
    
    <div className="container">
        <div className="text-center">
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
            theme='colored'
         />
        </div>
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div id="first">
                    <div className="myform form ">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h5>Upload a new template</h5>
                                </div>
                                </div>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input autoComplete='on' type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea autoComplete='on' type="text" className="form-control" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <input autoComplete='on' type="text" className="form-control" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="technologies">Technologies</label>
                <input autoComplete='on' type="text" className="form-control" id="technologies" name="technologies" value={technologies} onChange={(e) => setTechnologies(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input autoComplete='on' type="text" className="form-control" id="imageUrl" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="liveSite">Live Site</label>
                <input autoComplete='on' type="text" className="form-control" id="liveSite" name="liveSite" value={liveSite} onChange={(e) => setLiveSite(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="githubLink">Github Link</label>
                <input autoComplete='on' type="text" className="form-control" id="githubLink" name="githubLink" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="features">Features</label>
                <textarea autoComplete='on' type="text" className="form-control" id="features" name="features" value={features} onChange={(e) => setFeatures(e.target.value)} />
            </div>
            
            {
                                    errors ? (
                                        errors.map( error => error ?
                                                    <div className="alert alert-danger" role="alert">
                                                    <p>{error}</p>
                                                    </div>
                                                    :
                                                    null
                                                )
                                            
                                    ) : null
                                    
                                }
                                <div style={{marginTop: "15px"}} className="row">
                                    <div className="col">
                                        <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Upload template</button>
                                    </div>
                                    <div className="col">
                                        <button type="submit" className=" btn btn-block mybtn btn-danger tx-tfm"
                                        onClick={() => {window.location.reload()}}
                                        >Close</button>
                                    </div>

                                </div>
            

          
        </form>
        </div>
        </div>
        </div>
        </div>
                                
    </div>



    </>
  )
}

export default NewTemplate