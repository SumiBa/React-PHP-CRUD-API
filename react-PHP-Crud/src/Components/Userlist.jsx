import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Userlist() {

    const [userData, setUserData] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        const reqData = await fetch("http://localhost/reactcrudphp/api/user.php");
        const resData = await reqData.json();
        setUserData(resData);
    }

    const handleDelete = async (id) => {
        const res = await axios.delete("http://localhost/reactcrudphp/api/user.php/" + id);
        setMessage(res.data.success);
        getUserData();
    }

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 mt-4'>
                        <h5 className='mb-4'>Userlist</h5>
                        <p className='text-danger'>{message}</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Sr. No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData.map((uData, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{uData.name}</td>
                                            <td>{uData.email}</td>
                                            <td>{uData.password}</td>
                                            <td>{uData.dob}</td>
                                            <td>
                                                <Link to={"/edituser/" + uData.id} className="btn btn-success mx-2 ">Edit</Link>
                                                <button className="btn btn-danger" onClick={() => handleDelete(uData.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Userlist
