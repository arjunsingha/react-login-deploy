import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginClicked = ()=>{
        navigate('/login')
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name, email, password);
        console.log(import.meta.env.VITE_BASE_API_URL)
    }

    return ( 
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 vw-100'>
            <div className="bg-white p-3 rounded">
            <h2>Register Yourself</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group p-3">
                        <label for="exampleInputName">Name</label>
                        <input type="text"
                        className="form-control rounded-2"
                        id="exampleInputName"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(evt)=>setName(evt.target.value)}
                        />
                    </div>
                    <div className="form-group p-3">
                        <label for="exampleInputEmail">Email Address</label>
                        <input type="email"
                        className="form-control rounded-2"
                        id="exampleInputEmail"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(evt)=>setEmail(evt.target.value)}
                        />
                    </div>
                    <div className="form-group p-3">
                        <label for="exampleInputPassword">Password</label>
                        <input type="password"
                        className="form-control rounded-2"
                        id="exampleInputEmail"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(evt)=>setPassword(evt.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Register</button>
                </form>
                <p>Already have an account?</p>
                <button  className="btn btn-default w-100 bg-light" onClick={loginClicked}>Login</button>
            </div>
        </div>
     );
}
 
export default SignUp;