import { useState, useEffect, Suspense } from "react";
import { useGLTF, Text } from "@react-three/drei";
import Placeholder from "../../components/utils/PlaceHolder.jsx";

export default function WorksTE({
  bakedTexture,
  onClickAmbienceOfLight,
  onClickBackAmbienceOfLight,
  isFocusedAmbienceOfLight,
}) {
  // Change mouse pointer
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  // Logic of toggling works title
  const [isTitle, setIsTitle] = useState(false);

  // Load the mesh
  const worksTE = useGLTF("./models/works-banners/worksTE.glb");

  // Mouse pointer enter event handler
  const ambienceOfLightMouseEnterHandler = () => {
    setIsTitle(true);
  };
  const finishFocusedMouseEnterHandler = () => {
    setHovered(true);
  };

  // Mouse pointer leave event handler
  const ambienceOfLightMouseLeaveHandler = () => {
    setIsTitle(false);
  };
  const finishFocusedMouseLeaveHandler = () => {
    setHovered(false);
  };

  // Works texts
  const ambientOfLightText = (
    <>
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
    </>
  );
  const ambientOfLightCloseIcon = (
    <group position={[0, 2, 0]}>
      <Text
        fontSize={0.6}
        maxWidth={2.7}
        font="./fonts/cormorant-garamond-v16-latin-300.woff"
        color="snow"
        anchorX="center"
        anchorY="middle"
      >
        X
      </Text>
      <mesh
        scale={[1.2, 1.2, 1]}
        onClick={onClickBackAmbienceOfLight}
        onPointerEnter={finishFocusedMouseEnterHandler}
        onPointerLeave={finishFocusedMouseLeaveHandler}
      >
        <planeGeometry />
        <meshBasicMaterial color="#656765" />
      </mesh>
    </group>
  );

  return (
    <>
      <Suspense
        fallback={
          <group position={[15, 8, -20]}>
            <Placeholder position={[-0.8, -2.5, -2]} scale={9.5} />
            <Placeholder position={[8.8, 4, 2.25]} scale={[2, 4, 2]} />
          </group>
        }
      >
        <mesh
          geometry={worksTE.nodes.ambienceOfLightRe.geometry}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          onClick={onClickAmbienceOfLight}
          onPointerEnter={ambienceOfLightMouseEnterHandler}
          onPointerLeave={ambienceOfLightMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {isTitle && !isFocusedAmbienceOfLight && (
          <group position={[15, 8, -20]} rotation={[0, Math.PI, 0]}>
            {ambientOfLightText}
          </group>
        )}

        {isFocusedAmbienceOfLight && (
          <group position={[15, 8, -20]} rotation={[0, Math.PI, 0]}>
            {ambientOfLightText}
            {ambientOfLightCloseIcon}
          </group>
        )}
      </Suspense>
    </>
  );
}
