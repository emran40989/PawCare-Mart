import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router";
import { auth } from "../Firebase/firebase.config";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

  const {setUser, handleGoogleSignIn} = useContext(AuthContext)

  const handleSubmit = (e)=>{
    e.preventDefault();
    const email = e.target.email.value; 
    const pass = e.target.password.value;

    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) =>{
      const user = userCredential.user;
      setUser(user);

    })
    .catch((error) => {
      console.log(error);      
    });
  }

  const googleSignin = () => {
    handleGoogleSignIn()
    .then((result) => {
      const user = result.user;
      setUser(user);
    })
    .catch((error) => {
      console.log(error);      
    });
  }
  

  return (
    <div>
      <div className="bg-base-100 flex justify-center items-center min-h-[calc(100vh-280px)]">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl container mx-auto">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label text-sm font-semibold">Email : </label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="your email adress"
                  required
                />
                <label className="label  text-sm font-semibold">
                  Password :
                </label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Write your password"
                  required
                />
                <div>
                  <Link to="/forgot-password" className="link link-hover">
                    Forgot password?
                  </Link>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                {/* Google */}
                  <button type="button" onClick={googleSignin} className="btn bg-blue-700 text-white border-[#e5e5e5]">
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
                  </button>
                <div>
                  Create an Account?{" "}
                  <Link to="/signup" className="link link-hover">
                    Sign Up
                  </Link>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
