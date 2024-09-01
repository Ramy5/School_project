import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import Footer_1 from "../../assets/Footer/footer_1.svg";
import Footer_2 from "../../assets/Footer/footer_2.svg";
import Footer_3 from "../../assets/Footer/footer_3.svg";
import Footer_4 from "../../assets/Footer/footer_4.svg";
import Footer_5 from "../../assets/Footer/footer_5.svg";
import Footer_6 from "../../assets/Footer/footer_6.svg";
import Footer_Logo from "../../assets/Footer/footer_logo.svg";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#272F56] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-8 container_section pb-20 pt-40 relative">
        <div className="flex w-full absolute -top-32">
          <div>
            <img src={Footer_1} alt="Footer" />
          </div>
          <div>
            <img src={Footer_2} alt="Footer" />
          </div>
          <div>
            <img src={Footer_3} alt="Footer" />
          </div>
          <div>
            <img src={Footer_4} alt="Footer" />
          </div>
          <div>
            <img src={Footer_5} alt="Footer" />
          </div>
          <div>
            <img src={Footer_6} alt="Footer" />
          </div>
        </div>
        <div>
          <img src={Footer_Logo} alt="footer" className="-ms-4" />
          <p className="text-white my-6 text-sm">
            Donec sit amet nibh vestibulum ipsum cursus rhoncus. Duis ac tortor
            gravida ligula eleifend finibus sed vel tellus.
          </p>
          <div>
            <h2 className="text-white">Social Media</h2>
            <div className="flex gap-8 mt-3">
              <FaTwitter
                size={22}
                className="fill-white transition-transform transform cursor-pointer group-hover:-translate-y-8"
              />
              <FaGooglePlusG
                size={22}
                className="fill-white transition-transform transform cursor-pointer group-hover:-translate-y-8"
              />
              <FaFacebookF
                size={22}
                className="fill-white transition-transform transform cursor-pointer group-hover:-translate-y-8"
              />
              <FaInstagram
                size={22}
                className="fill-white transition-transform transform cursor-pointer group-hover:-translate-y-8"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-white font-medium text-lg mb-5">Get In Touch</h2>
          <ul className="text-white">
            <li>Address: Namık Kemal, </li>
            <li className="my-2">Haramidere Yolu, 34513</li>
            <li>Call Us +90 544 447 30 30</li>
            <li className="mt-2">info@eliteacademy.school</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-medium text-lg mb-5">Useful Links</h2>
          <ul className="text-white">
            <li>Contact us</li>
            <li className="my-2">About Us</li>
            <li>Curriculum</li>
            <li className="my-2">Admssion</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-medium text-lg mb-5">
            Customer Services
          </h2>
          <ul className="text-white">
            <li>Orders</li>
            <li className="my-2">Addreses</li>
            <li>Account Details</li>
            <li className="my-2">24x7 Calls</li>
            <li>Blogs & News</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-medium text-lg mb-5">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white my-6 text-sm">
            Join over 25,000 People Getting Our Emails Conversation, confidence,
            creativity.
          </p>
          <div>
            <form>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent border border-mainColor rounded-3xl px-4 py-2 text-sm w-full text-white focus:border-mainColor focus:outline-none placeholder:text-white"
              />
              <button className="bg-mainColor w-full flex items-center justify-center rounded-3xl px-4 py-2 mt-3">
                <span className="text-white">Subscribe Now</span>
                <GoArrowUpRight className="fill-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-mainColor text-white text-center py-3">© 2024 Elite. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
