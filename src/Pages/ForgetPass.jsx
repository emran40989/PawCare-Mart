import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useParams } from "react-router";
import { auth } from "../Firebase/firebase.config";

const ForgetPass = () => {
  const { email } = useParams();

  const handlesubmit = (e) => {
    e.preventDefault();
    const formEmail = e.target.email.value;
    console.log(formEmail);
    sendPasswordResetEmail(auth, formEmail)
      .then(() => {
        window.open('https://mail.google.com','_blank');
      })
      .catch((error) => {
        console.log(error);
        
      });
  };

  return (
    <div>
      <div className="bg-base-100 flex justify-center items-center min-h-[calc(100vh-280px)]">
        <div className="card bg-base-100 py-8 w-full max-w-sm p-4 shadow-2xl container mx-auto">
          <form onSubmit={handlesubmit}>
            <fieldset className="fieldset">
              <label className="label text-sm font-semibold">Email : </label>
              <input
                defaultValue={email}
                name="email"
                type="email"
                className="input w-full"
                placeholder="your email adress"
                required
              />
              <button className="btn btn-neutral mt-4">Reset Password</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
