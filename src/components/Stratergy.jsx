
import React from "react";
import Commitmentdrawer from "./Commitmentdrawer";

const Stratergy = () => {

  return (
    <div>
      <div
        className="container-fluid py-5 mt-5 text-center"
        style={{
          color: "var(--background-color)",
          backgroundImage:
            "linear-gradient(98deg, rgba(43,35,24,1) 3%, rgba(79,68,50,1) 54%, rgba(169,156,112,1) 100%)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderTop: "5px solid var(--primary-color-hover)",
        }}
      >
        <div
          className="pb-3 mb-4 "
          style={{ borderBottom: "3px solid var(--primary-color)" }}
        >
          <h1 >With a keen eye for detail and a commitment</h1>
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

      <div
        class="h-50 p-5 m-5"
        style={{ borderLeft: "1px solid var(--primary-color)" }}
      >
        <p>
          At Tron's constructions, our primary focus is on crafting exceptional
          interiors and exteriors that redefine modern living. With a passion
          for design innovation and meticulous attention to detail, we
          specialize in creating captivating spaces that seamlessly blend style,
          functionality, and comfort. From thoughtfully curated interiors that
          reflect your personality and lifestyle to striking exteriors that make
          a statement, we are committed to delivering unparalleled craftsmanship
          and design excellence. Whether it's transforming a single room or an
          entire property, trust us to bring your vision to life with
          creativity, precision, and expertise. Experience the perfect harmony
          of interior and exterior design with Tron's constructions.
        </p>
      </div>
    </div>
  );
};

export default Stratergy;
