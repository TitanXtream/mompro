import React from "react";
import { sub1Image } from "../assets";
import BlankText from "./BlankText";

const Card = () => {
  return (
    <div className="bg-white flex flex-col w-[23em] shadow-[0_2.75px_45px_0px_rgba(214,77,95,0.19)] rounded-[1em] overflow-hidden">
      <div>
        <img src={sub1Image} />
      </div>
      <div className="w-full flex flex-col px-[1.5em] py-[1em]">
        <div className="flex w-full justify-between">
          <h1 className="font-semibold overflow-hidden text-ellipsis">
            3-MONTH SUBSCRIPTION
          </h1>
          <h3 className="shrink-0">$ 197</h3>
        </div>
        <div className="text-[0.5em]">
          <BlankText width={"50%"} />
          <BlankText width={"40%"} />
        </div>
        <button className="bg-brand mt-[0.5em] text-white font-semibold rounded-[0.2em]  w-max px-[1.2em] py-[0.15em] shadow-[0_2.75px_9px_0px_rgba(0,0,0,0.25),_0px_0.25px_3px_0px_rgba(0,0,0,0.04)] hover:bg-brand/90 hover:shadow-brand/50">
          <p className="text-[0.8em]">BUY NOW</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
