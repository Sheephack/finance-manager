import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../config/firebase';

type FormValues = {
    email: string;
    password: string;
    name: string;
};

const CreateUser = () => {
   const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                data.email, 
                data.password
            );

            await updateProfile(userCredential.user, {displayName: data.name});
            console.log("user created", userCredential.user);
            alert("User created successfully");
        } catch (error) {
            console.error(error);
        }
    };
    
    return(
        <div className='p-4'>
            <h1 className='text-2xl font-bold mb-4'>Create User</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                <div>
                    <label htmlFor="">Name</label>
                    <input
                        type='text'
                        placeholder='Name'
                        {...register('name', { required: true })}
                        className='p-2 border rounded'
                    />
                    {errors.name && <p className='text-red-500'>Name is required</p>}
                </div>
                <div>
                    <label htmlFor="">Email</label>
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
                </div>
                <div>
                    <label htmlFor="">password</label>
                    <input
                        type='password'
                        placeholder='Password'
                        {...register('password', { 
                            required: "Password required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            }
                            })}
                        className='p-2 border rounded'
                    />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <button
                    type='submit'
                    className='bg-blue-500 text-white p-2 rounded'
                >
                    Create User
                </button>
            </form>
        </div>
    )
}

    

export default CreateUser;