import styled from "./Accreditations.module.css";

const Accreditations = () => {
  return (
    <section className="main__section-padding" data-aos="fade-up">
      <h2 className="main__head">ACCREDITATIONS</h2>
      <p data-aos="fade-up" className="px-56 mb-20 text-2xl leading-9">
        Aljazari International Schools of Science and Technology provides
        top-level learning experiences for students; helping them to build the
        skills they need to carry them into the future they envision. We, too,
        look to the time after our students leave Aljazari, forming connections,
        which extend beyond the curriculum and classroom, understanding that
        universities and employers value distinct qualities in those they
        recruit. One of the most important such connections is our membership,
        and accompanying endorsements, from several international agencies.
      </p>

      <div className="px-28">
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center justify-center w-full p-20 border border-gray-300">
            <img
              className="w-48 hover:!filter-none transition-all duration-200"
              style={{ filter: "grayscale(100%)" }}
              src="https://aljazari.com.tr/wp-content/uploads/2023/03/accreditations-1.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center w-full p-20 border border-gray-300">
            <img
              className="w-48  hover:!filter-none transition-all duration-200"
              style={{ filter: "grayscale(100%)" }}
              src="https://aljazari.com.tr/wp-content/uploads/2023/03/accreditations-9.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center w-full p-20 border border-gray-300">
            <img
              className="w-48  hover:!filter-none transition-all duration-200"
              style={{ filter: "grayscale(100%)" }}
              src="https://aljazari.com.tr/wp-content/uploads/2023/03/accreditations-5.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center w-full p-20 border border-gray-300">
            <img
              className="w-48  hover:!filter-none transition-all duration-200"
              style={{ filter: "grayscale(100%)" }}
              src="https://aljazari.com.tr/wp-content/uploads/2023/04/accreditations-7.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center w-full p-20 border border-gray-300">
            <img
              className="w-48  hover:!filter-none transition-all duration-200"
              style={{ filter: "grayscale(100%)" }}
              src="https://aljazari.com.tr/wp-content/uploads/2023/04/accreditations-8.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center w-full p-20 border border-gray-300">
            <img
              className="w-48  hover:!filter-none transition-all duration-200"
              style={{ filter: "grayscale(100%)" }}
              src="https://aljazari.com.tr/wp-content/uploads/2023/03/accreditations-4.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center w-full p-20 border border-gray-300">
            <img
              className="w-48  hover:!filter-none transition-all duration-200"
              style={{ filter: "grayscale(100%)" }}
              src="https://aljazari.com.tr/wp-content/uploads/2023/12/WA_Logo_Colored.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center w-full p-20 border border-gray-300">
            <img
              className="w-48  hover:!filter-none transition-all duration-200"
              style={{ filter: "grayscale(100%)" }}
              src="https://aljazari.com.tr/wp-content/uploads/2024/06/ib-world-school-logo-1-colour.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-24">
        <button className={styled.btn}>
          <svg
            height="24"
            width="24"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            className="sparkle"
          >
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <span className="uppercase text">apply now</span>
        </button>
      </div>
    </section>
  );
};

export default Accreditations;
