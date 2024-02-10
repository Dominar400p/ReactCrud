import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
let Read = () => {
    let [data, setData] = useState([])
    let navigate = useNavigate();

    let getData = async () => {
        let res = await axios.get("https://63e7a990bb2862797715c970.mockapi.io/users")
        setData(res.data)
    }
    useEffect(() => {
        getData();
    }, [])

    let editUser = ({name,city,state,company,id}) =>{
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("city",city)
        localStorage.setItem("state",state)
        localStorage.setItem("company",company)
        navigate("/update")
    }

    let deleteUser = (id) =>{
        axios.delete("https://63e7a990bb2862797715c970.mockapi.io/users"+"/"+id).then(res=>getData())
    }
    return (
        <>
            <div className='container mt-5'>
                <div className='card-header text-white text-center' style={{ backgroundColor: "coral" }}>
                    <h2>Welcome!</h2>
                </div>
                <div className='card-body'>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>Name</th><th>City</th><th>State</th><th>Company</th><th>Edit</th><th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((datas)=>(
                                    <>
                                    <tr>
                                        <td>{datas.name}</td>
                                        <td>{datas.city}</td>
                                        <td>{datas.state}</td>
                                        <td>{datas.company}</td>
                                        <td><button className='btn btn-primary btn-sm' onClick={e=>{editUser(datas)}}>Edit</button></td>
                                        <td><button className='btn btn-danger btn-sm' onClick={e=>{deleteUser(datas.id)}}>Delete</button></td>
                                    </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                    <Link to="/add"><button className='btn btn-primary btn-sm mt-3'>Add</button></Link>
                </div>
            </div>
        </>
    )
};


export default Read