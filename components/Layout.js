import React from 'react';
import Head from 'next/head';
import Particles from 'react-particles-js';
import AppBarTop from './AppBar';
import Wave from './Wave';

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Head>
        <title>HirnKunst</title>
        <link rel='icon' href='/favicon.ico' />
        <script src='https://cdn.rawgit.com/progers/pathseg/master/pathseg.js' />
      </Head>
      <main>
        <section>
          <AppBarTop />
          {/* <Particles
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
          /> */}
          {children}
          <Wave />
        </section>
      </main>
      <style jsx>{`
        main {
          position: relative;
          width: 100%;
          height: 100vh;
          background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.1) 1px,
                transparent 1px
              )
              0% 0% / 40px 40px,
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) #1c1c7e;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
