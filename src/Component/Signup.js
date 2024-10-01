import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import SignupCSS from './Signup.module.css'; // Ensure this file exists and is correctly set up.

function Signup() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        fname: "",
        lname: "",
        password: "",
        contact: "",
        district: "",
        gender: "",
        email:""
    });

    const changefn = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const sub = (a) => {
        a.preventDefault();
        console.log("data", data);
        axios.post('http://localhost:7000/api/User/AddUser', data) // Use http if running locally
            .then((res) => {
                console.log("submit", res);
               /* if (res.status === 200) {
                    navigate('/'); // Navigate on successful submission
                } else {
                    console.error("Unexpected response:", res);
                }*/
            })
            .catch((err) => {
                console.log("Error:", err);
            });
            navigate('/');
    };

    // Logs data changes; runs on component mount and when data changes
    useEffect(() => {
        console.log("Updated data:", data);
    }, [data]);

    return (
        <div className={SignupCSS.body}>
            <h2 className={SignupCSS.h2}>Signup</h2>
            <form className={SignupCSS.form} onSubmit={sub}>
                <div>
                    <input 
                        className={SignupCSS.select} 
                        type="text" 
                        name='fname' 
                        placeholder='Enter your first name' 
                        onChange={changefn} 
                        required 
                    />
                </div>
                <br />
                <div>
                    <input 
                        className={SignupCSS.select} 
                        type="text" 
                        name="lname" 
                        placeholder="Enter your Last name" 
                        onChange={changefn} 
                        required 
                    />
                </div>
                <br></br>
                <div>
                    <input 
                       className={SignupCSS.select} 
                       type="email" 
                       name="email" 
                       placeholder="Enter your email" 
                       onChange={changefn} 
                       required 
                    />
              </div>

                <div>
                    <input 
                        className={SignupCSS.select} 
                        type="password" 
                        name='password' 
                        placeholder="Password" 
                        onChange={changefn} 
                        required 
                    />
                </div>
                <div>
                    <label className={SignupCSS.label}>
                        <input 
                            className={SignupCSS.input} 
                            type="radio" 
                            name="gender" 
                            value="Male" 
                            checked={data.gender === "Male"} 
                            onChange={changefn} 
                        />
                        Male
                    </label>
                    <label className={SignupCSS.label}>
                        <input 
                            className={SignupCSS.input} 
                            type="radio" 
                            name="gender" 
                            value="Female" 
                            checked={data.gender === "Female"} 
                            onChange={changefn} 
                        />
                        Female
                    </label>
                    <label className={SignupCSS.label}>
                        <input 
                            className={SignupCSS.input} 
                            type="radio" 
                            name="gender" 
                            value="Other" 
                            checked={data.gender === "Other"} 
                            onChange={changefn} 
                        />
                        Other
                    </label>
                </div>
                <div>
                    <select 
                        className={SignupCSS.select}
                        name="district" 
                        value={data.district} 
                        onChange={changefn} 
                        required
                    >
                        <option value="">Select District</option>
                        <option value="Thirvananthapuram">Thirvananthapuram</option>
                        <option value="Kollam">Kollam</option>
                        <option value="Pathanamthitta">Pathanamthitta</option>
                        <option value="Alappuzha">Alappuzha</option>
                        <option value="Kottayam">Kottayam</option>
                        <option value="Idukki">Idukki</option>
                        <option value="Ernakulam">Ernakulam</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Wayanad">Wayanad</option>
                        <option value="Kozhikode">Kozhikode</option>
                        <option value="Kannur">Kannur</option>
                        <option value="Malappuram">Malappuram</option>
                        <option value="Palakkad">Palakkad</option>
                        <option value="Kasargod">Kasargod</option>
                    </select>
                </div>
                <input 
                    type="text" 
                    className={SignupCSS.select}
                    name="contact" 
                    placeholder='Contact number' 
                    onChange={changefn} 
                    required 
                />
                <button type="submit" className="btn btn-primary">
                    ADD
                </button>
            </form>
        </div>
    );
}

export default Signup;
