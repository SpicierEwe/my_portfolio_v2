export default function DevicePreview() {
  return (
    <main>
      {/* xs */}
      <div className="w-screen text-right flex justify-end">
        <p className="sm:bg-red-500 w-min text-white px-5 py-2">Tablet</p>
      </div>

      {/* md */}
      <div className="w-screen text-right flex justify-end">
        <p className="sm:bg-red-600 w-min">Tablet</p>
      </div>
    </main>
  );
}
