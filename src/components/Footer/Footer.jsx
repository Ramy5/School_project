import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import Footer_Logo from "../../assets/Footer/footer_logo.svg";
import { GoArrowUpRight } from "react-icons/go";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [dataSource, setDataSource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await axios.get("https://elite.medicalvisionarabia.com/api/home");
        setDataSource(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  const data = dataSource && dataSource.footer;

  const imageFooter = data?.items?.map((item) => ({
    image: item.value,
  }));

  if (loading) return <Loading pageNames="Home" />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <footer className="">
      <div className="bg-[#272F56] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-8 container_section pb-20 pt-20 sm:pt-32 md:pt-40 relative px-5 sm:px-12">
        <div className="hidden sm:flex w-full absolute top-0 -mt-16 lg:-mt-24">
          {imageFooter.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="Footer" />
            </div>
          ))}
        </div>
        <div className="text-center md:text-start">
          <div className="w-full flex justify-center md:justify-start">
            <img src={Footer_Logo} alt="footer" className="-ms-4" />
          </div>
          <p className="text-white my-6 text-sm">
            Donec sit amet nibh vestibulum ipsum cursus rhoncus. Duis ac tortor
            gravida ligula eleifend finibus sed vel tellus.
          </p>
          <div>
            <h2 className="text-white">Social Media</h2>
            <div className="flex justify-center md:justify-start gap-8 mt-3">
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
        <div className="text-center md:text-start">
          <h2 className="text-white font-medium text-lg mb-5">Get In Touch</h2>
          <ul className="text-white">
            <li>Address: Namık Kemal, </li>
            <li className="my-2">Haramidere Yolu, 34513</li>
            <li>Call Us +90 544 447 30 30</li>
            <li className="mt-2">info@eliteacademy.school</li>
          </ul>
        </div>
        <div className="text-center md:text-start">
          <h2 className="text-white font-medium text-lg mb-5">Useful Links</h2>
          <ul className="text-white">
            <li>Contact us</li>
            <li className="my-2">About Us</li>
            <li>Curriculum</li>
            <li className="my-2">Admssion</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="text-center md:text-start">
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
        <div className="text-center md:text-start">
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
      <div className="bg-mainColor text-white text-center py-3">
        © 2024 Elite. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
