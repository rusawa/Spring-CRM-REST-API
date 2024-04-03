import '../index.css'
import axios from "axios"
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

function Table(){
    const {id} = useParams()
    const [customer, setCustomer] = useState([])
    useEffect(()=>{
        loadCustomers()
    },[])
    const loadCustomers =async()=>{
        const result =await axios.get("http://localhost:8080/CRM/")
        setCustomer(result.data)
    }
    const deleteCustomer = async (id)=> {
        await axios.delete(`http://localhost:8080/CRM/customer/${id}`)
        loadCustomers()
    }

    return(
        <div className='body'>
            <table>
                <tr>
                    {/*<th>ID</th>*/}
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                {
                    customer.map((customer, index)=>(
                        <tr>
                            {/*<td key={index}>{index+1}</td>*/}
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.email}</td>
                            <td id="action-buttons">
                                <Link to={`/update/${customer.id}`} className="green-button">Update</Link>
                                <a className="red-button" onClick={()=> {if(window.confirm("Are you sure you want to delete this record?")){deleteCustomer(customer.id)}}}>
                                    Delete
                                </a>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default Table