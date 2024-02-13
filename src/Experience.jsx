import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import HakaBuilding from "./components/haka-building/HakaBuilding.jsx";
import WorksTE from "./components/individual-works/WorksTE.jsx";
import WorksSM from "./components/individual-works/WorksSM.jsx";
import WorksJB from "./components/individual-works/WorksJB.jsx";
import Banners from "./components/banners/Banners.jsx";
import Placeholder from "./components/utils/PlaceHolder.jsx";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      {/* <axesHelper args={[30]} /> */}

      <directionalLight position={[4, 4, 1]} intensity={4.5} />
      <ambientLight intensity={0.5} />

      <Environment background preset="night" />

      <group scale={1} position={[0, -5, 0]}>
        <HakaBuilding />

        <Suspense
          fallback={
            <group position={[15, 8, -20]}>
              <Placeholder position={[-0.8, -2.5, -2]} scale={9.5} />
              <Placeholder position={[8.8, 4, 2.25]} scale={[2, 4, 2]} />
            </group>
          }
        >
          <WorksTE />
        </Suspense>

        <Suspense
          fallback={
            <group position={[15, 5, 8]}>
              <Placeholder position={[-12, -1, -6]} scale={[12, 7, 12]} />
              <Placeholder position={[9, -2, 8]} scale={[8, 5, 8]} />
              <Placeholder
                position={[5.5, -2.7, -4.5]}
                rotation-y={-Math.PI * 0.22}
                scale={[2, 4, 3]}
              />
              <Placeholder
                position={[-3.7, -2, 7]}
                rotation-y={Math.PI * 0.1}
                scale={[3.5, 5, 5.5]}
              />
              <Placeholder position={[18, 10, -5]} scale={12} />
            </group>
          }
        >
          <WorksSM />
        </Suspense>

        <Suspense
          fallback={
            <group position={[-12.5, 12.5, 0]}>
              <Placeholder position={[-1.5, 0, -27]} scale={[18, 25, 2]} />
              <Placeholder position={[-14, 1, 0]} scale={[2, 22, 50]} />
              <Placeholder position={[5, 1, 22]} scale={[2, 8, 20]} />
            </group>
          }
        >
          <WorksJB />
        </Suspense>

        <Banners />
      </group>
    </>
  );
}
