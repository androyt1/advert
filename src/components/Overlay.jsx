import { Scroll } from "@react-three/drei";
import me from "/images/me.webp";
import { AiFillDownCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="flex flex-row justify-center items-center">
      <div className="h-screen w-screen flex items-center justify-center bg-[#0b0b0b]">
        <div className="flex flex-col justify-center items-center">
          {/* <img src={me} alt="androy logo" width={250} height={250} /> */}
          <h2 className="text-2xl md:text-3xl text-slate-200 font-semibold">
            Hi there
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase  bg-clip-text bg-gradient-to-b from-emerald-50 via-orange-500  to-pink-700 text-transparent">
            Aghoghovwia Andrew
          </h1>
          <p className="text-xl text-slate-200 mt-4">Welcome to my Portfolio</p>
          <AiFillDownCircle size={40} color="#FFF" className="mt-6 mb-3" />
          <h2 className="font-playfair-display text-white text-xl">
            Scroll down to continue.
          </h2>
        </div>
      </div>
    </section>
  );
};

const Section = ({ heading, description, alignStart }) => {
  return (
    <>
      <section
        className={`h-screen flex flex-col justify-start ${
          alignStart ? "items-start" : "items-end"
        } p-0`}
      >
        <div className="w-full h-full max-w-[50%] ">
          <div className={` p-5 ${alignStart ? "text-left " : "text-right "} `}>
            <h2 className="text-lg lg:text-6xl uppercase font-bold leading-none  text-left bg-clip-text bg-gradient-to-b from-emerald-50 via-orange-500  to-pink-700 text-transparent">
              {heading}
            </h2>
            <p className="text-white  mt-3 text-xl lg:text-base text-left lg:max-w-full">
              {description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const EndCard = () => {
  return (
    <section className="flex flex-row justify-center items-center">
      <div className="h-screen w-screen flex items-end justify-between bg-transparent pb-4">
        <header className="text-center flex flex-col items-center">
          <h2>
            <img
              src={me}
              alt="androy logo"
              width={100}
              height={100}
              loading="lazy"
            />
          </h2>
        </header>
        <h2 className="font-playfair-display flex flex-col text-right items-end text-[0.45rem] sm:text-base">
          Made by Aghoghovwia Andrew with React-Three-Fiber and GSAP.{" "}
          <span className="sm:text-xs">
            Simple Portfolio made with React-Three-Fiber and GSAP.
          </span>
        </h2>
      </div>
    </section>
  );
};

export default function Overlay() {
  return (
    <Scroll html>
      <Hero />
      <main className="w-screen pointer-events-none px-3">
        <div className="h-screen" />
        <div className="max-w-[1850px] mx-auto">
          <Section
            heading="Full-Stack Mastery"
            description="Seasoned full-stack developer with 7+ years of expertise in the MERN stack, TypeScript, and modern web technologies. Turning complex requirements into elegant, scalable solutions."
            alignStart={true}
          />

          <Section
            heading="Technical Excellence"
            description="Specialized in building robust applications using React, Node.js, MongoDB, and Express. Proficient in TypeScript, modern JavaScript, and best practices in web development."
            alignStart={false}
          />

          <Section
            heading="Solution Architecture"
            description="Expert in designing scalable architectures, implementing microservices, and optimizing application performance. Strong focus on code quality, testing, and maintainable solutions."
            alignStart={false}
          />

          <Section
            heading="Innovation & Leadership"
            description="Proven track record of leading development teams, mentoring junior developers, and driving technical initiatives. Passionate about staying current with emerging technologies and industry trends."
            alignStart={false}
          />

          <Section
            heading="Client Success Focus"
            description="Dedicated to delivering high-impact solutions that drive business value. Experience in agile methodologies, collaborative development, and maintaining clear communication with stakeholders."
            alignStart={false}
          />
          <EndCard />
        </div>
      </main>
    </Scroll>
  );
}
