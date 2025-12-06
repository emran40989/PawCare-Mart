import React, { useEffect, useState } from "react";

const Pets = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("./skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-8 bg-base-200 rounded-lg">
      <h2 className="text-3xl text-center font-bold my-4">Pets & Supplies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 container mx-auto">
        {skills.map((skill) => (
          <div className="w-full gap-2">
            <div className="border border-gray-300 rounded-lg shadow-md bg-white relative overflow-hidden">
              <img
                src={skill.image}
                alt={skill.title}
                className="w-full h-56 object-cover rounded-2xl p-2"
              />
              <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
                {skill.category}
              </div>
              <div className="p-3">
                <div className="text-lg font-bold mb-2 text-black">
                  {skill.skillName}
                </div>
                <div className="flex justify-between mb-3">
                  <div className="text-sm text-black font-semibold">
                    Rating: <span className="text-yellow-600">{skill.rating}</span>
                  </div>
                  <div className="bg-gray-100 px-2 py-1 rounded text-sm font-semibold text-gray-800">
                    <span className="text-sm font-semibold">Price: </span> {skill.price} USD/hr
                  </div>
                </div>
                <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
