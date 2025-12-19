import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const Profile = () => {
  const {setUser, user } = useContext(AuthContext);
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    console.log("before click", isOpen);

    setIsOpen(!isOpen);
    console.log("after click", isOpen);
  };

  const handleUpdate = (e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    
    updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photoUrl });
          console.log("Profile updated successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="avatar">
        <div className="mask mask-squircle w-24">
          <img
            src={
              user?.photoURL ||
              "https://img.daisyui.com/images/profile/demo/distracted1@192.webp"
            }
          />
        </div>
      </div>
      <p className="font-bold">{user?.displayName}</p>
      <p className="text-blue-800 underline">{user?.email}</p>
      <button onClick={handleOpenForm} className="btn btn-primary">
        Update Profile
      </button>
      {isOpen && (
        <form onSubmit={handleUpdate}>
          <fieldset className="fieldset">
            <label className="label text-sm font-semibold">Name : </label>
            <input
              defaultValue={user?.displayName}
              name="name"
              type="text"
              className="input"
              placeholder="your name"
            />
            <label className="label  text-sm font-semibold">PhotoURL :</label>
            <input
              defaultValue={user?.photoURL}
              name="photoUrl"
              type="text"
              className="input"
              placeholder="your photo URL"
            />
            <button className="btn btn-neutral mt-4">Update</button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default Profile;
