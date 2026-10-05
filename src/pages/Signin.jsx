import React, { useState } from 'react'
import { Link, replace, useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const handleSignin = () => {
        let allUsers = JSON.parse(localStorage.getItem("users"))

        const userObj = {
            email: email.trim().toLowerCase(),
            password: password.trim()
        }

        if(email === '' || password === ''){
            alert('Fill all inputs')
        } else{
            let found = allUsers.find(newUser=> newUser.email === email && newUser.password === password)

            if(found){
                allUsers.push(userObj)

                localStorage.setItem('currentUser', JSON.stringify(found))
                
                navigate('/dashboard')
            } else{
                alert('Invalid password/email')
            }
        }
    };
return (
    <>
        <div className='container'>
        <form action="" className='containerForm'>
            <h1>Welcome back</h1>
            <p>Sign in to access your portal</p>

            <label htmlFor="">Email</label>
            <input type="email" placeholder='studentemail@gmail.com' required value={email} onChange={(e)=>setemail(e.target.value)}/>

            <label htmlFor="">Password</label>
            <input type="password" placeholder='Create password' required value={password} onChange={(e)=>setpassword(e.target.value)}/>

            <button type='submit' onClick={handleSignin}>Sign In</button>
            <p style={{margin: 'auto'}}>New student? <Link className='link'to={'/signup'}>Sign up</Link></p>
        </form>
    </div>
    
    </>
)
}

export default Signin