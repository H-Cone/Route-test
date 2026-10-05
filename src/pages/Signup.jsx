import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")



    // console.log(user);

    
    const handleSignup = () => {
        let allUsers = JSON.parse(localStorage.getItem("users")) || []

        const userObj = {
            firstName,
            lastName,
            email: email.trim().toLowerCase(),
            password
        }

        if(firstName.trim() === '' || lastName.trim() === '' || email === '' || password.trim() === '') {
            alert('Fill all inputs')
        } else{
            let found = allUsers.find(user=> user.email === userObj.email)

            if(found){
                alert('User already exists')
            } else{
                allUsers.push(userObj)

                localStorage.setItem("users", JSON.stringify(allUsers))

                navigate('/signin')
            }
        }

    };

return (
    <>
    <div className='container'>
        <form action="" className='containerForm'>
            <h1>Create account</h1>
            <p>Join the student portal</p>


            <div className='nameContainer'>
                <div>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Enter your first name' required
                    value={firstName} onChange={(e)=> setfirstName(e.target.value)}/>
                </div>
                
                <div>
                    <label htmlFor="">Last name</label>
                    <input type="text" placeholder='Enter your last name' required value={lastName} onChange={(e)=> setlastName(e.target.value)}/>
                </div>
            </div>

            <label htmlFor="">Email</label>
            <input type="email" placeholder='studentemail@gmail.com' required value={email} onChange={(e)=> setemail(e.target.value)}/>

            <label htmlFor="">Password</label>
            <input type="password" placeholder='Create password' required value={password} onChange={(e)=> setpassword(e.target.value)}/>

            <button type='submit' onClick={handleSignup}>Sign Up</button>
            <p style={{margin: 'auto'}}>Already registered? <Link className='link'to={'/signin'}>Sign in</Link></p>
        </form>
    </div>
    
    </>
)
}

export default Signup