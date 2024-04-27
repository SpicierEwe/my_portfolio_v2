import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaVoicemail } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-screen-xl  mx-auto">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center bg-red">
          <MdEmail />
          <p>Email me</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaVoicemail />
          <p>Call Me</p>
        </div>
      </div>
    </div>
  );
}
