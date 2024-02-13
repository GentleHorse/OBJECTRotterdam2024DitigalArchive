import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function HakaBuilding() {
  // Load the whole mesh
  const hakaBuilding = useGLTF("./models/haka-building/hakaBuilding.glb");

  // Load the building texture
  const bakedHakaBuildingTexture = useTexture(
    "./models/haka-building/baked-building.jpg"
  );
  bakedHakaBuildingTexture.flipY = false;

  // Load the building columns texture
  const bakedHakaBuildingColumnsTexture = useTexture(
    "./models/haka-building/baked-building-columns.jpg"
  );
  bakedHakaBuildingColumnsTexture.flipY = false;

  // Load the building floor texture
  const bakedHakaBuildingFloorTexture = useTexture(
    "./models/haka-building/baked-building-floor.jpg"
  );
  bakedHakaBuildingFloorTexture.flipY = false;

  // Load the spotlight texture
  const bakedHakaBuildingSpotlightTexture = useTexture(
    "./models/haka-building/baked-building-spotlight.jpg"
  );
  bakedHakaBuildingSpotlightTexture.flipY = false;

  // Load the work support JB texture
  const bakedHakaBuildingWorkSupportJBTexture = useTexture(
    "./models/haka-building/baked-building-work-support-JB.jpg"
  );
  bakedHakaBuildingWorkSupportJBTexture.flipY = false;

  // Load the work support TE texture
  const bakedHakaBuildingWorkSupportTETexture = useTexture(
    "./models/haka-building/baked-building-work-support-TE.jpg"
  );
  bakedHakaBuildingWorkSupportTETexture.flipY = false;

  return (
    <>
      <mesh
        geometry={hakaBuilding.nodes.building.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        <meshBasicMaterial map={bakedHakaBuildingTexture} />
      </mesh>

      <mesh
        geometry={hakaBuilding.nodes.columns.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        <meshBasicMaterial map={bakedHakaBuildingColumnsTexture} />
      </mesh>

      <mesh
        geometry={hakaBuilding.nodes.floor.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        <meshBasicMaterial map={bakedHakaBuildingFloorTexture} />
      </mesh>

      <mesh
        geometry={hakaBuilding.nodes.spotlights.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        <meshBasicMaterial
          map={bakedHakaBuildingSpotlightTexture}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh
        geometry={hakaBuilding.nodes.workSupportJB.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        <meshBasicMaterial map={bakedHakaBuildingWorkSupportJBTexture} />
      </mesh>

      <mesh
        geometry={hakaBuilding.nodes.workSupportTE.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        <meshBasicMaterial map={bakedHakaBuildingWorkSupportTETexture} />
      </mesh>
    </>
  );
}
