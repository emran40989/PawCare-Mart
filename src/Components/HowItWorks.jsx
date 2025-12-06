import React from "react";
import i1 from "../assets/discover.png";
import i2 from "../assets/practice.jpg"
import i3 from "../assets/feedback.jpg"


const HowItWorks = () => {
  return (
    <>
      <div className="bg-blue-50 w-full">
        <div className="">
          <div className="py-8 bg-base-200 rounded-lg">
            <h2 className="text-3xl text-center font-bold my-4">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 container mx-auto">
              <div className="bg-base-200 shadow-sm flex flex-col items-center justify-center min-h-[300px] rounded-lg">
                <figure className="h-[120px] w-[120px] rounded-full overflow-hidden">
                  <img src={i1} alt="image" className="rounded-full" />
                </figure>
                <h2 className="pt-4 text-2xl font-bold">Discover Skills</h2>
                <h3 className="text-xl px-4 text-center text-blue-400 font-semibold">
                  Explore your desired skills in various categories through
                  internet
                </h3>
              </div>
              <div className="bg-base-200 shadow-sm flex flex-col items-center justify-center min-h-[300px] rounded-lg">
                <figure className="h-[120px] w-[120px] rounded-full overflow-hidden">
                  <img src={i2} alt="image" className="rounded-full" />
                </figure>
                <h2 className="pt-4 text-2xl font-bold">Practice</h2>
                <h3 className="text-xl px-4 text-center text-blue-400 font-semibold">
                  Practice more and more. 
                </h3>
              </div>
              <div className="bg-base-200 shadow-sm flex flex-col items-center justify-center min-h-[300px] rounded-lg">
                <figure className="h-[120px] w-[120px] rounded-full overflow-hidden">
                  <img src={i3} alt="image" className="rounded-full" />
                </figure>
                <h2 className="pt-4 text-2xl font-bold">Achieved</h2>
                <h3 className="text-xl px-4 text-center text-blue-400 font-semibold">
                  Get your targeted skill and take feedback from others. 
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
