"use client";

import { use, useEffect, useState } from "react";

export default function DevicePreview(props) {
  return (
    <main className="flex flex-col justify-end absolute top-10%">
      {/* xs */}
      <div className=" text-right ">
        <p className="xs:bg-brand-color w-min text-white px-5 py-2">XS</p>
      </div>
      {/* sm */}
      <div className=" text-right ">
        <p className="sm:bg-red-500 w-min text-white px-5 py-2">Small</p>
      </div>
      {/* md */}
      <div className=" text-right ">
        <p className="md:bg-green-600 w-min px-5 py-2 text-white">Medium</p>
      </div>
      {/* lg */}
      <div className=" text-right ">
        <p className="lg:bg-purple-600 w-min px-5 py-2 text-white">Large</p>
      </div>
      {/* xl */}
      <div className=" text-right ">
        <p className="xl:bg-amber-500 w-min px-5 py-2 text-white">XL</p>
      </div>
      {/* 2xl */}
      <div className=" text-right ">
        <p className="2xl:bg-cyan-600 w-min px-5 py-2 text-white">2XL</p>
      </div>
      {props.children}
    </main>
  );
}
