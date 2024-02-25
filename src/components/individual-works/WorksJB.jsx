import { useState, Suspense } from "react";
import { useGLTF, Text } from "@react-three/drei";
import * as THREE from "three";
import Placeholder from "../../components/utils/PlaceHolder.jsx";

export default function WorksJB({ bakedTexture }) {
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
  const theFallMouseEnterHandler = () => {
    titleToggleHandler("metamorphosis");
  };
  const foolishPleasureMouseEnterHandler = () => {
    titleToggleHandler("foolishPleasure");
  };
  const creamMouseEnterHandler = () => {
    titleToggleHandler("cream");
  };

  // Mouse pointer leave event handlers
  const theFallMouseLeaveHandler = () => {
    titleToggleHandler("metamorphosis");
  };
  const foolishPleasureMouseLeaveHandler = () => {
    titleToggleHandler("foolishPleasure");
  };
  const creamMouseLeaveHandler = () => {
    titleToggleHandler("cream");
  };

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
          onPointerEnter={theFallMouseEnterHandler}
          onPointerLeave={theFallMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {isTitle.metamorphosis && (
          <group position={[-1, 18, -30]} rotation={[0, Math.PI, 0]}>
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
          </group>
        )}

        <mesh
          geometry={worksJB.nodes.foolishPleasureRe.geometry}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          onPointerEnter={foolishPleasureMouseEnterHandler}
          onPointerLeave={foolishPleasureMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>

        {isTitle.foolishPleasure && (
          <group position={[-25, 2, 0]} rotation={[0, Math.PI * 0.5, 0]}>
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
          </group>
        )}

        <mesh
          geometry={worksJB.nodes.creamRe.geometry}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          onPointerEnter={creamMouseEnterHandler}
          onPointerLeave={creamMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {isTitle.cream && (
          <group position={[-8, 6.5, 22]} rotation={[0, -Math.PI * 0.5, 0]}>
            <Text
              position={[0, 0, 0]}
              fontSize={1.5}
              font="./fonts/cormorant-garamond-v16-latin-300.woff"
              color="snow"
              anchorX="center"
              anchorY="middle"
            >
              C.R.E.A.M.
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
          </group>
        )}

        <mesh
          geometry={worksJB.nodes.untitledRe.geometry}
          position={[0, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Suspense>
    </>
  );
}
