import React, { Fragment } from "react";
import News_1 from "../../assets/news/WhatsApp-Image-2024-02-28-at-2.24.49-PM.jpeg";
import News_2 from "../../assets/news/News-Austrilan.jpg";
import News_3 from "../../assets/news/02.jpg";

const News = () => {
  const newsData = [
    {
      image: News_1,
      title: "Announcement and Congratulations to the Scholarship Winners!",
      disc: "We are thrilled to announce the recipients of this year's scholarship! After careful consideration, 7 outstanding students have been selected for their exceptional achievements, dedication to academic excellence, and impactful contributions to our community....",
      color: "#59C7DA",
    },
    {
      image: News_2,
      image_info:
        "Fostering Global Educational Partnerships: Aljazari’s Historic Agreement with Western Australian Ministry of Education",
    },
    {
      image: News_2,
      image_info:
        "Fostering Global Educational Partnerships: Aljazari’s Historic Agreement with Western Australian Ministry of Education",
    },
    {
      image: News_3,
      title: "Announcement and Congratulations to the Scholarship Winners!",
      disc: "We are thrilled to announce the recipients of this year's scholarship! After careful consideration, 7 outstanding students have been selected for their exceptional achievements, dedication to academic excellence, and impactful contributions to our community....",
      color: "#faa61a",
    },
    {
      image: News_1,
      title: "Announcement and Congratulations to the Scholarship Winners!",
      disc: "We are thrilled to announce the recipients of this year's scholarship! After careful consideration, 7 outstanding students have been selected for their exceptional achievements, dedication to academic excellence, and impactful contributions to our community....",
      color: "#59C7DA",
    },
    {
      image: News_2,
      image_info:
        "Fostering Global Educational Partnerships: Aljazari’s Historic Agreement with Western Australian Ministry of Education",
    },
    {
      image: News_2,
      image_info:
        "Fostering Global Educational Partnerships: Aljazari’s Historic Agreement with Western Australian Ministry of Education",
    },
    {
      image: News_3,
      title: "Announcement and Congratulations to the Scholarship Winners!",
      disc: "We are thrilled to announce the recipients of this year's scholarship! After careful consideration, 7 outstanding students have been selected for their exceptional achievements, dedication to academic excellence, and impactful contributions to our community....",
      color: "#faa61a",
    },
  ];

  return (
    <div className="container py-28 m-auto news">
      <h2 className="text-6xl text-mainColor font-bold text-center">
        NEWS & Announcement
      </h2>
      <div className="flex gap-5 mx-auto my-16">
        <div>
          {newsData &&
            newsData.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className={`${
                  item.image_info ? "h-64" : "h-[500px]"
                } overflow-hidden rounded-2xl relative mb-5`}
              >
                <div className={`${item.image_info ? "h-64" : "h-1/2"}`}>
                  <img src={item.image} alt="news" className="h-full" />
                </div>
                {item.image_info ? (
                  <Fragment>
                    <div className="text_gradient absolute -bottom-28 text-white w-full text-start px-5 font-bold text-2xl z-30 cursor-pointer">
                      {item.image_info}
                    </div>
                    <div className="linear_gradient absolute top-0 left-0 w-full h-full cursor-pointer"></div>
                  </Fragment>
                ) : (
                  <div className="p-6" style={{ backgroundColor: item.color }}>
                    <h2 className="text-xl text-white font-semibold mb-2">
                      {item.title}
                    </h2>
                    <p className="text-white">{item.disc}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
        <div>
          {newsData &&
            newsData.slice(2, 4).map((item, index) => (
              <div
                key={index}
                className={`${
                  item.image_info ? "h-64" : "h-[500px]"
                } overflow-hidden rounded-2xl relative mb-5`}
              >
                <div className={`${item.image_info ? "h-64" : "h-1/2"}`}>
                  <img src={item.image} alt="news" className="h-full" />
                </div>
                {item.image_info ? (
                  <Fragment>
                    <div className="text_gradient absolute -bottom-28 text-white w-full text-start px-5 font-bold text-2xl z-30 cursor-pointer">
                      {item.image_info}
                    </div>
                    <div className="linear_gradient absolute top-0 left-0 w-full h-full cursor-pointer"></div>
                  </Fragment>
                ) : (
                  <div className="p-6" style={{ backgroundColor: item.color }}>
                    <h2 className="text-xl text-white font-semibold mb-2">
                      {item.title}
                    </h2>
                    <p className="text-white">{item.disc}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
        <div>
          {newsData &&
            newsData.slice(4, 6).map((item, index) => (
              <div
                key={index}
                className={`${
                  item.image_info ? "h-64" : "h-[500px]"
                } overflow-hidden rounded-2xl relative mb-5`}
              >
                <div className={`${item.image_info ? "h-64" : "h-1/2"}`}>
                  <img src={item.image} alt="news" className="h-full" />
                </div>
                {item.image_info ? (
                  <Fragment>
                    <div className="text_gradient absolute -bottom-28 text-white w-full text-start px-5 font-bold text-2xl z-30 cursor-pointer">
                      {item.image_info}
                    </div>
                    <div className="linear_gradient absolute top-0 left-0 w-full h-full cursor-pointer"></div>
                  </Fragment>
                ) : (
                  <div className="p-6" style={{ backgroundColor: item.color }}>
                    <h2 className="text-xl text-white font-semibold mb-2">
                      {item.title}
                    </h2>
                    <p className="text-white">{item.disc}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
        <div>
          {newsData &&
            newsData.slice(6, 8).map((item, index) => (
              <div
                key={index}
                className={`${
                  item.image_info ? "h-64" : "h-[500px]"
                } overflow-hidden rounded-2xl relative mb-5`}
              >
                <div className={`${item.image_info ? "h-64" : "h-1/2"}`}>
                  <img src={item.image} alt="news" className="h-full" />
                </div>
                {item.image_info ? (
                  <Fragment>
                    <div className="text_gradient absolute -bottom-28 text-white w-full text-start px-5 font-bold text-2xl z-30 cursor-pointer">
                      {item.image_info}
                    </div>
                    <div className="linear_gradient absolute top-0 left-0 w-full h-full cursor-pointer"></div>
                  </Fragment>
                ) : (
                  <div className="p-6" style={{ backgroundColor: item.color }}>
                    <h2 className="text-xl text-white font-semibold mb-2">
                      {item.title}
                    </h2>
                    <p className="text-white">{item.disc}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default News;
