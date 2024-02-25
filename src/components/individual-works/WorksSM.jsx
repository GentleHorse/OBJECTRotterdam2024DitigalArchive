import { useState, Suspense, useRef } from "react";
import { useGLTF, Text, CameraControls } from "@react-three/drei";
import Placeholder from "../../components/utils/PlaceHolder.jsx";

export default function WorksSM({ bakedTexture }) {
  const cameraControlsRef = useRef();


  // Logic of toggling titles of works
  const [isTitle, setIsTitle] = useState({
    inflatableLeather: false,
    edgeStools: false,
    wallObjects: false,
  });

  const titleToggleHandler = (selector) => {
    setIsTitle((prevIsTitle) => {
      const newIsTitle = { ...prevIsTitle };

      for (const title in newIsTitle) {
        if (title === selector) {
          if (newIsTitle[selector] === false) {
            newIsTitle[selector] = true;
          } else {
            newIsTitle[selector] = false;
          }
        }
      }

      return newIsTitle;
    });
  };

  // Load the mesh
  const worksSM = useGLTF("./models/works-banners/worksSM.glb");

  // Mouse pointer enter event handlers
  const inflatableLeatherMouseEnterHandler = () => {
    titleToggleHandler("inflatableLeather");
  };
  const edgeStoolsMouseEnterHandler = () => {
    titleToggleHandler("edgeStools");
  };
  const wallObjectsMouseEnterHandler = () => {
    titleToggleHandler("wallObjects");
  };

  // Mouse pointer leave event handlers
  const inflatableLeatherMouseLeaveHandler = () => {
    titleToggleHandler("inflatableLeather");
  };
  const edgeStoolsMouseLeaveHandler = () => {
    titleToggleHandler("edgeStools");
  };
  const wallObjectsMouseLeaveHandler = () => {
    titleToggleHandler("wallObjects");
  };

  return (
    <>
      <CameraControls ref={cameraControlsRef} makeDefault />

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
        <mesh
          geometry={worksSM.nodes.inflatableLeatherRe.geometry}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          onPointerEnter={inflatableLeatherMouseEnterHandler}
          onPointerLeave={inflatableLeatherMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {isTitle.inflatableLeather && (
          <group position={[15, 12, 8]}>
            <Text
              position={[0, 0, 0]}
              fontSize={1.5}
              font="./fonts/cormorant-garamond-v16-latin-300.woff"
              color="snow"
              anchorX="center"
              anchorY="middle"
            >
              Inflatable Leather
            </Text>
            <Text
              position={[0, -1.5, 0]}
              fontSize={0.8}
              font="./fonts/cormorant-garamond-v16-latin-300.woff"
              color="snow"
              anchorX="center"
              anchorY="middle"
            >
              designed by Satomi Minoshima
            </Text>
          </group>
        )}

        <mesh
          geometry={worksSM.nodes.edgeStoolsRe.geometry}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          onPointerEnter={edgeStoolsMouseEnterHandler}
          onPointerLeave={edgeStoolsMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {isTitle.edgeStools && (
          <group position={[15, 9, 8]}>
            <Text
              position={[0, 0, 0]}
              fontSize={1.5}
              font="./fonts/cormorant-garamond-v16-latin-300.woff"
              color="snow"
              anchorX="center"
              anchorY="middle"
            >
              Edge Stools
            </Text>
            <Text
              position={[0, -1.5, 0]}
              fontSize={0.8}
              font="./fonts/cormorant-garamond-v16-latin-300.woff"
              color="snow"
              anchorX="center"
              anchorY="middle"
            >
              designed by Satomi Minoshima
            </Text>
          </group>
        )}

        <mesh
          geometry={worksSM.nodes.wallObjectsRe.geometry}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          onPointerEnter={wallObjectsMouseEnterHandler}
          onPointerLeave={wallObjectsMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {isTitle.wallObjects && (
          <group position={[32, 20, 10]}>
            <Text
              position={[0, 0, 0]}
              fontSize={1.5}
              font="./fonts/cormorant-garamond-v16-latin-300.woff"
              color="snow"
              anchorX="center"
              anchorY="middle"
            >
              Wall Objects
            </Text>
            <Text
              position={[0, -1.5, 0]}
              fontSize={0.8}
              font="./fonts/cormorant-garamond-v16-latin-300.woff"
              color="snow"
              anchorX="center"
              anchorY="middle"
            >
              designed by Satomi Minoshima
            </Text>
          </group>
        )}
      </Suspense>
    </>
  );
}

