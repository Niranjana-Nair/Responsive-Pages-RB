import React from 'react'
import './UserRegister.css'

function UserRegister() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">

                <div className="user-profile" >
                    <img src="" height="100px" width="100px" />
                    <input type="file" accept="image/*" className={"form-control-file"} />
                    {/* onChange={profileUpdate} id="user-profile-uploader"  */}
                    {/* <p className="error-text">{errors.profileSrc}</p> */}
                </div>

                <label>First Name *</label>
                <input className="registerInput" type="text" placeholder="First Name..." />
                <label>Last Name *</label>
                <input className="registerInput" type="text" placeholder="Last Name..." />
                <label>Gender *</label>

                {/* <div className="select-box"> */}
                <select className='dropdown-select'
                    name="gender">
                    {/* value={values.gender} */}
                    {/* onChange={handleInputChange}  */}
                    <option hidden>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to say</option>
                </select>
                {/* <p className="error-text">{errors.gender}</p> */}
                {/* </div> */}
                <label>Password *</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." />
                <label>Re-enter your password *</label>
                <input className="registerInput" type="password" placeholder="Confirm your password..." />
                {/* <div className="input-box"> */}
                <label>Phone Number *</label>
                <input type="number" className={"form-control"} placeholder="Number" name="number" />
                {/* value={values.number} */}
                {/* onChange={handleInputChange} required  */}
                {/* <p className="error-text">{errors.number}</p> */}
                {/* </div> */}

                {/* <div class="input-box"> */}
                <label>Upload license image *</label>
                <input type="file" className={"form-control-file"} accept="image/*" />
                {/* onChange={showPreview} id="image-uploader" */}
                {/* </div> */}
                {/* <div className="input-box"> */}

                <label>Department *</label>
                {/* <div className="select-box"> */}
                <select className='dropdown-select'
                    name="department">
                    {/* value={values.department} */}
                    {/* onChange={handleInputChange}  */}
                    <option hidden>Department</option>
                    <option>Delivery</option>
                    <option>IT</option>
                    <option>Admin</option>
                    <option>HR</option>
                </select>
                {/* <p className="error-text">{errors.department}</p> */}
                {/* </div> */}
                {/* </div> */}


                <label>Employee ID *</label>
                <input type="text" className={"form-control"} placeholder="Employee Id" name="employeeId" />
                {/* value={values.employeeId}
                        onChange={handleInputChange} required 
                    <p className="error-text">{errors.employeeId}</p> */}

            </form >
            <button className="registerButton">Register</button>
            <a href='#' className='existing-user'>
                Already registered?
            </a>
        </div>

    )
}

export default UserRegister