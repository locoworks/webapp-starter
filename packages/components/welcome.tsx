import React from "react";
import { Link } from "react-router-dom";

const Welcome: React.FC<{}> = () => {
  return (
    <>
      <div className="wrapper w-screen h-screen bg-red-300">
        <Link to="test">
          <h1 className="text-blue-500 text-3xl underline text-center">
            Welcome To My App
          </h1>
        </Link>

        <p className="text-center font-bold">
          This is going to be the coolest app in the world!**
        </p>
      </div>
      {/* <div className="w-screen h-screen bg-red-300"></div> */}
    </>
  );
};

export default Welcome;
