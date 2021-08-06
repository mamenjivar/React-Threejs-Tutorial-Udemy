import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, extend, useThree, useLoader } from "react-three-fiber";
import { BufferAttribute, ShadowMapType } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import "./Navbar.css";
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
  const ref = useRef();
  // const texture = useLoader();
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    console.log(state);
  });

  const handlePointerDown = e => {
    console.log(e);
  }

  return (
    <mesh ref={ref} {...props} castShadow onPointerDown={handlePointerDown}
    // receiveShadow
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial
        color="blue"
        // opacity={0.7}
        // transparent
        // // wireframe
        metalness={1}
        // roughness={0}
        // clearcoat={1}
        // transmission={0.5}
        // reflectivity={1}
        // // side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

const ReactThreeFiber = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [3, 3, 3] }}
        shadows
      >
        <fog attach="fog" args={["white", 1, 2]} />
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        <Box position={[0, 1, 0]} />
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
};

export default ReactThreeFiber;
