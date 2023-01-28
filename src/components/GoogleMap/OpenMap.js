import dynamic from "next/dynamic";
import React from "react";

const Maps = dynamic(() => import("./Maps"), { ssr: false });
const SearchBox = dynamic(() => import("./SearchBox"), { ssr: false });

const OpenMap = ({ selectPosition, setSelectPosition }) => {

      return (
            <div
                  className="w-full h-full z-10"

            >
                  <div style={{ width: "100%", height: "100%" }}>
                        <Maps selectPosition={selectPosition} />
                  </div>
                  <div style={{ width: "100%" }}>
                        <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
                  </div>
            </div>
      );
};

export default OpenMap;