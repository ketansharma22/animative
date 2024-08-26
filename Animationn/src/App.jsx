import "./App.css";
import Start from "./screens/Start";
import About from "./screens/About";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Move from "./components/Move";
function App() {
  
  return (
    <>
     
      <Canvas id="group" flat camera={{ fov: 29 }}>
        <OrbitControls enableZoom={false} />
        <ambientLight />
        <Start />
        <EffectComposer>
          <Bloom
            minmapBlur
            intensity={0.5}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
        </EffectComposer>
      </Canvas>
       <Move />
       <About/>
    </>
  );
}

export default App;
