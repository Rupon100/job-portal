import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import loginAnimation from '../../assets/lottie/login.json';
import Lottie from "lottie-react";

 

const Signin = () => {

    const { signinUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        signinUser(email, pass)
        .then(user => {
            console.log(user.user)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content gap-4 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie className="max-w-72 lg:max-w-full" animationData={loginAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold m-4">Login Now!</h1>
            <form onSubmit={handleLogin} className="card-body">
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
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <span className="text-xs font-semibold">
                new in this web app? 
                <Link to='/register'>Register</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Signin;