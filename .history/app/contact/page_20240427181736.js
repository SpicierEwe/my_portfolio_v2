import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaVoicemail } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid gid-cols-1">
        <div className="">
          <MdEmail />
          <p>Email me</p>
        </div>
        <div className="">
          <p>Call Me</p>
        </div>
      </div>
    </div>
  );
}
