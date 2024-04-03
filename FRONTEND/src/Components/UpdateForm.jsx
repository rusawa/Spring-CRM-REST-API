import { useEffect, useState } from 'react';
import '../index.css'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


function UpdateForm(){
    let navigate = useNavigate()

    const { id } = useParams()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const customer = {
        firstName,
        lastName,
        email
    }

    useEffect (()=> {
        loadCustomer()
    },[])

    const onSubmit= async (e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:8080/CRM/customer/${id}`, customer)
        navigate("/")
    }

    const loadCustomer = async ()=> {
        const result = await axios.get(`http://localhost:8080/CRM/customer/${id}`)
        setFirstName(result.data.firstName)
        setLastName(result.data.lastName)
        setEmail(result.data.email)
    }

    return(
        <div className='body'>
            <div className='form-wrapper'>
                <h1>Update Customer Information</h1>
                <form className="customer-form" onSubmit={(e)=> onSubmit(e)}>
                    <input type="text" required placeholder='First Name' value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                    <input type="text" required placeholder='Last Name' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                    <input type="email" required placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <input id="blue-button" type="submit" value="Update"/>
                </form>
            </div>
        </div>
    );
}

export default UpdateForm