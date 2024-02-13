import { useState } from "react";
import { useGLTF, useTexture, Text } from "@react-three/drei";

export default function WorksSM() {
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
          if(newIsTitle[selector] === false){
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
  const worksSM = useGLTF("./models/works-sm/worksSM.glb");

  // Load the texture
  const bakedTexture = useTexture("./models/works-sm/baked-works-sm.jpg");
  bakedTexture.flipY = false;

  // Click event handlers
  const inflatableLeatherClickHandler = () => {
    console.log("Inflatable Leathers are clicked");
  };
  const edgeStoolsClickHandler = () => {
    console.log("Edge stools are clicked");
  };
  const wallObjectsClickHandler = () => {
    console.log("Wall objects are clicked");
  };

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
      <mesh
        geometry={worksSM.nodes.inflatableLeather.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
        onClick={inflatableLeatherClickHandler}
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
        geometry={worksSM.nodes.edgeStools.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
        onClick={edgeStoolsClickHandler}
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
        geometry={worksSM.nodes.wallObjects.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
        onClick={wallObjectsClickHandler}
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
    </>
  );
}
