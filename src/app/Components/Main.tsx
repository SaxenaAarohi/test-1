//@ts-nocheck
"use client"

import { useEffect, useState } from "react";
import Images from "./Images";

export default function Main({ name, count, images }) {
    const [isloading,setislaoding] = useState(true);

   return (
    <div className="flex h-screen justify-center items-center">
      <div className="h-[120px] w-[40%] bg-black flex justify-between px-12 items-center p-4">
        <div className="flex gap-4 items-center">

          <div className="relative w-[78px] h-[78px]">
            {images.map((img, i) => {
              const pos = [
                "absolute left-0",
                "absolute left-8",
                "absolute top-8",
                "absolute top-8 left-8",
              ];

              return (
                <Images
                  key={i}
                  src={img.url}
                 setisloading={setislaoding}
                  haserror={img.error}
                  className={`${pos[i]} w-[38px] h-[38px] border border-white rounded-full`}
                />
              );
            })}
          </div>

          <div>
            <h1 className="text-white text-xl font-bold">
              {name} <span>{count}</span>
            </h1>
            <p className="text-white text-sm">Moradabad, Uttar Pradesh</p>
          </div>
        </div>


        <div>
          {!isloading && (
          images.some((img) => img.error === "true") && (
            <img
              className="w-[38px] h-[38px] "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Feedbin-Icon-error.svg/1200px-Feedbin-Icon-error.svg.png"
              alt="Error"
            />
          )
          )}
        </div>

      </div>
    </div>
  );
}
     