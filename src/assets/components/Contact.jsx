import { Link, Outlet } from "react-router-dom";
import WhatsAppIco from "/images/c_whatsapp.svg";
import CallIco from "/images/c_call.svg";
import TextIco from "/images/c_text.svg";

export const Contact = () => {
  return (
    <>
      <div
        className=" min-h-screen font-DM1 place-items-center grid w-full bg-cover bg-center pt-10 pb-10 md:pt-0 md:pb-0"
        style={{
          backgroundColor: "#F3BA9E",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md md:max-w-xl font-DM1">
            <h1 className="mb-5 tracking-wide text-4xl md:text-5xl font-bold text-five">
              Have a Question?
              <br /> Contact Us
            </h1>
            <p className="mb-5 tracking-wide text-five">
              Reach us via phone, WhatsApp, or text message — whatever works
              best for you, we’re here to help!
            </p>
            <div className="flex justify-center items-center gap-2">
              <Link to="https://wa.me/+919411115528" target="_blank">
                <img src={WhatsAppIco} alt="whatsapp" className="h-16" />
              </Link>
              <Link to="tel:+919536016467" target="_blank">
                <img src={CallIco} alt="whatsapp" className="h-16" />
              </Link>
              <Link to="sms:+919536016467" target="_blank">
                <img src={TextIco} alt="whatsapp" className="h-16" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
