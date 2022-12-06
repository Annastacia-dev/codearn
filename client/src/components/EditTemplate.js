import React,{ useState} from 'react'

const EditTemplate = ({ template }) => {

    const { id, title, description, image_url, live_site, github_link, features, category, technologies} = template

    const [formData, setFormData] = useState({
        title: title,
        description: description,
        image_url: image_url,
        live_site: live_site,
        github_link: github_link,
        features: features,
        category: category,
        technologies: technologies,
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch (`/templates/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            // clear form
            setFormData({
                title: "",
                description: "",
                image_url: "",
                live_site: "",
                github_link: "",
                features: "",
                category: "",
                technologies: "",
            })
            // refresh page
            window.location.reload()
        })
    }





  return (
    <>
    {/* Bootstrap form */}
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={formData.description}    
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="image_url">Image URL</label>
            <input
            type="text"
            className="form-control"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="live_site">Live Site</label>
            <input
            type="text"
            className="form-control"
            id="live_site"
            name="live_site"
            value={formData.live_site}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="github_link">Github Link</label>
            <input
            type="text"
            className="form-control"
            id="github_link"
            name="github_link"
            value={formData.github_link}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="features">Features</label>
            <input
            type="text"
            className="form-control"
            id="features"
            name="features"
            value={formData.features}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="technologies">Technologies</label>
            <input
            type="text"
            className="form-control"
            id="technologies"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
            />
        </div>
        <div style={{marginTop: "15px"}} className="row">
            <div className="col-6">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            <div className="col-6">
            <button 
            type="button" className="btn btn-danger"
            data-dismiss="modal"
            onClick = {() => {
                window.location.reload()
            }}
            >Close</button>
            </div>
        </div>
    </form>        
    </>
  )
}

export default EditTemplate