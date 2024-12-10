import Lottie from "lottie-react";
import regiAnimation from '../../assets/lottie/register.json'
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.config";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log(email, pass, name);
        
        setError('');

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if(!regex.test(pass)){
          return setError('Enter a valid password with minimum 1 uppercase, 1 lowercase and 1 number.')
        }

        createUser(email, pass)
        .then(result => {
          console.log(result.user);
          const user = result.user;

          updateProfile(user, {
            displayName: name
          })
          .then(() => {
            console.log('profile updated!')
          })


        })
        .catch(error => {
          setError(error.message)
        })
        
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content gap-4 flex-col justify-around lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie className="h-32 lg:h-72" animationData={regiAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
            <h1 className="text-5xl font-bold m-4">Register Now!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
                
              <span className="text-sm font-semibold text-red-500">{error}</span>
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <span className="text-xs font-semibold">
                new have an account? 
                <Link to='/signin'>Log in</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;