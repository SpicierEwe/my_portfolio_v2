"use client";

import { use, useEffect, useState } from "react";

export default function DevicePreview() {
  return (
    <main className="flex ">
      {/* xs */}
      <div className="hidden w-screen text-right justify-end">
        <p className="hidden xs:bg-brand-color w-min text-white px-5 py-2">
          XS
        </p>
      </div>
      {/* sm */}
      <div className="hidden w-screen text-right justify-end">
        <p className="hidden sm:bg-red-500 w-min text-white px-5 py-2">Small</p>
      </div>
      {/* md */}
      <div className="hidden w-screen text-right justify-end">
        <p className="hidden md:bg-green-600 w-min px-5 py-2 text-white">
          Medium
        </p>
      </div>
      {/* lg */}
      <div className="hidden w-screen text-right  justify-end">
        <p className="hidden lg:bg-brown-600 w-min px-5 py-2 text-white">
          Large
        </p>
      </div>
      {/* xl */}
      <div className="hidden w-screen text-right  justify-end">
        <p className="hidden xl:bg-amber-500-600 w-min px-5 py-2 text-white">
          XL
        </p>
      </div>
      {/* 2xl */}
      <div className="hidden w-screen text-right  justify-end">
        <p className="hidden 2xl:bg-cyan-600 w-min px-5 py-2 text-white">2XL</p>
      </div>
    </main>
  );
}
