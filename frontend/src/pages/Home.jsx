import uberLogo from "../assets/uberLogo.png";
import maps from "../assets/maps.png";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "./../components/LocationSearchPanel";
import UberX from "../assets/UberX.webp";
import UberAuto from "../assets/Uber_Auto.webp";
import UberBike from "../assets/uber-moto.webp";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          opacity: 1,
          padding: 20,
          ease: "power2.inOut"
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
          ease: "power2.inOut"
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
          padding: 0,
          ease: "power2.inOut"
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
          ease: "power2.inOut"
        });
      }
    },
    [panelOpen]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src={uberLogo}
        alt="uber logo"
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src={maps}
          alt="maps image"
        />
      </div>
      <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            className="absolute right-6 top-6 text-2xl opacity-0 cursor-pointer"
            onClick={() => setPanelOpen(false)}
          >
            <i className="ri-arrow-down-s-line"> </i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg mt-5 w-full"
              type="text"
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter your destination location"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0 opacity-0 overflow-hidden">
          <LocationSearchPanel />
        </div>
      </div>
      <div className="fixed z-10 bottom-0 translate-y-full px-3 py-8 bg-white w-full transition-transform duration-300">
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        <div className="flex border-2 active:border-black w-full items-center justify-between p-3 rounded-xl mb-2">
          <img className="h-10" src={UberX} alt="uber car/ 4 wheeler image" />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberGo
              <span>
                <i className="ri-user-3-fill pl-2">4</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="text-xs font-normal">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹500.10</h2>
        </div>

        <div className="flex border-2 active:border-black w-full items-center justify-between p-3 rounded-xl mb-2">
          <img
            className="h-10"
            src={UberAuto}
            alt="uber car/ 4 wheeler image"
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Uber Auto
              <span>
                <i className="ri-user-3-fill pl-2">3</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="text-xs font-normal">Affordable auto rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹250.08</h2>
        </div>

        <div className="flex border-2 active:border-black w-full items-center justify-between p-3 rounded-xl mb-2">
          <img className="h-10" src={UberBike} alt="uber bike image" />
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Moto
              <span>
                <i className="ri-user-3-fill pl-2">1</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="text-xs font-normal">Affordable, motorcycle rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹50.19</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
