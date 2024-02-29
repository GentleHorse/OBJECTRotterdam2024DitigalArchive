import { useState, useEffect, Suspense } from "react";
import { useGLTF, Text } from "@react-three/drei";
import * as THREE from "three";
import Placeholder from "../../components/utils/PlaceHolder.jsx";

export default function WorksJB({
  bakedTexture,
  onClickMetamorphosis,
  onClickBackMetamorphosis,
  isFocusedMetamorphosis,
  onClickFoolishPleasure,
  onClickBackFoolishPleasure,
  isFocusedFoolishPleasure,
  onClickCream,
  onClickBackCream,
  isFocusedCream,
  onClickUntitled,
  onClickBackUntitled,
  isFocusedUntitled,
}) {
  // Change mouse pointer
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  // Logic of toggling titles of works
  const [isTitle, setIsTitle] = useState({
    metamorphosis: false,
    foolishPleasure: false,
    cream: false,
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
  const worksJB = useGLTF("./models/works-banners/worksJB.glb");

  // Mouse pointer enter event handlers
  const metamorphosisMouseEnterHandler = () => {
    titleToggleHandler("metamorphosis");
  };
  const foolishPleasureMouseEnterHandler = () => {
    titleToggleHandler("foolishPleasure");
  };
  const creamMouseEnterHandler = () => {
    titleToggleHandler("cream");
  };
  const finishFocusedMouseEnterHandler = () => {
    setHovered(true);
  };

  // Mouse pointer leave event handlers
  const metamorphosisMouseLeaveHandler = () => {
    titleToggleHandler("metamorphosis");
  };
  const foolishPleasureMouseLeaveHandler = () => {
    titleToggleHandler("foolishPleasure");
  };
  const creamMouseLeaveHandler = () => {
    titleToggleHandler("cream");
  };
  const finishFocusedMouseLeaveHandler = () => {
    setHovered(false);
  };

  // Works texts
  const metamorphosisText = (
    <>
      <Text
        position={[0, 0, 0]}
        fontSize={1.5}
        font="./fonts/cormorant-garamond-v16-latin-300.woff"
        color="snow"
        anchorX="center"
        anchorY="middle"
      >
        Metamorphosis
      </Text>
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.8}
        font="./fonts/cormorant-garamond-v16-latin-300.woff"
        color="snow"
        anchorX="center"
        anchorY="middle"
      >
        designed by Jeroen van den Bogaert
      </Text>
    </>
  );
  const metamorphosisCloseIcon = (
    <group position={[0, -4, -1]}>
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
        onClick={(e) => (onClickBackMetamorphosis(), e.stopPropagation())}
        onPointerEnter={finishFocusedMouseEnterHandler}
        onPointerLeave={finishFocusedMouseLeaveHandler}
      >
        <planeGeometry />
        <meshBasicMaterial color="#656765" />
      </mesh>
    </group>
  );

  const foolishPleasureText = (
    <>
      <Text
        position={[0, 0, 0]}
        fontSize={1.5}
        font="./fonts/cormorant-garamond-v16-latin-300.woff"
        color="snow"
        anchorX="center"
        anchorY="middle"
      >
        A Foolish Pleasure in Wicked Schemes
      </Text>
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.8}
        font="./fonts/cormorant-garamond-v16-latin-300.woff"
        color="snow"
        anchorX="center"
        anchorY="middle"
      >
        designed by Jeroen van den Bogaert
      </Text>
    </>
  );
  const foolishPleasureCloseIcon = (
    <group position={[0, 22, 4]}>
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
        onClick={(e) => (onClickBackFoolishPleasure(), e.stopPropagation())}
        onPointerEnter={finishFocusedMouseEnterHandler}
        onPointerLeave={finishFocusedMouseLeaveHandler}
      >
        <planeGeometry />
        <meshBasicMaterial color="#656765" />
      </mesh>
    </group>
  );

  const creamText = (
    <>
      <Text
        position={[0, 0, 0]}
        fontSize={1.3}
        font="./fonts/cormorant-garamond-v16-latin-300.woff"
        color="snow"
        anchorX="center"
        anchorY="middle"
      >
        C.R.E.A.M.
      </Text>
      <Text
        position={[0, -1.3, 0]}
        fontSize={0.7}
        font="./fonts/cormorant-garamond-v16-latin-300.woff"
        color="snow"
        anchorX="center"
        anchorY="middle"
      >
        designed by Jeroen van den Bogaert
      </Text>
    </>
  );
  const creamCloseIcon = (
    <group position={[0, 9, 0]}>
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
        onClick={(e) => (onClickBackCream(), e.stopPropagation())}
        onPointerEnter={finishFocusedMouseEnterHandler}
        onPointerLeave={finishFocusedMouseLeaveHandler}
      >
        <planeGeometry />
        <meshBasicMaterial color="#656765" />
      </mesh>
    </group>
  );

  const untitledCloseIcon = (
    <group position={[0, 9, 0]}>
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
        onClick={(e) => (onClickBackUntitled(), e.stopPropagation())}
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
          <group position={[-12.5, 12.5, 0]}>
            <Placeholder position={[-1.5, 0, -27]} scale={[18, 25, 2]} />
            <Placeholder position={[-14, 1, 0]} scale={[2, 22, 50]} />
            <Placeholder position={[5, 1, 22]} scale={[2, 8, 20]} />
          </group>
        }
      >
        <mesh
          geometry={worksJB.nodes.metamorphosis.geometry}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          onClick={(e) => (onClickMetamorphosis(), e.stopPropagation())}
          onPointerEnter={metamorphosisMouseEnterHandler}
          onPointerLeave={metamorphosisMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {isTitle.metamorphosis && !isFocusedMetamorphosis && (
          <group position={[1.2, 18, -30]} rotation={[0, Math.PI, 0]}>
            {metamorphosisText}
          </group>
        )}

        {isFocusedMetamorphosis && (
          <group position={[1.2, 18, -30]} rotation={[0, Math.PI, 0]}>
            {metamorphosisText}
            {metamorphosisCloseIcon}
          </group>
        )}

        <mesh
          geometry={worksJB.nodes.foolishPleasureRe.geometry}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          onClick={(e) => (onClickFoolishPleasure(), e.stopPropagation())}
          onPointerEnter={foolishPleasureMouseEnterHandler}
          onPointerLeave={foolishPleasureMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>

        {isTitle.foolishPleasure && !isFocusedFoolishPleasure && (
          <group position={[-25, 2.3, 0]} rotation={[0, Math.PI * 0.5, 0]}>
            {foolishPleasureText}
          </group>
        )}

        {isFocusedFoolishPleasure && (
          <group position={[-25, 2.3, 0]} rotation={[0, Math.PI * 0.5, 0]}>
            {foolishPleasureText}
            {foolishPleasureCloseIcon}
          </group>
        )}

        <mesh
          geometry={worksJB.nodes.creamRe.geometry}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          onClick={(e) => (onClickCream(), e.stopPropagation())}
          onPointerEnter={creamMouseEnterHandler}
          onPointerLeave={creamMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {isTitle.cream && !isFocusedCream && (
          <group position={[-8, 9, 22]} rotation={[0, -Math.PI * 0.5, 0]}>
            {creamText}
          </group>
        )}

        {isFocusedCream && (
          <group position={[-8, 9, 22]} rotation={[0, -Math.PI * 0.5, 0]}>
            {creamText}
            {creamCloseIcon}
          </group>
        )}

        <mesh
          geometry={worksJB.nodes.untitledRe.geometry}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          onClick={(e) => (onClickUntitled(), e.stopPropagation())}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {isFocusedUntitled && (
          <group position={[-7, 9, 22]} rotation={[0, Math.PI * 0.5, 0]}>
            {untitledCloseIcon}
          </group>
        )}
      </Suspense>
    </>
  );
}
