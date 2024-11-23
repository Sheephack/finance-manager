import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import React from 'react';
import { useNavigate } from 'react-router-dom';


type LoginForm = {
    email: string;
    password: string;
};

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleRegisterRedirect = () => {
        navigate('/register');
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>();
    
    const onSubmit = async (data: LoginForm) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            console.log("Login successful");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='p-4'>
            <h1 className='text-2xl font-bold mb-4'>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                <input
                    type='email'
                    placeholder='Email'
                    {...register('email', { 
                        required: "Email required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address",
                        }
                    })}
                    className='p-2 border rounded'
                />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                <input
                    type='password'
                    placeholder='Password'
                    {...register('password', { required: true })}
                    className='p-2 border rounded'
                />
                {errors.password && <p className='text-red-500'>Password is required</p>}
                <button 
                    type='submit' 
                    
                >
                    Login
                </button>
            </form>
            <div>
                <p>Don't have an account?</p>
                <button onClick={handleRegisterRedirect}>Register</button>
            </div>
        </div>
    );

}

export default Login;