import { MdEmail } from "react-icons/md";

export const metadata = {
  title: "Contact me | Hammad",
  description:
    "Get in touch with me Hammad Bin Tayyab. Reach out to me for collaborations, projects, or just to say hello.",
};

export default function ContactPage() {
  const a = ["collaborations", "projects", "Saying hello!"];
  let handleEmail = () => {
    const emailUrl =
      "mailto:dev.abeliever@gmail.com?subject=Hello&body=Hi there!";

    // Redirect to the email client
    window.location.href = emailUrl;
  };
  return (
    <div className="max-w-screen-xl  mx-auto">
      <h1 className="text-center text-5xl md:text-7xl mt-14 mb-5 text-[#025a4e] font-black">
        Contact me
      </h1>
      <div className="flex flex-col gap-5 justify-center  mt-14 mx-11 sm:w-fit sm:mx-auto [428]:">
        <a
          href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=hammadtayyab92@gmail.com&amp;cc=dev.abeliever@gmail.com&amp;su=&amp;body=Greetings%20Hammad%2C"
          target="_blank"
          className="flex justify-start items-center bg-blue-50 border border-brand-color hover:bg-brand-color hover:text-white group gap-5 px-8 py-3 rounded-full shadow transition-all duration-300 ease-in-out cursor-pointer"
        >
          <MdEmail
            size={53}
            className="group-hover:scale-110 group-hover:text-white text-secondary-color  transition-all duration-300 ease-in-out "
          />
          <div>
            <p>Email me</p>
            <p>dev.abeliever@gmail.com</p>
          </div>
        </a>
      </div>

      <div className="mt-14 md:mt-20">
        <h2 className="text-center text-xl">Reach out to me for</h2>
        <div className="flex flex-wrap p-10 gap-9 items-center justify-center">
          {a.map((item) => {
            return (
              <p
                style={{
                  backgroundImage:
                    "radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6%",
                }}
                key={item}
                className="font-bold shadow p-5 md:px-14 text-[#025a4e] rounded-full capitalize"
              >
                {item}
                <br />
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
