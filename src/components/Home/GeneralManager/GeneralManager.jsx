import Aos from "aos";
import { useEffect } from "react";
import { useParallax } from "react-scroll-parallax";

const GeneralManager = () => {
  const parallax = useParallax({
    easing: "easeInCubic",
    translateX: [0, -100],
  });

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="main__section-padding" data-aos="fade-up">
      <p
        ref={parallax.ref}
        className="text-[7rem] text-gray-100 uppercase text-center font-bold space tracking-widest translate-y-4 -mb-8"
      >
        A WARM WELCOME
      </p>
      <h2 data-aos="fade-up" className="tracking-wider main__head">
        A MESSAGE FROM OUR GENERAL MANAGER
      </h2>

      <div className="flex items-start justify-between gap-24 px-28">
        <div
          data-aos="zoom-in-up"
          className="rounded-br-[9rem] overflow-hidden w-[65rem]"
          style={{ boxShadow: "0px 8px 7.68px 0.32px rgba(0, 0, 0, 0.34)" }}
        >
          <img
            src="https://aljazari.com.tr/wp-content/uploads/2023/03/manager.jpg"
            alt="manager"
            className="w-full h-[25rem]"
          />
        </div>

        <div data-aos="fade-left">
          <p className="mb-10 text-3xl text-gray-500">
            Dear Parents and Students,
          </p>
          <p className="text-3xl text-gray-500 mb-10 leading-[3rem]">
            It is with great pride and excitement that I welcome you, as the
            General Manager of Aljazari International Schools for Science and
            Technology. I am honored to have the opportunity to lead the school
            with such a rich tradition of education.
          </p>

          <button className="button">read more</button>
        </div>
      </div>
    </section>
  );
};

export default GeneralManager;
