import React from "react";
import "./Test1.css";
const Test1 = () => {

  return (
    <div className="m-5">
    {/* HEADER */}
    <div className="flex justify-between items-center">
      {/* <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}

      <div>
        <button
          className="bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded"
        >
          Download Reports
        </button>
      </div>
    </div>

    {/* GRID & CHARTS */}
    <div className="grid grid-cols-12 grid-rows-auto gap-5 mt-5">
      {/* ROW 1 */}
      <div className="col-span-3 bg-primary-400 flex items-center justify-center">
        <div className="text-white font-semibold text-lg">
          12,361
        </div>
        <div className="text-white text-sm">
          Emails Sent
        </div>
      </div>
      <div className="col-span-3 bg-primary-400 flex items-center justify-center">
        <div className="text-white font-semibold text-lg">
          431,225
        </div>
        <div className="text-white text-sm">
          Sales Obtained
        </div>
      </div>
      <div className="col-span-3 bg-primary-400 flex items-center justify-center">
        <div className="text-white font-semibold text-lg">
          32,441
        </div>
        <div className="text-white text-sm">
          New Clients
        </div>
      </div>
      <div className="col-span-3 bg-primary-400 flex items-center justify-center">
        <div className="text-white font-semibold text-lg">
          1,325,134
        </div>
        <div className="text-white text-sm">
          Traffic Received
        </div>
      </div>

      {/* ROW 2 */}
      <div className="col-span-8 row-span-2 bg-primary-400">
        <div className="mt-6 px-5 flex justify-between items-center">
          <div>
            <h5 className="text-white font-semibold">Revenue Generated</h5>
            <h3 className="text-green-500 font-bold">$59,342.32</h3>
          </div>
          <div>
            <button className="text-green-500 hover:text-green-600">
              Download
            </button>
          </div>
        </div>
        <div className="h-80 -mt-20">
          {/* Replace with static content or remove dynamic components */}
        </div>
      </div>
      <div className="col-span-4 row-span-2 bg-primary-400 overflow-auto">
        <div className="flex justify-between items-center border-b-4 border-primary-500 p-3">
          <h5 className="text-white font-semibold">Recent Transactions</h5>
        </div>
        {/* Replace with static content */}
      </div>

      {/* ROW 3 */}
      <div className="col-span-4 row-span-2 bg-primary-400 p-5">
        <h5 className="font-semibold">Campaign</h5>
        <div className="flex flex-col items-center mt-5">
          {/* Replace with static content */}
        </div>
      </div>
      <div className="col-span-4 row-span-2 bg-primary-400">
        <h5 className="font-semibold p-5">Sales Quantity</h5>
        <div className="h-80 -mt-20">
          {/* Replace with static content or remove dynamic components */}
        </div>
      </div>
      <div className="col-span-4 row-span-2 bg-primary-400 p-5">
        <h5 className="font-semibold mb-5">Geography Based Traffic</h5>
        <div className="h-56">
          {/* Replace with static content or remove dynamic components */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Test1;
