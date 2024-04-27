"use client";

export default function DevicePreview() {
  return (
    <main className="w-screen flex justify-end">
      {/* xs */}
      <div className="hidden xs:block w-screen text-right flex justify-end">
        <p className="bg-brand-color w-min text-white px-5 py-2">XS</p>
      </div>
      {/* sm */}
      <div className="hidden sm:block w-screen text-right flex justify-end">
        <p className="bg-red-500 w-min text-white px-5 py-2">Small</p>
      </div>
      {/* md */}
      <div className="hidden md:block w-screen text-right flex justify-end">
        <p className="bg-green-600 w-min px-5 py-2 text-white">Medium</p>
      </div>
      {/* lg */}
      <div className="hidden lg:block w-screen text-right flex justify-end">
        <p className="bg-brown-600 w-min px-5 py-2 text-white">Large</p>
      </div>
      {/* xl */}
      <div className="hidden xl:block w-screen text-right flex justify-end">
        <p className="bg-amber-600 w-min px-5 py-2 text-white">XL</p>
      </div>
      {/* 2xl */}
      <div className="hidden 2xl:block w-screen text-right flex justify-end">
        <p className="bg-cyan-600 w-min px-5 py-2 text-white">2XL</p>
      </div>
    </main>
  );
}
