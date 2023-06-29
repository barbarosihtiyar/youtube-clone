import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => (
  <div className="loader">
    <Oval
      height={80}
      width={80}
      color="#fff"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#fff"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);

export default Loader;
