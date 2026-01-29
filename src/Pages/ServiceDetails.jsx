import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const { myId } = useParams();
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/services/${myId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [myId]);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const quantity = parseInt(form.quantity.value);
    const price = parseInt(form.price.value);
    const address = form.address.value;
    const phone = form.phone.value;
    const note = form.note.value;

    const formData = {
      productId: myId,
      productName: service.name,
      buyerName,
      buyerEmail,
      quantity,
      price,
      address,
      phone,
      note,
      date: new Date(),
    };

    axios.post("http://localhost:3000/orders", formData)
      .then((res) => {
        console.log(res.data);
        alert("Order placed successfully!");
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center px-[145px] py-10">
      <img src={service?.imageUrl} alt={service?.name} />
      <h2 className="text-3xl font-bold mt-4">{service?.name}</h2>
      <p className="text-xl font-semibold mt-2">Price: {service?.price} BDT</p>
      <p className="text-md mt-2">{service?.description}</p>
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

          <form onSubmit={handleOrder} className="w-full gap-4">
            <div>
              <label className="label">Product Name</label>
              <input
                type="text"
                name="productName"
                className="input input-bordered w-full"
                defaultValue={service?.name}
                readOnly
              />
            </div>

            <div>
              <label className="label">Buyer Name</label>
              <input
                type="text"
                name="buyerName"
                className="input input-bordered w-full"
                defaultValue={user?.displayName}
              />
            </div>

            <div>
              <label className="label">Buyer Email</label>
              <input
                type="email"
                name="buyerEmail"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Quantity</label>
              <input
                type="number"
                name="quantity"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Price</label>
              <input
                type="number"
                name="price"
                className="input input-bordered w-full"
                value={service?.price}
                readOnly
              />
            </div>

            <div>
              <label className="label">Address</label>
              <input
                type="text"
                name="address"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Phone</label>
              <input
                type="number"
                name="phone"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Additional Note</label>
              <input
                type="text"
                name="note"
                className="input input-bordered w-full"
              />
            </div>

            <button className="btn btn-success w-full mt-4">
              Confirm Order
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetails;
