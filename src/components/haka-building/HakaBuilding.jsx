import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function HakaBuilding() {
  // Load the whole mesh
  const hakaBuilding = useGLTF("./models/haka-building/hakaBuilding.glb");

  // Load the building texture
  const bakedHakaBuildingTexture = useTexture(
    "./models/haka-building/baked-haka-building.jpg"
  );
  bakedHakaBuildingTexture.flipY = false;

  // // Load the building columns texture
  // const bakedHakaBuildingColumnsTexture = useTexture(
  //   "./models/haka-building/baked-building-columns.jpg"
  // );
  // bakedHakaBuildingColumnsTexture.flipY = false;

  // // Load the building floor texture
  // const bakedHakaBuildingFloorTexture = useTexture(
  //   "./models/haka-building/baked-building-floor.jpg"
  // );
  // bakedHakaBuildingFloorTexture.flipY = false;

  // // Load the spotlight texture
  // const bakedHakaBuildingSpotlightTexture = useTexture(
  //   "./models/haka-building/baked-building-spotlight.jpg"
  // );
  // bakedHakaBuildingSpotlightTexture.flipY = false;

  // // Load the work support JB texture
  // const bakedHakaBuildingWorkSupportJBTexture = useTexture(
  //   "./models/haka-building/baked-building-work-support-JB.jpg"
  // );
  // bakedHakaBuildingWorkSupportJBTexture.flipY = false;

  // // Load the work support TE texture
  // const bakedHakaBuildingWorkSupportTETexture = useTexture(
  //   "./models/haka-building/baked-building-work-support-TE.jpg"
  // );
  // bakedHakaBuildingWorkSupportTETexture.flipY = false;

  return (
    <>
      <mesh
        geometry={hakaBuilding.nodes.buildingRe.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        <meshBasicMaterial map={bakedHakaBuildingTexture} />
      </mesh>

      <mesh
        geometry={hakaBuilding.nodes.columnsRe.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        <meshBasicMaterial map={bakedHakaBuildingTexture} />
      </mesh>

      <mesh
        geometry={hakaBuilding.nodes.floorRe.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        <meshBasicMaterial map={bakedHakaBuildingTexture} />
      </mesh>

      <mesh
        geometry={hakaBuilding.nodes.spotlightsRe.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        <meshBasicMaterial
          map={bakedHakaBuildingTexture}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh
        geometry={hakaBuilding.nodes.workSupportJBRe.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        <meshBasicMaterial map={bakedHakaBuildingTexture} />
      </mesh>

      <mesh
        geometry={hakaBuilding.nodes.workSupportTERe.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        <meshBasicMaterial map={bakedHakaBuildingTexture} />
      </mesh>
    </>
  );
}
