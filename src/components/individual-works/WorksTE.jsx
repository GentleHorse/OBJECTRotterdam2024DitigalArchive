import { useState, Suspense, useRef } from "react";
import { useGLTF, Text, CameraControls } from "@react-three/drei";
import Placeholder from "../../components/utils/PlaceHolder.jsx";

import CustomCamera from "../utils/CustomCamera.jsx";

export default function WorksTE({ bakedTexture }) {
  const cameraControlsRef = useRef();

  const cameraFocusArrayObject = {
    zoomInCameraPosition: [14.7, 4.0, -45.7],
    zoomInCameraTarget: [15.68, -1.88, -13.09],
  };

  // Logic of toggling works title
  const [isTitle, setIsTitle] = useState(false);

  // Load the mesh
  const worksTE = useGLTF("./models/works-banners/worksTE.glb");

  // Mouse click event handler
  const clickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.zoomInCameraPosition[0],
      cameraFocusArrayObject.zoomInCameraPosition[1],
      cameraFocusArrayObject.zoomInCameraPosition[2],
      cameraFocusArrayObject.zoomInCameraTarget[0],
      cameraFocusArrayObject.zoomInCameraTarget[1],
      cameraFocusArrayObject.zoomInCameraTarget[2],
      true
    );
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
      <CameraControls ref={cameraControlsRef} makeDefault />

      {/* <CustomCamera /> */}

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
          onClick={clickHandler}
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
      </Suspense>
    </>
  );
}
