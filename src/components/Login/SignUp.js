import React  from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import './Login.css'

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data => {
        const url = `http://localhost:5000/signUpInfo`;
        fetch(url,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => {
            if(res){
                alert("Successfully added new product!");
            }
            history.replace(from)
        })
    };




    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("username", { required: true })} className="form-control" placeholder="Username" />
            {errors.username && <span className="text-danger">This field is required</span>}

            <input type='email' {...register("email", { required: true })} className="form-control mt-3" placeholder="Email" />
            {errors.email && <span className="text-danger">This field is required</span>}

            <input type='password' {...register("password", { required: true })} className="form-control mt-3" placeholder="password" />
            {errors.password && <span className="text-danger">This field is required</span>}

            <input type="submit" value="sign up" className="btn btn-success d-block mx-auto mt-4" />
        </form>
    );
};

export default SignUp;