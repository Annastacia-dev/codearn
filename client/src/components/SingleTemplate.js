import React from 'react'
import { useParams } from 'react-router-dom'

const SingleTemplate = ({user, templates}) => {

    const params = useParams()

    const template = templates.find(template => template.id === parseInt(params.id))

    const {id, title, description, image_url, live_site, github_link, features, categories, technologies, premium} = template


  return (
    <>
        <h1>Single Template</h1>
        <h2>
            {title}
        </h2>

    </>
  )
}

export default SingleTemplate