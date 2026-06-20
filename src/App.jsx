import "./App.css";
import { useEffect, useRef } from "react";
import { createAnimatable, text, utils } from "animejs";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const circleElement = circleRef.current;

  //   if (!container || !circleElement) return;

  //   let bounds = container.getBoundingClientRect();

  //   const refreshBounds = () => {
  //     bounds = container.getBoundingClientRect();
  //   };

  //   const circle = createAnimatable(circleElement, {
  //     x: 20,
  //     y: 10,
  //     ease: "outExpo",
  //   });
  //   const onMouseMove = (e) => {
  //     const { width, height, left, top } = bounds;

  //     const hw = width / 2;
  //     const hh = height / 2;

  //     const x = utils.clamp(
  //       e.clientX - left - hw,
  //       -hw,
  //       hw
  //     );
  //     const y = utils.clamp(
  //       e.clientY - top - hh,
  //       -hh,
  //       hh
  //     );

  //     circle.x(x).y(y);
  //   };

  //   window.addEventListener("mousemove", onMouseMove);
  //   window.addEventListener("resize", refreshBounds);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //     window.removeEventListener("resize", refreshBounds);
  //   };
  // }, []);



  const [output, setOutput] = useState('')
  const Text = 'Увеличьте Видимость Вашего бизнеса на '
  useEffect(() => {
    let position = 0
    let timeout;
    const getRandomInt = (min = 50, max = 250) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const TypeText = () => {
      const char = Text[position]
      if (char === undefined) return
      setOutput(prev => prev + char)
      position++
      timeout = setTimeout(TypeText, getRandomInt())
    }
    TypeText()
    return () => clearTimeout(timeout)
  }, [])
  return (
    <div className="">
      <div className=" snap-y snap-mandatory scroll-smooth ">

        <header className="py-10  ">
          <p className="text-white text-3xl">
            MetaGroupe ®
          </p>
        </header>
        <div className="flex items-start gap-4 w-full">
          <div className="flex-1">
            <div className="w-163">
              <div className="w-163 flex">
                <p className="text-white text-7xl text-wrap">{output}</p>
              </div>
              <div className="mt-20 flex">
                <img src="Vector.svg" alt="" />
                <p className="text-6xl text-white ml-5 font-bold"> Бизнес</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 mt-[-90px] h-100 mr-20 p-0 w-150 ">
            <img className="w-150 absolute" src="Folder.svg" alt="" />
            <div className="flex-shrink-0 relative">
              <img className="ml-50 mt-50" src="loca.svg" alt="" />
              <div className="flex-shrink-0 justify-between w-100 relative">
                <div>
                  <img className="ml-40" src="galga.svg" alt="" />
                </div>
                <div className="flex justify-end">
                  <img className="mt-20" src="Vector.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>




        {/* <div className="">
        <div className="flex" >
          <p className="text-white text-7xl" >{increase}</p>
          <span className="animate-pulse h-10 w-0.5 bg-white ml-4 mt-5"> </span>
        </div>

        <p className="text-white text-7xl py-5">{Look}</p>
        <p className="text-white text-7xl">{Bisness}</p>
      </div> */}

        <div className="mt-20">
          <p className="text-3xl text-gray-400">Продвигайте компанию в Яндекс: Картах,</p>
          <p className="text-3xl mt-5 text-gray-400">Поиске и Навигаторе с помощью Яндекс Бизнеса</p>
        </div>
        <div className="mt-20 ">
          <div className="flex justify-center">
            <p className="text-white text-4xl">Вниз</p>
          </div>
          <div className="flex justify-center mt-5" >
            <img src="iconbut.svg" alt="" />
          </div>

        </div>
        <div>
        </div>
      </div>



      <Footer />
    </div>
  );
}

export default App;