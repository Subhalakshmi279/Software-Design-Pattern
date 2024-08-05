import React from 'react'
import '@/assets/css/Help.css';
import { Link } from 'react-router-dom';
import img from '@/assets/images/qa.jpg';

function Help() {
  return (
    <div className="container-help">
      <div className="img-container">
        <img src={img} alt="Help Desk" />
      </div>
      <div className="form-container">
        <form className='request-form'>
          <h1>Request Form</h1>
          <div className="form-group">
            <label htmlFor="staffId">Staff ID</label>
            <input type="text" id="staffId" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="queryType">Query Type</label>
            <select id="queryType" className="form-control">
              <option>Change of Subject</option>
              <option>Classroom Issues</option>
              <option>Others</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" className="form-control" rows="4"></textarea>
          </div>
          <Link to="/">
            <button type="button" className="submit-button">Submit</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Help;
