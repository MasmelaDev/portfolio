const DarkParticlesConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1200,
      },
    },
    color: {
      value: "#10B981",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#10B981",
      },
      polygon: {
        nb_sides: 8,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        size_min: 0,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#10B981",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 10,
        duration: 2,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 150,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
 
};
const LightParticlesConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1200,
      },
    },
    color: {
      value: "#ED2811",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#ED2811",
      },
      polygon: {
        nb_sides: 8,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        size_min: 0,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#ED2811",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 10,
        duration: 2,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 150,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
 
};
export { LightParticlesConfig, DarkParticlesConfig };
