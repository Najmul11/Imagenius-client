import payment from "../../../assets/payment.png";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { GiPhone } from "react-icons/gi";
import Infos from "./Infos";
import { companyInfo, learnMore, needhelp } from "./Footer.contstans";
import { Link } from "react-router-dom";

const phone = import.meta.env.VITE_PHONE_NUMBER;

const Footer = () => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}`;
  const mailtoUrl = `mailto:$najmulbinnurul@gmail.com`;
  return (
    <div className=" bg-black py-10 px-5 text-white ">
      <div className="flex   ">
        <div className="w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <BiSolidMessageSquareDetail className="text-xl" />
              <a
                href={mailtoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:shadow-lg font-semi"
              >
                info@imagenius.com
              </a>
            </div>
            <div className="flex gap-5 items-center">
              <GiPhone className="text-xl" />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:shadow-lg font-semi"
              >
                +88018865XXXXXX
              </a>
            </div>
            <div className="flex gap-5 items-center">
              <BsWhatsapp className="text-xl" />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:shadow-lg font-semi"
              >
                +88018865XXXXXX
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semi">Follow Us</p>
            <div className="flex items-center gap-5">
              <AiOutlineTwitter className="text-3xl  cursor-pointer" />
              <AiFillFacebook className="text-3xl  cursor-pointer" />
              <AiFillYoutube className="text-3xl  cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-1/2 grid grid-cols-3 ">
          <Infos title={"Company Info"} tags={companyInfo} />
          <Infos title={"Learn More"} tags={learnMore} />
          <Infos title={"Need Help?"} tags={needhelp} />
        </div>
      </div>
      <p className="text-center mt-5 font-semi">
        © https://imagenius.com. A division of Mash Audio Visuals Pvt. Ltd. All
        rights reserved.
      </p>
      <div className="flex justify-between items-center w-2/5 mx-auto mt-5 ">
        <div className="flex gap-3  text-sm text-gray-400 ">
          <Link
            to={"/terms-of-use"}
            className="hover:text-white  hover:shadow-lg"
          >
            Terms of use
          </Link>
          <Link to={"/faq"} className="hover:text-white  hover:shadow-lg">
            | FAQ
          </Link>
          <Link
            to={"/privacy-policy"}
            className="hover:text-white  hover:shadow-lg"
          >
            | Privacy Policy
          </Link>
        </div>
        <div>
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
