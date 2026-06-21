import "./App.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {


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
  const Text = 'Увеличьте Видимость Вашего бизнеса на... '
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

  const SmoothScroll = useRef(null)
  const ScrollHandler = () => {
    SmoothScroll.current?.scrollIntoView({ behavior: 'smooth' });
  }

  // h-screen w-full overflow-y-scroll snap-y snap-mandatory
  return (
    <div className="h-screen w-full snap-start scroll-smooth">
      <div className="">
        <header className="py-10  flex  ">
          <p className="text-white text-3xl">
            MetaGroupe ®
          </p>
          <div className="px-4">
            <button className="w-40 h-10 border rounded-2xl  text-white bg-">Заказать услугу </button>
          </div>
        </header>
        {/* добавить блюр на изображение  */}
        {/* Start develop adaptation for mobile   */}
        <div className="flex items-start gap-4 w-full">
          <div className="flex-1">
            <div className="w-163">
              <div className="w-100 flex lg:w-70 ">
                {/* <p className="text-white text-2xl text-wrap lg:text-3xl">{output}</p> */}
              </div>
              <div className="mt-5 flex ">
                <img className="w-10 lg:w-15" src="Yandex.svg" alt="" />
                <p className="text-4xl text-white ml-5 font-bold lg:text-5xl mt-1"> Бизнес</p>
              </div>
            </div>
            <div className="mt-5 w-80">
              <p className="text-3xl text-[#FF6A3D] font-bold">Пока ваш профиль молчит, <br /> клиенты  уходят к соседнему <br /> пину на карте</p>
            </div>
            <div className="mt-10   w-105  lg:flex justify-start">
              <button className="w-80 active:bg-[#FF6A3D] ml-5  text-center h-15  border py-2  text-white rounded-3xl 
              shadow-white  lg:w-60 lg:h-20 lg:text-2xl  lg:hover:bg-[#151414] sm:hover:text-white
              transition-all duration-500 ease-out lg:hover:scale-105 sm:hover:translate-y-1 lg:hover:shadow-lg ">
                Заказать оформление
              </button>
              <div className="ml-5 mt-5">
                <button className="text-white w-80 active:bg-[#5B1111] h-15 border text-center py-2 rounded-3xl  lg:w-60 lg:h-20 lg:text-2xl  sm:hover:bg-[#151414] sm:hover:text-white
              transition-all duration-500 ease-out lg:hover:scale-105 sm:hover:translate-y-1 lg:hover:shadow-lg ">Подробнее</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-20">
            <hr className="bg-white w-90 mt-2" />
            <div>
              <p className="text-white text-2xl mt-2">50 млн+</p>
              <p className="text-gray-400">человек открывает Яндекс карты каждый месяц </p>
            </div>
            <div className="">
              <hr className="bg-white w-90 mt-2" />
              <p className="text-white text-2xl mt-2">11</p>
              <p className="text-gray-400">Пунктов входит в полное оформление профиля </p>
            </div>
            <hr className="bg-white w-90 mt-2" />
            <div>
              <p className="text-white text-2xl mt-2">~30</p>
              <p className="text-gray-400 text-xl">дней - средний срок выполнение работ </p>
            </div>
            <hr className="bg-white w-90 mt-2" />

          </div>
        </div>

        {/* <div className="mt-20">
          <p className="text-3xl text-white">Продвигайте компанию <br /> в Яндекс: Картах,</p>
          <p className="text-2xl  py-3 text-[#D14A0B]">Поиске и Навигаторе с  <br />помощью Яндекс Бизнеса</p>
        </div>
        <div className="mt-20 ">
          <div className="flex justify-center">
            <p className="text-white text-4xl">Вниз</p>
          </div>
          <div className="flex justify-center mt-5" >
            <button onClick={ScrollHandler} className="cursor-pointer">
              <img src="iconbut.svg" alt="" />
            </button>
          </div>
        </div> */}
        <div>
        </div>
      </div>

      <div className="mt-20">
        {/* <div className="w-full  ">
          <p className="text-3xl text-white ">Дело не в том, что у вас нет клиентов. Дело в том,  что они видят <p className="text-[#FF6A3D]">соседний пин</p>,а не ваш.</p>
        </div> */}
        <div className="mt-5">
          <p className="text-gray-400 text-2xl">Без оформленного профиля компания теряется среди конкурентов именно в тот момент, когда клиент уже готов прийти, — он просто выбирает того, чья карточка ответила первой</p>
        </div>
      </div>
      <div className="mt-10">
        <div>
          <div className="w-full h-22   rounded-2xl  border" >
            <div className="flex">
              <img className='w-3 ml-4' src="×.svg" alt="" />
              <p className="text-white ml-6 mt-5">Профиль без фото и описания — мимо проходят, не открывая карточку</p>
            </div>

          </div>
          <div className="w-full h-22   rounded-2xl  border mt-10" >
            <div className="flex">
              <img className='w-3 ml-4' src="×.svg" alt="" />
              <p className="text-white ml-6 mt-5">Нет ответов на отзывы - доверие ниже , чем у конкурентов рядом </p>
            </div>
          </div>
          <div className="w-full h-22   bg-none  rounded-2xl  border mt-10" >
            <div className="flex">
              <img className='w-3 ml-4' src="×.svg" alt="" />
              <p className="text-white ml-6 mt-5">Карточка не продвигается - компанию не находят на карте </p>
            </div>

          </div>
        </div>
      </div>
      {/* блок с демонстрацией  */}
      <div className="mt-20">
        <div className="w-full h-100 border rounded-2xl">
          <div>
            <p className="text-white text-xl mt-5 ml-10">Кофейня рядом · поиск</p>
          </div>
          <div className="mt-5 ml-5 w-90 border rounded-2xl py-3 h-20">
            {/* еще картинка будет */}
            <p className="text-xl ml-2">Кофейня Атлас - оформлен профль </p>
            <p className="text-xl ml-2">4.9 230 отзывов </p>
          </div>

          <div className=" mt-10 ml-5 w-90 border rounded-2xl py-3 h-20">
            {/* еще картинка будет */}
            <p className="text-xl ml-2">Ваша компания - без фото  </p>
            <p className="text-xl ml-2">3 отзыва </p>
          </div>
          <div className="  mt-10 ml-5 w-90 border rounded-2xl py-3 h-20">
            {/* еще картинка будет */}
            <p className="text-xl ml-2">Кофейня Луна - без описания  </p>
            <p className="text-xl ml-2">Не отвечает на отзывы  </p>
          </div>
        </div>

      </div>

      {/* <div className="overflow-hidden whitespace-nowrap mt-10">
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex animate-marquee">
            <li className="flex items-center whitespace-nowrap">
              <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
              <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
        </ul>
        <ul className="flex animate-marquee">
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li><li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li><li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li><li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li><li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li><li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
        </ul>
        <ul className="flex items-center gap-8">
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>

          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
          <li className="flex items-center whitespace-nowrap">
            <p className="text-2xl px-6 py-4 text-white">Яндекс</p>
            <img className='px-10' src="/Yandex.svg" alt="Yandex" />
          </li>
        </ul>
      </div>

    </div> */}

      {/* <div ref={SmoothScroll} className="flex mt-50 ">
        <div className="flex justify-between  px-15 h-screen w-full snap-start scroll-smooth mt-40  ">
          <div className="text-center mt-40 w-120 border rounded-2xl h-80 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg ">
            <p className="text-white text-5xl mt-5"> Проблема</p>
            <div className=" mt-3">
              <p className="text-white text-xl">Ваш бизнес может быть хорошим, <br /> но если профиль в Яндекс.Бизнесе оформлен слабо,  <br /> клиенты просто проходят мимо. <br /> В конкурентной выдаче выигрывают те, чья карточка заметнее, <br /> информативнее и вызывает больше доверия</p>
            </div>
          </div>
          <div className="text-center w-120 border rounded-2xl h-80 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg ">
            <div>
              <p className="text-white text-5xl mt-5">Почему мы  </p>
            </div>
            <div className="mt-3">
              <p className="text-white  text-xl">MetaGroup не просто заполняет профиль, <br /> а превращает Яндекс.Бизнес в рабочий инструмент продаж. <br /> Мы знаем, как оформить карточку так, <br /> чтобы она выглядела профессионально, <br />
                вызывала доверие и помогала клиенту выбрать именно вас.</p>
            </div>
          </div>
          <div className="text-center mt-40 w-120 border rounded-2xl h-80  transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
            <div>
              <p className="text-white text-5xl mt-5">Решение</p>
            </div>
            <div className=" mt-3">
              <p className="text-white  text-xl">MetaGroup превращает ваш профиль Яндекс.Бизнес  <br /> в эффективный канал привлечения клиентов. <br />
                Мы продумываем оформление, контент и SEO-настройку так, <br /> чтобы карточка вызывала доверие, привлекала внимание и <br /> помогала получать обращения.</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mt-50">
        {/* <Footer /> */}
      </div>
    </div >
  );
}
export default App;