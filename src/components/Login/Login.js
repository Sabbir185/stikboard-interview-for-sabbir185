import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './Login.css'


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                            <input type='text' {...register("username", { required: true })} className="form-control" placeholder="Username" />
                            {errors.username && <span className="text-danger">This field is required</span>}

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type='text' {...register("username", { required: true })} className="form-control" placeholder="Username" />
                            {errors.username && <span className="text-danger">This field is required</span>}

                            <input type='email' {...register("email", { required: true })} className="form-control mt-3" placeholder="Email" />
                            {errors.email && <span className="text-danger">This field is required</span>}

                            <input type='password' {...register("password", { required: true })} className="form-control mt-3" placeholder="password" />
                            {errors.password && <span className="text-danger">This field is required</span>}

                            <input type="submit" value="sign up" className="btn btn-success d-block mx-auto mt-4" />
                        </form>
                    </div>
            }

        </section>
    );
};

export default Login;