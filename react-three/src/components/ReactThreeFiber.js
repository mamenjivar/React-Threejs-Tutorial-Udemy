import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Orbit from "./Orbit";
import Box from "./Box";
import Floor from "./Floor";
import Bulb from "./Bulb";
import ColorPicker from "./ColorPicker";
import Draggable from "./Draggable";

const ReactThreeFiber = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
        shadows
      >
        {/* <fog attach="fog" args={["white", 1, 2]} /> */}
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        {/* <Orbit/> */}
        <axesHelper args={[5]} />
        <Draggable>
          <Suspense fallback={null}>
            <Box position={[-4, 1, 0]} />
          </Suspense>
          <Suspense fallback={null}>
            <Box position={[4, 1, 0]} />
          </Suspense>
        </Draggable>
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
};

export default ReactThreeFiber;
