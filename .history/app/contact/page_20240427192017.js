import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaVoicemail } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-screen-xl  mx-auto">
      <h1 className="text-center text-5xl md:text-7xl mt-14 mb-5 text-[#025a4e] font-black">
        Contact me
      </h1>
      <div className="flex flex-col gap-5  mt-14 mx-11    md:mx-auto">
        <div className=" flex justify-start md:justify-center items-center bg-blue-50 border border-brand-color hover:bg-brand-color hover:text-white group gap-5 px-8 py-3 rounded-full shadow transition-all duration-300 ease-in-out cursor-pointer">
          <MdEmail
            size={53}
            className="group-hover:scale-110 text-secondary-color  transition-all duration-300 ease-in-out "
          />
          <div>
            <p>Email me</p>
            <p>dev.abeliever@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
