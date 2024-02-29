import { Environment } from "@react-three/drei";
import HakaBuilding from "./components/haka-building/HakaBuilding.jsx";
import WorksBanners from "./components/works-banners/WorksBanners.jsx";
import { Perf } from "r3f-perf";

export default function Experience() {
  return (
    <>
      {/* <axesHelper args={[30]} /> */}

      {/* <Perf position="top-left" /> */}

      <directionalLight position={[4, 4, 1]} intensity={4.5} />
      <ambientLight intensity={0.5} />

      <Environment background preset="night" />

      <group scale={1} position={[0, -5, 0]}>
        <HakaBuilding />
        <WorksBanners />
      </group>
    </>
  );
}
