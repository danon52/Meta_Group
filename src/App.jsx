import "./App.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
    <div className=" px-3 h-screen w-full snap-start scroll-smooth lg:px-20">
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="">

        <header className="py-10  flex block lg:hidden  ">
          <div>
            <img className="w-7 mt-1" src="<img class="
              src="https://static.tildacdn.com/tild3833-6131-4738-a430-373834626263/Group_39903.svg" alt=""
              imgfield="tn_img_1748261949057" alt="" />
          </div>
          <p className="text-white text-3xl ml-4">
            MetaGroupe ®
          </p>
          <div className="px-4">
            <button className="w-40 h-10 border rounded-2xl  text-white hover:bg-[#1E3320] duration-300 hover:scale-105">Заказать услугу </button>
          </div>
        </header>
        {/* добавить блюр на изображение  */}
        {/* Start develop adaptation for mobile   */}
        <div className="flex items-start gap-4 w-full">
          <div className="flex-1">
            <div className="w-163 lg:w-full">
              <div className="lg:grid grid-cols-2 flex justify-between ">
                <div className="w-100 flex lg:w-140 ">
                  {/* <p className="text-white text-2xl text-wrap lg:text-5xl ">{output}</p> */}
                </div>
                {/* <div className="hidden lg:block">
                  <p className=" hidden lg:block text-5xl ">
                    Оформляем карточку компании в Яндекс.Бизнесе так, чтобы из десяти <br /> конкурентов рядом выбирали вас — с первого взгляда на карту и в поиске.
                  </p>
                </div> */}
              </div>
              <div className="mt-30 flex ">
                <img className="w-10 lg:w-15" src="Yandex.svg" alt="" />
                <p className="text-4xl text-white ml-5 font-bold lg:text-5xl mt-1"> Бизнес</p>
              </div>
            </div>
            <div className="mt-5 w-90">
              {/* text-[#FF6A3D]  */}
              <p className="text-3xl font-bold text-[#FFFFFF]">Пока ваш профиль молчит, <br /> клиенты  уходят к соседнему <br /> пину на карте</p>
            </div>
            <div className="mt-10  w-105  lg:flex justify-start w-auto font-[Involve]">
              <button className="w-80 active:bg-[#FF6A3D]  text-center h-15  border py-2  text-white rounded-3xl 
              lg:cursor-pointer lg:w-60 mt-5 lg:h-20 lg:text-2xl  lg:hover:bg-[#3D3D3D] lg:hover:text-white
              transition-all duration-500 ease-out lg:hover:scale-105 lg:hover:translate-y-1 lg:hover:shadow-lg ">
                Заказать оформление
              </button>
              <div className="ml-5 mt-5">
                <button className="text-white w-80  active:bg-[#5B1111] h-15 border text-center py-2 rounded-3xl  lg:w-60 lg:h-20 lg:text-2xl  lg:hover:bg-[#3D3D3D] sm:hover:text-white
              transition-all duration-500 ease-out lg:hover:scale-105 lg:hover:translate-y-1 text-[#3D3D3D] lg:hover:shadow-lg ">Подробнее</button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-center font-[Unbounded]">
          <hr className="hidden lg:mt-20 blcok" />
          <div className=" mt-10 lg:flex">
            <hr className="bg-white w-90 mt-2  block lg:hidden" />
            <div className="lg:border-r-2 border-gray-300 px-5">
              <p className="text-[#FFFFFF] text-3xl mt-2">50 млн+</p>
              <p className="text-gray-400">человек открывает Яндекс карты каждый месяц </p>
            </div>
            <hr className="bg-white w-90 mt-2  block lg:hidden" />
            <div className="lg:border-r-2 border-gray-300 px-5">
              <p className="text-[#C8A85E] text-3xl mt-2">11</p>
              <p className="text-gray-400">Пунктов входит в полное оформление профиля</p>
            </div>
            <hr className="bg-white w-90 mt-2 block lg:hidden" />
            <div className="lg:ml-5">
              <p className=" text-[#4DB87A] text-3xl mt-2 ">~30</p>
              <p className="text-gray-400 text-xl">дней - средний срок выполнение работ </p>
            </div>
            <hr className="bg-white w-90 mt-2 block lg:hidden" />
          </div>
        </div>


        {/* <div className="mt-20">
          <p className="text-3xl text-white">Продвигайте компанию <br /> в Яндекс: Картах,</p>
          <p className="text-2xl  py-3 text-[#D14A0B]">Поиске и Навигаторе с  <br />помощью Яндекс Бизнеса</p>
        </div> */}
        {/* <div className="mt-20 ">
          <div className="flex justify-center">
            <p className="text-white text-4xl">Вниз</p>
          </div>
          <div className="flex justify-center mt-5" >
            <button onClick={ScrollHandler} className="cursor-pointer">
              <img src="iconbut.svg" alt="" />
            </button>
          </div>
        </div> */}

      </div>

      <div className="mt-20 ">
        {/* <div className="w-full  ">
          <p className="text-3xl text-white ">Дело не в том, что у вас нет клиентов. Дело в том,  что они видят <p className="text-[#FF6A3D]">соседний пин</p>,а не ваш.</p>
        </div> */}
        <div className=" lg:flex  justify-between w-300 lg:w-full font-[Unbounded] ">
          <div className="mt-5 lg:w-128 mt-20 ">
            <div className="text-gray-400 text-2xl lg:text-3xl">
              <p className=" w-60 text-[#E0E0E0] lg:w-full ">Дело не в том, что у вас нет клиентов. Дело в том, что они видят соседний пин, а не ваш.</p>
            </div>
            <div className="w-70 lg:w-full">
              <p className="text-gray-400 text-2xl lg:text-3xl mt-10">
                <p className="text-[#E84040] font-bold">Без оформленного профиля </p>компания теряется среди конкурентов именно в тот момент, когда клиент уже готов прийти, — он просто выбирает того, чья карточка ответила первой</p>
            </div>
          </div>
          <div className="">
            <div className="mt-20  hidden lg:block px-20 ">
              <div className="w-100  h-100 border rounded-2xl  lg:w-full h-110 px-4 ">
                <div>
                  <p className="text-white text-xl   mt-5 ml-15 "> Кофейня рядом · поиск </p>
                </div>
                <div className="mt-5   w-90 border border-[#4DB87A]  rounded-2xl py-3 h-20 lg:w-120  ">
                  <p className="text-xl ml-2 ">Кофейня Атлас - оформлен профль </p>
                  <p className="text-xl ml-2 text-[#C8A85E]">4.9 230 отзывов </p>
                </div>
                <div className="mt-5  w-90 border border-[#E84040] rounded-2xl py-3 h-20 lg:mt-10 w-120   ">
                  {/* еще картинка будет */}
                  <p className="text-xl ml-2 lg:text-2xl">Ваша компания - без фото  </p>
                  <p className="text-xl ml-2 text-[#E84040]">3 отзыва </p>
                </div>
                <div className=" mt-5  w-90 border border-[#E84040] rounded-2xl py-3 h-20 lg:mt-10 w-120   ">
                  <p className="text-xl ml-2">Кофейня Луна - без описания  </p>
                  <p className="text-xl ml-2 text-[#E84040]">Не отвечает на отзывы  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:m-0 p-0 ">
        <div>
          <div className="w-full h-22 rounded-2xl  border lg:w-100" >
            <div className="flex">
              <img className='w-3 ml-4' src="×.svg" alt="" />
              <p className="text-white ml-6 mt-5">Профиль без фото и описания — мимо проходят, не открывая карточку</p>
            </div>
          </div>
          <div className="w-full h-22   rounded-2xl  border mt-10 lg:w-100" >
            <div className="flex">
              <img className='w-3 ml-4' src="×.svg" alt="" />
              <p className="text-white ml-6 mt-5">Нет ответов на отзывы - доверие ниже , чем у конкурентов рядом </p>
            </div>
          </div>
          <div className="w-full h-22   bg-none  rounded-2xl  border mt-10 lg:w-100" >
            <div className="flex">
              <img className='w-3 ml-4' src="×.svg" alt="" />
              <p className="text-white ml-6 mt-5">Карточка не продвигается - компанию не находят на карте  </p>
            </div>
          </div>
        </div>
      </div>
      {/* блок с демонстрацией  */}
      <div className="mt-20  block lg:hidden">
        <div className="w-full h-100 border rounded-2xl lg:w-120 h-110">
          <div>
            <p className="text-white text-xl mt-5 ml-10">Кофейня рядом · поиск</p>
          </div>
          <div className="mt-5 ml-5 w-90 border rounded-2xl py-3 h-20 lg:ml-15">
            {/* еще картинка будет */}
            <p className="text-xl ml-2">Кофейня Атлас - оформлен профль </p>
            <p className="text-xl ml-2">4.9 230 отзывов </p>
          </div>

          <div className=" mt-10 ml-5 w-90 border rounded-2xl py-3 h-20 lg:ml-15">
            {/* еще картинка будет */}
            <p className="text-xl ml-2">Ваша компания - без фото  </p>
            <p className="text-xl ml-2">3 отзыва </p>
          </div>
          <div className="  mt-10 ml-5 w-90 border rounded-2xl py-3 h-20 lg:ml-15">
            {/* еще картинка будет */}
            <p className="text-xl ml-2">Кофейня Луна - без описания  </p>
            <p className="text-xl ml-2">Не отвечает на отзывы  </p>
          </div>
        </div>
      </div>
      <div >
        <div className="w-70 text-2xl">
          <div>
            <p className=" text-xl mt-5 text-[#4A7FAA] lg:text-3xl mt-5 text-[#4A7FAA]">Решение</p>
          </div>
          <div className="mt-5">
            <p className=" text-xl lg:text-2xl text-[#E0E0E0]">Маршрут клиента к вашей карточке — собираем по пунктам</p>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-2 mt-10 gap-5   " >
        <div className="border w-90 h-50 ">
          <p className="text-xl">01</p>
          <p className="text-xl">
            Геолокация и вход
          </p>
          <p className="text-xl mt-4 px-2">Корректное размещение точки на карте и привязка в оргазинацию</p>
        </div>

        <div className="border w-90 h-50 ">
          <p className="text-xl">02</p>
          <p className="text-xl">
            Шапка профиля
          </p>
          <p className="text-xl mt-4 px-2">Название, категория, график работы, контакты — всё, что видно первым.</p>
        </div> <div className="border w-90 h-50 ">
          <p className="text-xl">03</p>
          <p className="text-xl">
            Оформление профиля
          </p>
          <p className="text-xl mt-4 px-2">Обложка, логотип, карточки товаров — единый визуальный стиль.

          </p>
        </div> <div className="border w-90 h-50 ">
          <p className="text-xl">04</p>
          <p className="text-xl">
            Фотографии по разделам
          </p>
          <p className="text-xl mt-4 px-2">Структурированная фотолента: интерьер, услуги, команда, результаты.</p>
        </div> <div className="border w-90 h-50 ">
          <p className="text-xl">05</p>
          <p className="text-xl">
            Внешние ссылки
          </p>
          <p className="text-xl mt-4 px-2">Сайт, соцсети и мессенджеры — все пути до вас в одном месте.</p>
        </div> <div className="border w-90 h-50 ">
          <p className="text-xl">06</p>
          <p className="text-xl">
            Витрина товаров
          </p>
          <p className="text-xl mt-4 px-2">До 20 позиций товаров или услуг с ценами и описанием.</p>
        </div> <div className="border w-90 h-50 ">
          <p className="text-xl">07</p>
          <p className="text-xl">
            Новости и акции
          </p>
          <p className="text-xl mt-4 px-2">До 5 публикаций — повод вернуться и заметить вас снова.</p>
        </div> <div className="border w-90 h-50 ">
          <p className="text-xl">08</p>
          <p className="text-xl">
            Работа с отзывами
          </p>
          <p className="text-xl mt-4 px-2">Ответы на отзывы и выстраивание репутации профиля.

          </p>
        </div> <div className="border w-90 h-50 ">
          <p className="text-xl">09</p>
          <p className="text-xl">
            QR-код профиля
          </p>
          <p className="text-xl mt-4 px-2">Код со ссылкой на карточку — для вывесок, меню, визиток.

          </p>
        </div> <div className="border w-90 h-50 ">
          <p className="text-xl">10</p>
          <p className="text-xl">
            Лента сторис
          </p>
          <p className="text-xl mt-4 px-2">Короткие визуальные обновления прямо в профиле компании.

          </p>
        </div>
        <div className="border w-90 h-50 ">
          <p className="text-xl">11</p>
          <p className="text-xl">
            SEO-продвижение карточки
          </p>
          <p className="text-xl mt-4 px-2">Работа с ключевыми словами, чтобы карточку находили чаще.

          </p>
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
      <div className=" hidden mt-50 lg:block">
        <Footer />
      </div>
    </div >
  );
}
export default App;