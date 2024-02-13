import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

import Experience from "./Experience.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
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
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
    <Loader
      dataInterpolation={(p) => `Loading digital archive ${p.toFixed(2)}%`}
    />
    <Footer />
  </>
);
