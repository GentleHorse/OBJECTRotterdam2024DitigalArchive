import { OrbitControls, Environment } from "@react-three/drei";
import HakaBuilding from "./components/haka-building/HakaBuilding.jsx";
import WorksTE from "./components/individual-works/WorksTE.jsx";
import WorksSM from "./components/individual-works/WorksSM.jsx";
import WorksJB from "./components/individual-works/WorksJB.jsx";
import Marina from "./components/marina/Marina.jsx";
import Banners from "./components/banners/Banners.jsx";

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

        <WorksTE />

        <WorksSM />

        <WorksJB />

        {/* <Marina /> */}

        <Banners />
      </group>
    </>
  );
}
