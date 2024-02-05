import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particlesConfig";

function PraticlesBg() {
    async function loadParitlces(main) {
        await loadFull(main)
    }

    return (
        <Particles
            id="tsparticles"
            init={loadParitlces}
            options={particlesConfig}
        />
    )
}

export default PraticlesBg;
