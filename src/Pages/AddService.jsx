import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddService = () => {
    const {user} = useContext(AuthContext);

    const handlesubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const location = form.location.value;
        const description = form.description.value;
        const imageUrl = form.imageUrl.value;
        const pickUpDate = form.pickUpDate.value;
        const email = form.email.value;
       

        const formData = {
            name,
            category,
            price,
            location,
            description,
            imageUrl,
            pickUpDate,
            email
        }
        console.log(formData);
        
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Add Product / Pet
        </h2>

        <form onSubmit={handlesubmit} className="space-y-4">
          {/* Product / Pet Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product / Pet Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Category
            </label>
            <select name="category" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Pets</option>
              <option>Food</option>
              <option>Accessories</option>
              <option>Care Products</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Price
            </label>
            <input
              name="price"
              type="number"
              placeholder="0"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Location
            </label>
            <input
              name="location"
              type="text"
              placeholder="Enter location"
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
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email (Readonly) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
