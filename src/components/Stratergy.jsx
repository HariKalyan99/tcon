
import React from "react";
import Commitmentdrawer from "./Commitmentdrawer";

const Stratergy = () => {


  return (
    <div>
      <div
        className="container-fluid mt-5 text-center"
        style={{
          color: "var(--background-color)",
          backgroundColor:
          "var(--background-color)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderTop: "2px solid var(--primary-color-hover)",
        }}
      >
        <div
          style={{ borderBottom: "1px solid var(--primary-color)" }}
        >
          <h1 className="fw-light " style={{color: "var(--primary-color)"}}>With a keen eye for detail and a commitment</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <Commitmentdrawer heading={"Research and Planning"}>
          Once you have established your goals, conduct thorough research
        to understand the options available to you. Explore modern home
        designs, technologies, and sustainable building materials.
        Consider consulting with architects, builders, and real estate
        professionals who specialize in modern homes. Develop a detailed
        plan that outlines the specific features and elements you want
        to incorporate into your modern living space.
          </Commitmentdrawer>

          <Commitmentdrawer heading={"Execution and Implementation"}>
          With a solid plan in place, proceed to execute your vision for a
              modern home. This may involve working with architects and builders
              to design and construct your dream home from scratch, or it could
              entail renovating an existing property to incorporate modern
              upgrades and features. Throughout the implementation process, stay
              engaged and communicate closely with your team to ensure that your
              vision is being realized effectively and efficiently.
          </Commitmentdrawer>

          <Commitmentdrawer heading={"Assessment and Goal Setting"}>
          Begin by assessing your current situation and identifying your
              goals. What are your priorities for living in a modern house? Are
              you looking for improved energy efficiency, advanced technology
              integration, enhanced comfort, or aesthetic appeal? Clearly define
              what you hope to achieve by living in a modern home.
          </Commitmentdrawer>
        </div>
      </div>

      
    </div>
  );
};

export default Stratergy;
