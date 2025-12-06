import React from "react";
import i1 from '../assets/emran.png'
import i2 from '../assets/taslima.jpg'
import i3 from '../assets/khadiza.jpg'

const TopRatedProvider = () => {
  return (
    <>
      <div className="bg-blue-50 w-full">
        <div className="">
          <div className="py-8 bg-base-200 rounded-lg">
            <h2 className="text-3xl text-center font-bold my-4">
              Top Rated Providers
            </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 container mx-auto">
            <div className="bg-base-200 shadow-sm flex flex-col items-center justify-center min-h-[300px] rounded-lg">
              <figure className="h-[120px] w-[120px] rounded-full overflow-hidden">
                <img src={i2} alt="image" className="rounded-full" />
              </figure>
              <h2 className="pt-4 text-2xl font-bold">Taslima Akter</h2>
              <h3 className="text-xl text-blue-400 font-semibold">Spoken English Practice</h3>
              <div className="flex gap-2 items-center py-2">
                <p className="font-bold text-xl">Rating: </p>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <div className="bg-base-200 shadow-sm flex flex-col items-center justify-center min-h-[300px] rounded-lg">
              <figure className="h-[120px] w-[120px] rounded-full overflow-hidden">
                <img src={i1} alt="image" className="rounded-full" />
              </figure>
              <h2 className="pt-4 text-2xl font-bold">Emran Hossen</h2>
              <h3 className="text-xl text-blue-400 font-semibold">Basic Web Development Skill</h3>
              <div className="flex gap-2 items-center py-2">
                <p className="font-bold text-xl">Rating: </p>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
            <div className="bg-base-200 shadow-sm flex flex-col items-center justify-center min-h-[300px] rounded-lg">
              <figure className="h-[120px] w-[120px] rounded-full overflow-hidden">
                <img src={i3} alt="image" className="rounded-full" />
              </figure>
              <h2 className="pt-4 text-2xl font-bold">Khadiza Akter</h2>
              <h3 className="text-xl text-blue-400 font-semibold">Meditaion for Stress Relief</h3>
              <div className="flex gap-2 items-center py-2">
                <p className="font-bold text-xl">Rating: </p>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default TopRatedProvider;
