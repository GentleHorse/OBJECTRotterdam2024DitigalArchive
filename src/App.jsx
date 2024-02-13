import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Experience from "./Experience.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import LoadingScreen from "./components/utils/LoadingScreen.jsx";

function App() {
  return (
    <>
      <Header />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 300,
          position: [-10, 25, -70],
        }}
      >
        <Suspense fallback={<LoadingScreen />}>
          <Experience />
        </Suspense>
      </Canvas>
      <Footer />
    </>
  );
}

export default App;
