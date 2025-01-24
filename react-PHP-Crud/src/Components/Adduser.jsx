import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Adduser() {

    const navigate = useNavigate();
    const [formvalue, setFormvalue] = useState({ name: '', email: '', password: '', dob: '' });
    const [message, setMessage] = useState('');
    const handleInput = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formvalue);
        const formData = { name: formvalue.name, email: formvalue.email, password: formvalue.password, dob: formvalue.dob };
        const res = await axios.post("http://localhost/reactcrudphp/api/user.php", formData);
        if (res.data.success) {
            setMessage(res.data.success);
            setTimeout(() => {
                navigate('/userlist');
            }, 2000);
        }

    }
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-4'>
                        <h5 className='mb-4'>Adduser</h5>
                        <p className='text-danger'> {message} </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label className="col-sm-2">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" name='name' value={formvalue.name} className="form-control"
                                        onChange={handleInput} />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-2">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" name='email' value={formvalue.email} className="form-control"
                                        onChange={handleInput} />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-2">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" name='password' value={formvalue.password} className="form-control"
                                        onChange={handleInput} />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-2">DOB</label>
                                <div className="col-sm-10">
                                    <input type="date" id='inputDOB' name='dob' value={formvalue.dob} className="form-control"
                                        onChange={handleInput} />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <label className="col-sm-2"></label>
                                <div className="col-sm-10">
                                    <button name='submit' className='btn btn-success'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Adduser
