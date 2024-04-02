import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaPeopleRoof } from "react-icons/fa6";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { GiClockwork } from "react-icons/gi";

const Projectcount = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    
    >
       
        <div className="d-flex flex-wrap " style={{borderBottom: "1px solid var(--primary-color-hover)"}}>
            <div className="d-flex flex-wrap w-50 h-50 text-light flex-column justify-content-center align-items-center" >
            <BiSolidBuildingHouse size={100} style={{color: "var(--primary-color-hover)"}}/>

            <h1 className="fs-2 text-center" style={{color: "var(--primary-color)"}}>
            {" "}
            {counterOn && (
              <CountUp start={0} end={100} duration={2} delay={0} />
            )}
            +
          </h1>
            <p style={{color: "var(--primary-color)", textAlign: "center"}}>Projects Completed</p>
            </div>
            <div className="d-flex flex-wrap w-50 h-50 text-light flex-column justify-content-center align-items-center" >
            <FaPeopleRoof size={100} style={{color: "var(--primary-color-hover)"}}/>
            <h1 className="fs-2 text-center" style={{color: "var(--primary-color)"}}>
            {" "}
            {counterOn && (
              <CountUp start={0} end={250} duration={2} delay={0} />
            )}
            +
          </h1>
            <p style={{color: "var(--primary-color)", textAlign: "center"}}>Clients Served</p>
            </div>
            <div className="d-flex flex-wrap w-50 h-50 text-light flex-column justify-content-center align-items-center" >
            <GrUserWorker size={100} style={{color: "var(--primary-color-hover)"}}/>
            <h1 className="fs-2 text-center" style={{color: "var(--primary-color)"}}>
            {" "}
            {counterOn && <CountUp start={0} end={40} duration={2} delay={0} />}
            +
          </h1>
            <p style={{color: "var(--primary-color)", textAlign: "center"}}>Employees</p>
            </div>
            <div className="d-flex flex-wrap w-50 h-50 text-light flex-column justify-content-center align-items-center" >
            <GiClockwork size={100} style={{color: "var(--primary-color-hover)"}}/>
            <h1 className="fs-2 text-center" style={{color: "var(--primary-color)"}}>
            {" "}
            {counterOn && <CountUp start={0} end={3} duration={2} delay={0} />}+
          </h1>
            <p style={{color: "var(--primary-color)", textAlign: "center"}}>Years of Experience</p>
            </div>
        </div>
    </ScrollTrigger>
  );
};

export default Projectcount;
