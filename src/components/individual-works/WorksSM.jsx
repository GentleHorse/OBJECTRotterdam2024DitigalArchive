import { useState, useEffect, Suspense } from "react";
import { useGLTF, Text } from "@react-three/drei";
import Placeholder from "../../components/utils/PlaceHolder.jsx";

export default function WorksSM({
  bakedTexture,
  onClickInflatableLeather,
  onClickBackInflatableLeather,
  isFocusedInflatableLeather,
  onClickEdgeStools,
  onClickBackEdgeStools,
  isFocusedEdgeStools,
  onClickWallObjects,
  onClickBackWallObjects,
  isFocusedWallObjects,
}) {
  // Change mouse pointer
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

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
  const finishFocusedMouseEnterHandler = () => {
    setHovered(true);
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
  const finishFocusedMouseLeaveHandler = () => {
    setHovered(false);
  };

  // Works texts
  const inflatableLeatherText = (
    <>
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
    </>
  );
  const inflatableLeatherCloseIcon = (
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
        onClick={(e) => (onClickBackInflatableLeather(), e.stopPropagation())}
        onPointerEnter={finishFocusedMouseEnterHandler}
        onPointerLeave={finishFocusedMouseLeaveHandler}
      >
        <planeGeometry />
        <meshBasicMaterial color="#656765" />
      </mesh>
    </group>
  );

  const edgeStoolsText = (
    <>
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
    </>
  );

  const edgeStoolsCloseIcon = (
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
        onClick={(e) => (onClickBackEdgeStools(), e.stopPropagation())}
        onPointerEnter={finishFocusedMouseEnterHandler}
        onPointerLeave={finishFocusedMouseLeaveHandler}
      >
        <planeGeometry />
        <meshBasicMaterial color="#656765" />
      </mesh>
    </group>
  );

  const wallObjectsText = (
    <>
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
    </>
  );

  const wallObjectsCloseIcon = (
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
        onClick={(e) => (onClickBackWallObjects(), e.stopPropagation())}
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
          onClick={(e) => (onClickInflatableLeather(), e.stopPropagation())}
          onPointerEnter={inflatableLeatherMouseEnterHandler}
          onPointerLeave={inflatableLeatherMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {isTitle.inflatableLeather && !isFocusedInflatableLeather && (
          <group position={[9, 12, 0]} rotation={[0, -Math.PI * 0.95, 0]}>
            {inflatableLeatherText}
          </group>
        )}

        {isFocusedInflatableLeather && (
          <group position={[9, 12, 0]} rotation={[0, -Math.PI * 0.95, 0]}>
            {inflatableLeatherText}
            {inflatableLeatherCloseIcon}
          </group>
        )}

        <mesh
          geometry={worksSM.nodes.edgeStoolsRe.geometry}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          onClick={(e) => (onClickEdgeStools(), e.stopPropagation())}
          onPointerEnter={edgeStoolsMouseEnterHandler}
          onPointerLeave={edgeStoolsMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {isTitle.edgeStools && !isFocusedEdgeStools && (
          <group position={[17, 8, 8]}>{edgeStoolsText}</group>
        )}

        {isFocusedEdgeStools && (
          <group position={[18, 8, 8]}>
            {edgeStoolsText}
            {edgeStoolsCloseIcon}
          </group>
        )}

        <mesh
          geometry={worksSM.nodes.wallObjectsRe.geometry}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          onClick={(e) => (onClickWallObjects(), e.stopPropagation())}
          onPointerEnter={wallObjectsMouseEnterHandler}
          onPointerLeave={wallObjectsMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {isTitle.wallObjects && !isFocusedWallObjects && (
          <group position={[27, 11, -10]} rotation={[0, -Math.PI * 0.25, 0]}>
            {wallObjectsText}
          </group>
        )}

        {isFocusedWallObjects && (
          <group position={[27, 11, -10]} rotation={[0, -Math.PI * 0.25, 0]}>
            {wallObjectsText}
            {wallObjectsCloseIcon}
          </group>
        )}
      </Suspense>
    </>
  );
}
