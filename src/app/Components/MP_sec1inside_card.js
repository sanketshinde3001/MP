import React from "react";

const Sec1_Card = (props) => {
  return (
    <div>
      <strong className="text-2xl font-semibold max-lg:text-2xl max-md:text-xl ">
        {props.title}
      </strong>
      <br />
      <br />
      <p className="mt-4 mb-12 text-lg  max-lg:text-base ">{props.desc}</p>
    </div>
    
  );
};

export default Sec1_Card;
