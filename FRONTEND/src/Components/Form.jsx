import { useState } from 'react';
import '../index.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Form(){
    let navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const customer = {
        firstName,
        lastName,
        email
    }

    const onSubmit= async (e)=>{
        e.preventDefault()
        await axios.post("http://localhost:8080/CRM/add", customer)
        navigate("/")
    }

    return(
        <div className='body'>
            <div className='form-wrapper'>
                <h1>Add a Customer</h1>
                <form className="customer-form" onSubmit={(e)=> onSubmit(e)}>
                    <input type="text" required placeholder='First Name' value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                    <input type="text" required placeholder='Last Name' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                    <input type="email" required placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <input id="blue-button" type="submit" value="Add"/>
                </form>
            </div>
        </div>
    );
}

export default Form