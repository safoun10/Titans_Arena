import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './Category.css';
import "react-tabs/style/react-tabs.css";
import AllGames from "../AllGames/AllGames";
const Category = () => {
  const [category, setCategory] = useState("All Games");
  const [isTabListVisible, setIsTabListVisible] = useState(false);

  const toggleTabList = () => {
    setIsTabListVisible(!isTabListVisible);
  };
  console.log(category);

  return (
    <>
      <div>
        <Tabs>
          <div className="lg:hidden">
            <button
              onClick={toggleTabList}
              className="bg-green-500 text-white w-full flex justify-center  p-2 rounded"
            >
              Menu
            </button>
          </div>
          <div className={isTabListVisible ? "" : "hidden lg:block"}>
            <TabList className="lg:flex mx-10  flex-wrap justify-center mt-16 gap-5 md:gap-8">
              <Tab
                className={`border p-3  transition-all transform duration-700   rounded text-white ${
                  category === "All Games"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("All Games")}
              >
                All Games
              </Tab>
              <Tab
                className={`border p-3 my-5 lg:my-0 transition-all transform duration-700   rounded text-white ${
                  category === "Call Of Duty"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("Call Of Duty")}
              >
                Call Of Duty
              </Tab>
              <Tab
                className={`border p-3  transition-all transform duration-700   rounded text-white ${
                  category === "PUBG"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("PUBG")}
              >
                PUBG
              </Tab>
              <Tab
                className={`border p-3 my-5 lg:my-0 transition-all transform duration-700   rounded text-white ${
                  category === "BattleField"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("BattleField")}
              >
                BattleField
              </Tab>
              <Tab
                className={`border p-3 text-white transition-all transform duration-700   rounded  ${
                  category === "Car Racing"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("Car Racing")}
              >
                Car Racing
              </Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 mt-6">
              <div className="border border-green-500 rounded-lg p-5 w-full lg:w-full md:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div className="border border-green-500 rounded-lg p-5  w-full lg:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div className="border border-green-500 rounded-lg p-5  w-full lg:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </div>
        <AllGames/>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 mt-6">
              <div className="border border-green-500 rounded-lg p-5  w-full lg:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div className="border border-green-500 rounded-lg p-5  w-full lg:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div className="border border-green-500 rounded-lg p-5  w-full lg:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 mt-6">
              <div className="border border-green-500 rounded-lg p-5  w-full lg:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div className="border border-green-500 rounded-lg p-5  w-full lg:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div className="border border-green-500 rounded-lg p-5  w-full lg:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 mt-6">
              <div className="border border-green-500 rounded-lg p-5  w-full lg:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div className="border border-green-500 rounded-lg p-5  w-full lg:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div className="border border-green-500 rounded-lg p-5  w-full lg:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 mt-6">
              <div className="border border-green-500 rounded-lg p-5  w-full lg:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className=""
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div className="border border-green-500 rounded-lg p-5  w-full lg:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div className="border border-green-500 rounded-lg p-5 w-full lg:w-full md:w-96 bg-transparent text-white shadow-xl">
                <figure>
                  <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Category;
