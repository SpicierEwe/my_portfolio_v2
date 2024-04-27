export default function DevicePreview() {
  return (
    <main>
      {/* xs */}
      <div className="w-screen text-right flex justify-end">
        <p className="sm:bg-red-500 w-min text-white px-5 py-2">mobile</p>
      </div>

      {/* xs */}
      <div className="w-screen text-right flex justify-end">
        <p className="sm:bg-red-500 w-min text-white px-5 py-2">mobile</p>
      </div>
      {/* md */}
      <div className="w-screen text-right flex justify-end">
        <p className="md:bg-green-600 w-min px-5 py-2 text-white">Laptop</p>
      </div>
    </main>
  );
}
