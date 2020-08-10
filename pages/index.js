import React, { useState } from 'react';
import Router from 'next/router';
import { useSpring, animated } from 'react-spring';
import Container from '@material-ui/core/Container';
import Wave from '../components/Wave';
import { useAppState } from '../context/StateContext';
import { Image, Transformation } from 'cloudinary-react';

/* import wave from "../public/wave.png"; */
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Homes() {
  const { areaEnterHandler, areaLeaveHandler } = useAppState();
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 35, friction: 40 },
  }));

  const navigateToNews = () => {
    Router.push('/news');
  };

  return (
    <>
      <div className='centered'>
        <animated.div
          className='card'
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
          onClick={() => alert('Hey')}
        >
          <img
            sizes='(max-width: 1200px) 100vw, 1200px'
            srcSet='
        Brain_qujnhw_c_scale,w_200.png 200w,
        Brain_qujnhw_c_scale,w_299.png 299w,
        Brain_qujnhw_c_scale,w_381.png 381w,
        Brain_qujnhw_c_scale,w_453.png 453w,
        Brain_qujnhw_c_scale,w_519.png 519w,
        Brain_qujnhw_c_scale,w_579.png 579w,
        Brain_qujnhw_c_scale,w_635.png 635w,
        Brain_qujnhw_c_scale,w_689.png 689w,
        Brain_qujnhw_c_scale,w_735.png 735w,
        Brain_qujnhw_c_scale,w_786.png 786w,
        Brain_qujnhw_c_scale,w_834.png 834w,
        Brain_qujnhw_c_scale,w_874.png 874w,
        Brain_qujnhw_c_scale,w_917.png 917w,
        Brain_qujnhw_c_scale,w_959.png 959w,
        Brain_qujnhw_c_scale,w_999.png 999w,
        Brain_qujnhw_c_scale,w_1040.png 1040w,
        Brain_qujnhw_c_scale,w_1075.png 1075w,
        Brain_qujnhw_c_scale,w_1113.png 1113w,
        Brain_qujnhw_c_scale,w_1156.png 1156w,
        Brain_qujnhw_c_scale,w_1200.png 1200w'
            src='Brain_qujnhw_c_scale,w_1200.png'
            alt=''
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
