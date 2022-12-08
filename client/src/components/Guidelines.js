import React from 'react'
import Brand from './Brand'
import Backbutton from './Backbutton'

const Guidelines = () => {
  return (
    <div className='container-fluid log-in '>
      <div className='row'>
      <div className="col">
          < Backbutton />
        </div>
        <div className="col">
          < Brand />
        </div>
        <div className='col-md-12'>
          <h1>Upload guidelines</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <p>
            <h3 className='subheading'>Categories</h3>
            Includes either of the following: <br />
            <ul>
              <li>Landing Page</li>
              <li>Blog</li>
              <li>Cards</li>
              <li>Tables</li>
              <li>Forms</li>
              <li>Charts</li>
              <li>Buttons</li>
              <li>Icons</li>
              <li>Navigation</li>
            </ul>
          </p>
        </div>
        <div className='col'>
          <p>
            <h3 className='subheading'>Technologies</h3>
            Includes either of the following: <br />
            <ul>
              <li>Bootstrap</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Vue</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
            </ul>
          </p>
        </div>
        <ul>
          <li>Image link must be valid</li>
          <li>Github link must be valid</li>
          <li>Give a clear description</li>
          <li>Give a clear and short title</li>
        </ul>
        </div>

    </div>
  )
}

export default Guidelines