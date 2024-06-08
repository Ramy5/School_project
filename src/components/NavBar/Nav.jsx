import navShapeRight from "../../assets/nav/shape-right.svg";
import navShapeLeft from "../../assets/nav/shape-left.svg";
import navLogo from "../../assets/nav/nav-logo.png";
import "./navBarIcon.css";

const Nav = () => {
  return (
    <nav className="relative z-50 grid grid-cols-3">
      {/** LEFT SIDE */}
      <div className="relative">
        <img
          src={navShapeLeft}
          alt="nav shape"
          className="-mt-[5.5px] w-96 absolute top-0 left-0 inline-block -z-10"
        />

        <p className="w-full px-24 mt-1 text-2xl font-bold text-white cursor-pointer">
          Join Us
        </p>
      </div>

      {/** CENTER */}
      <div className="flex justify-center -translate-y-10">
        <img src={navLogo} alt="nav logo" className="w-36 h-36" />
      </div>

      {/** RIGHT SIDE */}
      <div className="relative">
        <img
          src={navShapeRight}
          alt="nav shape"
          className="-mt-[5.5px] w-96 absolute top-0 right-0 inline-block -z-10"
        />

        <div className="flex items-center justify-end w-full gap-16 pr-12">
          <p className="mt-1 text-2xl font-bold text-white cursor-pointer">
            About Us
          </p>

          <div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="toggle">
              <div className="bar bar--top"></div>
              <div className="bar bar--middle"></div>
              <div className="bar bar--bottom"></div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
