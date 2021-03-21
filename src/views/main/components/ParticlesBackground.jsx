import React from 'react';
import Particles from 'react-tsparticles';
import { Code } from '@styled-icons/fa-solid';
import useWindowDimensionsInitial from 'utils/useWindowDimensionInitial';
import useFullTheme from 'context/ThemeWrapper/useFullTheme';

function ParticlesBackground() {
  const { width, height } = useWindowDimensionsInitial();
  const t = useFullTheme();
  return (
    <Particles
      id="tsparticles"
      // init={this.particlesInit}
      // loaded={this.particlesLoaded}
      width={width - 250}
      height="100vh"
      options={{
        fps_limit: 60,
        background: {
          color: t.main,
          opacity: 1,
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onclick: { enable: true, mode: 'repulse' },
            onhover: {
              enable: true,
              mode: 'attract',
              parallax: { enable: false, force: 60, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
              speed: 3,
            },
            grab: { distance: 400, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
            repulse: { distance: 200, duration: 0.4, speed: 2 },
          },
        },
        particles: {
          color: {
            value: [
              t.palette.primary.light,
              t.palette.primary.dark,
              t.palette.secondary.light,
              t.palette.secondary.dark,
              t.palette.grey['400'],
            ],
          },
          line_linked: {
            color: t.palette.text.primary,
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 3,
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: 'none',
            enable: true,
            out_mode: 'out',
            random: false,
            speed: 5,
            straight: false,
          },
          number: { density: { enable: true, value_area: 1000 }, value: 35 },
          opacity: {
            anim: { enable: true, opacity_min: 0.5, speed: 1, sync: false },
            random: false,
            value: 1,
          },
          shape: {
            character: [
              {
                fill: true,
                font: 'Font Awesome 5 Brands',
                style: '',
                value: [
                  '\uf13b', //HTML5
                  '\uf38b', //css
                  '\uf3d3', //Node
                  // '\uf1cb',//Codepen
                ],
                weight: '400',
              },
              {
                fill: true,
                font: 'Font Awesome 5 Brands',
                style: '',
                value: [
                  '\uf3e2', //Python
                  '\uf3b9', //JS
                  '\uf3d3', //Node
                ],
                weight: '600',
              },
              {
                fill: true,
                font: 'Font Awesome 5 Brands',
                style: '',
                value: [
                  '\uf1d3', //git
                  // '\uf3b9', //JS
                  // '\uf3d3', //Node
                ],
                weight: '600',
              },
              // {
              //   fill: true,
              //   font: 'Font Awesome 5 Free',
              //   style: '',
              //   // value: ['\uf06a', '\uf7ba', '\uf3ed', '\uf55f', '\uf013'],
              //   weight: '900',
              // },
            ],
            // image: {
            //   height: 100,
            //   replace_color: true,
            //   src: 'images/github.svg',
            //   width: 100,
            // },
            // polygon: { nb_sides: 5 },
            // stroke: { color: '#23f322', width: 1 },
            type: 'char',
          },
          size: {
            anim: { enable: true, size_min: 10, speed: 10, sync: false },
            random: false,
            value: 24,
          },
        },
        // polygon: {
        //   draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
        //   move: { radius: 10 },
        //   scale: 1,
        //   type: 'none',
        //   url: '',
        // },
        retina_detect: true,
      }}
    />
  );
}

export default ParticlesBackground;
