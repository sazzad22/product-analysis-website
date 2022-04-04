import React from "react";

const Home = () => {
  return (
      <div>
          {/* Product */}
      <div className="grid grid-cols-2  ">
        <div className=" mt-5">
          <h1 className="text-blue-500 text-5xl">Be Smart </h1>
          <h1 className="text-5xl">
            With <span className="text-blue-500">Bolos</span>
            <br />
            Smart<span className="text-blue-600">Watch</span>
          </h1>
          <div className="mt-6 text-justify px-20">
            <small>
              <p>
                Upgrade your life with BOLOS SmartWatch. You want to get
                notified for important Emails through your watch we got your
                back! With the new BOLOS ToT5 smartwatch you can read your
                emails via your watch and notified.{" "}
              </p>
              <p>
                BOLOS ToT5 has heart rate monitor to monitor your heart rate and
                keep records of your workout routine
              </p>
              <p>
                The motion sensors installed will accurately guide you through
                your running exercises. BOLOS smartwatches are water proof upto
                10 meters deep water.{" "}
              </p>
            </small>
            <button className="mt-5 rounded shadow-lg font-semibold  bg-blue-400 px-6 py-2 text-white flex justify-start">
              Read More
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="scale-125 mt-20 "
            src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
            alt=""
          />
        </div>
          </div>
        {/* Customer Review */}
          <div>
              
        </div>
    </div>
  );
};

export default Home;
