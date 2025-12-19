import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const Signup = () => {
  const { registerwithEmailPassword, setUser, handleGoogleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
  
    const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;


  if (!strongPasswordRegex.test(password)) {
    alert(
      "Password must be in 6 digit and contain one uppercase, lowercase and number."
    );
    return;
  }    

    registerwithEmailPassword(email, password)
    .then((userCredential) => {
        updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      })
        .then(() => {
          setUser(userCredential.user)
          navigate(location.state || '/');
        })
        .catch((error) => {
          console.log(error)
        });
    });
    

  };

    const googleSignup = () => {
    handleGoogleSignIn()
    .then((result=>{
      const user = result.user;
      setUser(user);
      navigate(location.state || '/');
    }))
    .catch((error) => {
      console.log(error);      
    });
  }
  

  return (
    <div>
      <div>
        <div className="bg-base-100 flex justify-center items-center min-h-[calc(100vh-280px)]">
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl container mx-auto">
            <div className="card-body">
              <form onSubmit={handlesubmit}>
                <fieldset className="fieldset">
                  <label className="label text-sm font-semibold">
                    Email :{" "}
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="your email adress"
                    required
                  />
                  <label className="label text-sm font-semibold">Name : </label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Your Full Name"
                  />
                  <label className="label  text-sm font-semibold">
                    PhotoUrl :
                  </label>
                  <input
                    name="photoUrl"
                    type="text"
                    className="input"
                    placeholder="Place your photo url"
                  />
                  <label className="label  text-sm font-semibold">
                    Password :
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Create a Strong Password" 
                    required
                  />
                  <button className="btn btn-neutral mt-4">Sign Up</button>
                  {/* Google */}
                  <button onClick={googleSignup} className="btn bg-blue-700 text-white border-[#e5e5e5]">
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

                  <div className="text-sm font-semibold">
                    Already have an Account?{" "}
                    <Link to="/login" className="link link-hover text-blue-700">
                      Login
                    </Link>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
