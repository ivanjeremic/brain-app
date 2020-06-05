import React, { useState } from "react";
import Router from "next/router";
import Head from "next/head";
import ImageMapper from "react-image-mapper";
import Particles from "react-particles-js";
import AppBarTop from "../components/AppBar";
import { CenterArea } from "../components/MapAreas/CenterArea";

/* import wave from "../public/wave.png"; */

export default function Home() {
  const [topTitle, setTopTitle] = useState("Willkommen");

  const navigateToNews = () => {
    Router.push("/news");
  };

  const areaEnterHandler = () => {
    setTopTitle("Hure");
  };
  const areaLeaveHandler = () => {
    setTopTitle("Willkommen");
  };

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js" />
      </Head>

      <main>
        <section>
          <AppBarTop topTitle={topTitle} />
          <Particles
            height="100vh"
            width="100vw"
            params={{
              particles: {
                number: {
                  value: 180
                },
                size: {
                  value: 4
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              }
            }}
          />
          <div className="centered">
            <ImageMapper
              src="Brain.png"
              map={CenterArea}
              lineWidth="0"
              strokeColor="transparent"
              onClick={navigateToNews}
              onMouseEnter={areaEnterHandler}
              onMouseLeave={areaLeaveHandler}
            />
          </div>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </section>
      </main>

      <style jsx>
        {`
          .centered {
            width: 60%;
            position: fixed;
            top: 50%;
            left: 50%;
            /* bring your own prefixes */
            transform: translate(-50%, -50%);
          }
          section {
            position: relative;
            width: 100%;
            height: 100vh;
            background: #1c1c7e;
            overflow: hidden;
          }
          section .wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100px;
            background: url(wave.png);
            background-size: 1000px 100px;
          }
          section .wave.wave1 {
            animation: animate 30s linear infinite;
            z-index: 1000px;
            opacity: 1;
            animation-delay: 0s;
            bottom: 0;
          }
          section .wave.wave2 {
            animation: animate2 15s linear infinite;
            z-index: 999px;
            opacity: 0.5;
            animation-delay: -5s;
            bottom: 10px;
          }
          section .wave.wave3 {
            animation: animate 30s linear infinite;
            z-index: 998px;
            opacity: 0.2;
            animation-delay: -5s;
            bottom: 10px;
          }
          section .wave.wave4 {
            animation: animate2 2s linear infinite;
            z-index: 997px;
            opacity: 0.7;
            animation-delay: -5s;
            bottom: 20px;
          }
          @keyframes animate {
            0% {
              background-position-x: 0;
            }
            100% {
              background-position-x: 1000px;
            }
          }
          @keyframes animate2 {
            0% {
              background-position-x: 0;
            }
            100% {
              background-position-x: -1000px;
            }
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
    </div>
  );
}
