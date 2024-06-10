import { useParallax } from "react-scroll-parallax";
import kinderGartenLogo from "../../../assets/kinerGarten/kinder-garten-logo.png";

const KinderGarten = () => {
  const { ref } = useParallax({
    scaleX: [0.9, 0.6, "easeInOut"],
  });

  return (
    <section className="kinderGarten h-[50rem] relative">
      <div
        className="absolute top-0 left-0 w-[120rem] h-full origin-left rounded-r-full"
        ref={ref}
      ></div>
      <div className="absolute top-0 left-0 z-20 flex flex-col items-start w-1/2 h-full py-24 pl-40 text-white">
        <img src={kinderGartenLogo} alt="logo" className="mb-6 w-72" />
        <h2 className="text-[2.5rem] font-bold mb-12">ALJAZARI KINDERGARTEN</h2>
        <p className="mb-12 text-xl leading-10">
          Aljazari International Schools of Science and Technology, KG stage
          enables the children to discover themselves, improve their talents,
          create their own tools and let them enjoy the life in 5 different
          well-designed thematic classrooms.
        </p>
        <button className="!text-white button">read more</button>
      </div>
    </section>
  );
};

export default KinderGarten;
