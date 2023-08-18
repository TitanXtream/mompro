import React from "react";

type Props = {
  width?: React.CSSProperties["width"] | undefined;
  marginTop?: React.CSSProperties["marginTop"] | undefined;
};
const BlankText = ({ width = "100%", marginTop = "0.5em" }: Props) => {
  return (
    <div
      className="h-[1.2em] bg-gray-400 rounded-sm"
      style={{ width, marginTop }}
    />
  );
};

export default BlankText;
