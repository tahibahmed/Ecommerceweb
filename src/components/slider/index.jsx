import React from "react";
import style from "./style.module.css";
import { useState, useRef, useEffect } from "react";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";

const Slider = () => {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);

  // Refs
  const contentRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const nameRef = useRef("");

  const sliderContent = [
    {
      img: img1,
      name: "Wanda Maximoff",
    },
    {
      img: img2,
      name: "The Hulk",
    },
    {
      img: img3,
      name: "Iron Man",
    },
    {
      img: img4,
      name: "Black Panther",
    },
  ];

  let local;
  const Slide = (type) => {
    if (type === "next") {
      local = active + 1;
      sliderContent.length - 1 < local ? setActive(0) : setActive(local);
    }
    if (type === "prev") {
      local = active - 1;
      local < 0 ? setActive(sliderContent.length - 1) : setActive(local);
    }
    setPrev(active);
  };

  useEffect(() => {
    contentRef.current.style.bottom = "-100%";
    prevRef.current.style.left = "-10%";
    nextRef.current.style.right = "-10%";
    setTimeout(() => {
      nameRef.current.innerText = sliderContent[active].name;
      contentRef.current.style.bottom = "0%";
      prevRef.current.style.left = "0%";
      nextRef.current.style.right = "0%";
    }, 1000);

    setTimeout(() => {
        local = active + 1;
        sliderContent.length - 1 < local ? setActive(0) : setActive(local); 
    }, 5000);
  }, [active]);

  return (
    <div className={style.main}>
      <div className="relative shadow-lg overflow-hidden">
        <div className="h-[500px] relative">
          {sliderContent.map((slide, i) => {
            return (
              <img
                src={slide.img}
                key={i}
                alt="slideImg"
                className={`h-full w-full absolute object-cover inset-0 duration-[2.5s] ease-out transition-[clip-path] ${
                  i === active
                    ? `${style.clip_visible} `
                    : `${style.clip_hidden}`
                }`}
              />
            );
          })}
          <img
            src={sliderContent[prev].img}
            alt="previmg"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <button id={style.back} ref={prevRef} onClick={() => Slide("prev")}>
            <IoIosArrowBack size={30} className="outline-none" />
          </button>
          <button
            id={style.forward}
            ref={nextRef}
            className="right-0"
            onClick={() => Slide("next")}
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>
        <div className={style.content} ref={contentRef}>
          <h1 className={style.h1} ref={nameRef}>
            {sliderContent[0].name}
          </h1>
          <p className={style.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            porro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
