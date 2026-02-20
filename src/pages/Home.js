import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const {id} = useParams();

    const [employees, setEmployees] = useState([]);

    useEffect (() => {
        loadEmployees()
    },[]);

    const loadEmployees=async()=>{
        const result=await axios.get("http://127.0.0.1:8080/api/employees");
        setEmployees(result.data);
    }

    const deleteEmployees=async(id)=>{
        await axios.delete(`http://127.0.0.1:8080/api/employees/${id}`)
        loadEmployees();
    }


    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Salary</th>
                        <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee, index)=>(
                                <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    <Link to={`/viewEmployee/${employee.id}`} className='btn btn-primary mx-2'>View</Link>
                                    <Link to={`/editEmployee/${employee.id}`} className='btn btn-outline-primary mx-2'>Update</Link>
                                    <button 
                                    onClick={()=> deleteEmployees(employee.id)}
                                    className='btn btn-danger mx-2'>Delete</button>
                                </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
