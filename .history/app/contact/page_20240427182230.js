import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaVoicemail } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-screen-xl  mx-auto">
      <div className="grid grid-cols-1 gap-5 mx-5">
        <div className="flex flex-col justify-center items-center bg-red-50 p-20">
          <MdEmail size={24} />
          <p>Email me</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-green-50 p-20">
          <FaVoicemail />
          <p>Call Me</p>
        </div>
      </div>
    </div>
  );
}
