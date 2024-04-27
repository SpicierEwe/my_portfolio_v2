export default function DevicePreview() {
  return (
    <main>
      {/* xs */}
      <div className="w-screen text-right flex justify-end">
        <p className="xs:bg-red-600 w-min">Tablet</p>
      </div>

      {/* md */}
      <div className="w-screen text-right flex justify-end">
        <p className="sm:bg-red-600 w-min">Tablet</p>
      </div>
    </main>
  );
}
