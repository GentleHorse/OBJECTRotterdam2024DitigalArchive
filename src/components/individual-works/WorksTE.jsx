import { useState } from "react";
import { useGLTF, useTexture, Text } from "@react-three/drei";

export default function WorksTE() {
  // Logic of toggling titles of works
  const [isTitle, setIsTitle] = useState(false);

  // Load the mesh
  const ambienceOfLight = useGLTF("./models/works-te/ambienceOfLight.glb");

  // Load the texture
  const bakedTexture = useTexture("./models/works-te/baked-works-te.jpg");
  bakedTexture.flipY = false;

  // Click event handler
  const ambienceOfLightClickHandler = () => {
    console.log("Ambience of Light is clicked");
  };

  // Mouse pointer enter event handler
  const ambienceOfLightMouseEnterHandler = () => {
    setIsTitle(true);
  };

  // Mouse pointer leave event handler
  const ambienceOfLightMouseLeaveHandler = () => {
    setIsTitle(false);
  };

  return (
    <>
      <mesh
        geometry={ambienceOfLight.nodes.ambienceOfLight.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
        onClick={ambienceOfLightClickHandler}
        onPointerEnter={ambienceOfLightMouseEnterHandler}
        onPointerLeave={ambienceOfLightMouseLeaveHandler}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>

      {isTitle && (
        <group position={[15, 8, -20]} rotation={[0, Math.PI, 0]}>
          <Text
            position={[0, 0, 0]}
            fontSize={1.5}
            font="./fonts/cormorant-garamond-v16-latin-300.woff"
            color="snow"
            anchorX="center"
            anchorY="middle"
          >
            Ambience of Light
          </Text>
          <Text
            position={[0, -1.5, 0]}
            fontSize={0.8}
            font="./fonts/cormorant-garamond-v16-latin-300.woff"
            color="snow"
            anchorX="center"
            anchorY="middle"
          >
            designed by Toshihito Endo
          </Text>
        </group>
      )}
    </>
  );
}
