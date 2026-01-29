import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const { myId } = useParams();
  const [loading, setLoading] = useState(true);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/services/${myId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [myId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center px-[145px]">
      <img src={service?.imageUrl} alt={service?.name} />
      <button
        className="btn btn-primary mt-6"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Order Now
      </button>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-middle">
        <div className="modal-box w-full max-w-md">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="text-xl font-bold mb-4">Order Details</h3>

          <form className="w-full gap-4">
            <div>
              <label className="label">Product Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                defaultValue={service?.name}
                readOnly
              />
            </div>

            <div>
              <label className="label">Buyer Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                defaultValue={user?.displayName}
                placeholder="buyer name"
              />
            </div>

            <div>
              <label className="label">Buyer Email</label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Quantity</label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Enter quantity"
              />
            </div>

            <div>
              <label className="label">Price</label>
              <input
                type="number"
                className="input input-bordered w-full"
                value={service?.price}
                readOnly
              />
            </div>

            <div>
              <label className="label">Address</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter address"
              />
            </div>

            <div>
              <label className="label">Phone</label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <button className="btn btn-success w-full mt-4">
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetails;
