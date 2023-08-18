import React from "react";

type CheckBoxProps = {
  label: string;
};

const CheckBox = ({ label }: CheckBoxProps) => {
  return (
    <div className="flex w-full gap-[1em] items-center">
      <input
        type="checkbox"
        placeholder="TYPE HERE"
        className="h-[1em] aspect-square shrink-0 text-brand outline-none focus:ring-0 border-[2px] border-brand"
      />
      <label htmlFor="" className="w-full text-[1em]">
        {label}:
      </label>
    </div>
  );
};

export default CheckBox;
