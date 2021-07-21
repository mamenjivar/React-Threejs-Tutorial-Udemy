import "./Navbar.css";
import { Canvas } from "react-three-fiber";

const ReactThreeFiber = () => {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <Canvas>
        <mesh>
          <boxBufferGeometry />
          <meshBasicMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default ReactThreeFiber;
