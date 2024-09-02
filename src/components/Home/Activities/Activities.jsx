import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Aos from "aos";
import { useEffect } from "react";

const Activities = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const ActivitiesData = [
    {
      image:
        "https://aljazari.com.tr/wp-content/uploads/2023/05/MicrosoftTeams-image.jpg",
      title: "Natural sciences workshop",
      desc: "We meet in the colorful world We meet in the colorful world We meet in the colorful world We meet in the colorful world We meet in the colorful world",
    },
    {
      image:
        "https://aljazari.com.tr/wp-content/uploads/2023/05/MicrosoftTeams-image.jpg",
      title: "Natural sciences workshop",
      desc: "We meet in the colorful world We meet in the colorful world We meet in the colorful world We meet in the colorful world We meet in the colorful world",
    },
    {
      image:
        "https://aljazari.com.tr/wp-content/uploads/2023/05/MicrosoftTeams-image.jpg",
      title: "Natural sciences workshop",
      desc: "We meet in the colorful world We meet in the colorful world We meet in the colorful world We meet in the colorful world We meet in the colorful world",
    },
    {
      image:
        "https://aljazari.com.tr/wp-content/uploads/2023/05/MicrosoftTeams-image.jpg",
      title: "Natural sciences workshop",
      desc: "We meet in the colorful world We meet in the colorful world We meet in the colorful world We meet in the colorful world We meet in the colorful world",
    },
    {
      image:
        "https://aljazari.com.tr/wp-content/uploads/2023/05/MicrosoftTeams-image.jpg",
      title: "Natural sciences workshop",
      desc: "We meet in the colorful world We meet in the colorful world We meet in the colorful world We meet in the colorful world We meet in the colorful world",
    },
    {
      image:
        "https://aljazari.com.tr/wp-content/uploads/2023/05/MicrosoftTeams-image.jpg",
      title: "Natural sciences workshop",
      desc: "We meet in the colorful world We meet in the colorful world We meet in the colorful world We meet in the colorful world We meet in the colorful world",
    },
  ];
  return (
    <section className="main__padding-section">
      <h2 className="mb-20 main__head text-3xl md:text-4xl lg:text-5xl">
        Activities
      </h2>

      <div className="relative mx:0 sm:mx-20 mb-40 cursor-pointer">
        <div
          className="absolute -translate-x-1/2 bg-gray-100 h-[37rem] w-[45rem] rounded-xl top-[-4rem] left-1/2"
          data-aos="zoom-in-down"
        ></div>

        <div data-aos="zoom-in-up">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              787: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {ActivitiesData &&
              ActivitiesData.map((item, index) => (
                <SwiperSlide className="shadow-3xl " key={index}>
                  <div className="relative">
                    <img
                      src={item.image}
                      alt="activity 1"
                      className="w-full h-52"
                    />
                    <p className="absolute right-0 w-24 px-2 py-1 font-bold tracking-wider text-center uppercase bg-white rounded-l-lg top-3 text-secondColor">
                      free
                    </p>
                    <p className="absolute flex flex-col items-center gap-1 p-2 uppercase bg-white -bottom-8 left-4 rounded-xl">
                      <span className="text-3xl font-bold text-secondColor">
                        20
                      </span>
                      <span className="font-bold text-secondColor">May</span>
                    </p>
                  </div>
                  <div className="px-4 pt-12 pb-7 text-white bg-mainColor rounded-b-3xl">
                    <h5 className="mb-3 text-2xl font-bold">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Activities;
