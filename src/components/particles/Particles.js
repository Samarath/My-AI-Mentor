import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import classes from "./particles.module.scss";

const ParticlesCompo = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Initialize the tsparticles engine with full features
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: "#fff",
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#FF0000",
          animation: {
            enable: true,
            speed: 10,
          },
        },
        effect: {
          type: "trail",
          options: {
            trail: {
              length: 50,
              minWidth: 4,
            },
          },
        },
        shape: {
          type: "circle", // Circle shape for particles
        },
        size: {
          value: 2,
        },
        opacity: {
          value: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "destroy",
          },
          path: {
            clamp: false,
            enable: true,
            delay: {
              value: 0,
            },
            generator: "polygonPathGenerator",
            options: {
              sides: 6,
              turnSteps: 30,
              angle: 60,
            },
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          value: 0,
        },
        links: {
          enable: true,
          color: "#FF0000",
          distance: 150,
          opacity: 0.5,
          width: 1,
        },
        // shape: {
        //   type: "circle", // Circular shape for particles
        // },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      emitters: {
        direction: "none",
        rate: {
          quantity: 1,
          delay: 0.25,
        },
        size: {
          width: 0,
          height: 0,
        },
        position: {
          x: 50,
          y: 50,
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Particles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Ensure particles stay behind other content
        }}
        className={classes["particles"]}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};

export default ParticlesCompo;
