import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useParams } from "react-router";
import axios from "axios";

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const {id} = useParams();
  const [service, setService] = useState();
  const [category, setCategory] = useState(service?.category);

  useEffect(() => {
    axios.get(`http://localhost:3000/services/${id}`)
    .then(res => {
      setService(res.data);
      setCategory(res.data.category);
    })
  }, [id]);

  console.log(service);
  

  const handleUpdate = () => {};
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Update Listing
          </h2>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Product / Pet Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter name"
                defaultValue={service?.name}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                defaultValue={service?.category}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Pets</option>
                <option>Food</option>
                <option>Accessories</option>
                <option>Care Products</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                name="price"
                
                type="number"
                placeholder="0"
                defaultValue={service?.price}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                name="location"
                type="text"
                placeholder="Enter location"
                defaultValue={service?.location}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows="4"
                placeholder="Write description..."
                defaultValue={service?.description}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Image URL
              </label>
              <input
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                defaultValue={service?.imageUrl}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Pick Up Date */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Pick Up Date
              </label>
              <input
                name="pickUpDate"
                defaultValue={service?.pickUpDate}
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email (Readonly) */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={user?.email}
                readOnly
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Update Service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
