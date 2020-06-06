import React, { useState } from "react";
import Router from "next/router";
import { useSpring, animated } from "react-spring";
import Container from "@material-ui/core/Container";
import ImageMapper from "react-image-mapper";
import { CenterArea, UeberUnsArea } from "../MapAreas/CenterArea";
import Wave from "../components/Wave";
import { useAppState } from "../context/StateContext";

/* import wave from "../public/wave.png"; */
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Homes() {
  const { areaEnterHandler, areaLeaveHandler } = useAppState();
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 35, friction: 40 }
  }));

  const navigateToNews = () => {
    Router.push("/news");
  };

  return (
    <>
      <div className="centered">
        <animated.div
          className="card"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <ImageMapper
            src="Brain.png"
            map={CenterArea}
            lineWidth="0"
            strokeColor="transparent"
            onClick={navigateToNews}
            onMouseEnter={areaEnterHandler}
            onMouseLeave={areaLeaveHandler}
          />
        </animated.div>
      </div>
      <style jsx>
        {`
          .centered {
            position: fixed;
            top: 50%;
            left: 50%;
            /* bring your own prefixes */
            transform: translate(-50%, -50%);
          }
        `}
      </style>

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </>
  );
}
