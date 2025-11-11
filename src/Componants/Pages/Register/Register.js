import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import UseTitle from '../../../Hooks/UseTitle';


const Register = () => {
    UseTitle("Register")
    const { createUser } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const role = form.role.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, role);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast('User Created Successfully')
                saveUser(name,email,role);
                console.log(user);
                form.reset()
            })
            .catch(error => console.error(error));
    }

    const saveUser =(name, email ,role)=>{
        const usersSaved  ={name ,email,role};
        console.log(usersSaved);
        fetch("https://trade-buy-sell.vercel.app/usersList", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(usersSaved),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            
            })
            .catch((err) => console.log(err));
    
    }
    return (
        <div className='mt-10 mb-10'>
            <div className=" mx-auto w-full max-w-md p-8 space-y-3 rounded-xl bg-base-300 text-black">
                <h1 className="text-2xl font-bold text-center text-black ">Sign Up</h1>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">


                    <select type="role" name="role" id="role" defaultValue="User" className="select block w-full text-center text-black">
                        <option disabled selected>Choose User</option>
                        <option>user</option>
                        <option>seller</option>
                    </select>



                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-white">Name</label>
                        <input type="text" name="name" id="username" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-white focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-white">Email</label>
                        <input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-white focus:dark:border-violet-400" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 text-white focus:dark:border-violet-400" />
                        <div className="flex justify-end text-xs text-black">
                            <Link rel="noopener noreferrer" href="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm btn btn-primary text-black">Sign Up</button>
                </form>


                <p className="text-xs text-center sm:px-6 text-black">Already have an account?
                    <Link to="/login" rel="noopener noreferrer" className="  text-black underline ">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;