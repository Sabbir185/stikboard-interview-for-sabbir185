import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import './Login.css'
import SignUp from './SignUp';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data => {
        fetch(`http://localhost:5000/login?email=${data.email}`)
            .then(res => res.json())
            .then(json => {
                json.map(m => {
                    if (m.email == data.email && m.password == data.password) {
                        setLoggedInUser({ password: m.password })
                        history.replace(from)
                    }
                })
            })

    };


    const [toggle, setToggle] = useState(true);

    const handleSignUp = () => {
        setToggle(false);
    }


    return (
        <section>
            {
                toggle ?

                    <div className="login mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type='email' {...register("email", { required: true })} className="form-control" placeholder="Username" />
                            {errors.email && <span className="text-danger">This field is required</span>}

                            <input type='password' {...register("password", { required: true })} className="form-control mt-3" placeholder="password" />
                            {errors.password && <span className="text-danger">This field is required</span>}

                            <input type="submit" value="login" className="btn btn-success d-block mx-auto mt-4" />
                        </form>
                        <div className="d-flex justify-content-center align-item-center pb-3">
                            <span className="text-light">Already have an account? </span><button className="btn btn-warning btn-sm ml-3" onClick={handleSignUp}>sign up</button>
                        </div>
                    </div>

                    :

                    <div className="sign-up mt-5">
                        <SignUp toggle={toggle} />
                    </div>
            }

        </section>
    );
};

export default Login;