import { useEffect } from "react";

export default function DevicePreview() {
  const width = window.innerWidth;

  useEffect(() => {}, []);
  return (
    <main>
      {/* sm */}
      <div className="w-screen text-right flex justify-end">
        <p className="sm:bg-red-500 w-min text-white px-5 py-2">Small</p>
      </div>
      {/* md */}
      <div className="w-screen text-right flex justify-end">
        <p className="md:bg-green-600 w-min px-5 py-2 text-white">Medium</p>
      </div>
      {/* lg */}
      <div className="w-screen text-right flex justify-end">
        <p className="lg:bg-brown-600 w-min px-5 py-2 text-white">Large</p>
      </div>
      {/* xl */}
      <div className="w-screen text-right flex justify-end">
        <p className="xl:bg-amber-500-600 w-min px-5 py-2 text-white">XL</p>
      </div>

      {/* 2xl */}
      <div className="w-screen text-right flex justify-end">
        <p className="2xl:bg-cyan-600 w-min px-5 py-2 text-white">2XL</p>
      </div>
    </main>
  );
}
