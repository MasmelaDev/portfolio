import { useCallback, useContext } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { LightParticlesConfig, DarkParticlesConfig } from "../config/particles-config";
import { DarkModeContext } from "../contexts/DarkModeContext";

function ParticlesBackground() {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  const { isDarkMode } = useContext(DarkModeContext);

  return (
    
      <Particles className="" init={particlesInit} options={isDarkMode ? DarkParticlesConfig : LightParticlesConfig} />

  );
}

export { ParticlesBackground };
