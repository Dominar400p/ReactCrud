import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let Update = () => {
    let[id,setId] = useState('')
    let[name,setName] = useState('')
    let[city,setCity] = useState('')
    let[state,setState] = useState('')
    let[company,setCompany] = useState('')
    let navigate = useNavigate()
    useEffect(()=>{
       setId(localStorage.getItem("id"))
       setName( localStorage.getItem('name'))
       setCity(localStorage.getItem("city"))
       setState(localStorage.getItem("state"))
       setCompany(localStorage.getItem("company"))
    },[])
    
    let updateData = () =>{
        axios.put("https://63e7a990bb2862797715c970.mockapi.io/users"+"/"+id,{
            name,
            city,
            state,
            company
        })
        navigate('/read')
    }
    return (
        <>
            <form>
                <div className="card col-md-7 ms-5 mt-5">
                    <div className="card-header text-center">
                        <h1>Update Information</h1>
                    </div>
                    <div className="card-body">
                        <div className="container">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" className="form-control" placeholder="enter name" value={name} onChange={e => setName(e.target.value)}></input>
                            </div>
                            <div>
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" className="form-control" placeholder="enter city" value={city} onChange={e => setCity(e.target.value)}></input>
                            </div>
                            <div>
                                <label htmlFor="state">State</label>
                                <input type="text" id="state" className="form-control" placeholder="enter state" value={state} onChange={e => setState(e.target.value)}></input>
                            </div>
                            <div>
                                <label htmlFor="select">Company</label>
                                <select className="form-control" id="select" onChange={e => setCompany(e.target.value)} value={company}>
                                    <option>--select--</option>
                                    <option>Infosys</option>
                                    <option>Tcs</option>
                                    <option>Wipro</option>
                                    <option>Coignizant</option>
                                    <option>Hcl</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <button className="btn btn-warning btn-sm" onClick={updateData}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
};

export default Update