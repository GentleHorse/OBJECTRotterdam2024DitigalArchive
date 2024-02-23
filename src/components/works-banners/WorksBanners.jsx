import { useState, useEffect, Suspense } from "react";
import { useGLTF, useTexture, Text } from "@react-three/drei";
import * as THREE from "three";
import Placeholder from "../../components/utils/PlaceHolder.jsx";

export default function WorksBanners() {
  // Logic of toggling titles of works ----------------------------
  const [isTitle, setIsTitle] = useState({
    metamorphosis: false,
    foolishPleasure: false,
    cream: false,
    inflatableLeather: false,
    edgeStools: false,
    wallObjects: false,
    ambienceOfLight: false,
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

  // Mouse pointer change & open links logic ----------------------
  // Change mouse pointer
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  // Open a link logic on mouse click
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  // Load the meshes ----------------------------------------------
  const worksJB = useGLTF("./models/works-banners/worksJB.glb");
  const worksSM = useGLTF("./models/works-banners/worksSM.glb");
  const worksTE = useGLTF("./models/works-banners/worksTE.glb");

  const exhibitionBanner = useGLTF("./models/works-banners/exhibitionBanner.glb");
  const designersBanner = useGLTF("./models/works-banners/designersBanner.glb");

  // Load the texture --------------------------------------------
  const bakedTexture = useTexture(
    "./models/works-banners/baked-works-banners.jpg"
  )
  bakedTexture.flipY = false;

  // Mouse click event handlers (banners) -------------------------
  const exhibitionBannerClickHandler = () => {
    openInNewTab("https://objectrotterdam.com/");
  };
  const JBBannerClickHandler = () => {
    openInNewTab("https://jeroenvdbogaert.com/");
  };
  const SMBannerClickHandler = () => {
    openInNewTab("https://www.satomiminoshima.com/");
  };
  const TEBannerClickHandler = () => {
    openInNewTab("https://www.toshihito.design/");
  };

  // Mouse pointer enter event handlers ---------------------------
  // JB
  const theFallMouseEnterHandler = () => {
    titleToggleHandler("metamorphosis");
  };
  const foolishPleasureMouseEnterHandler = () => {
    titleToggleHandler("foolishPleasure");
  };
  const creamMouseEnterHandler = () => {
    titleToggleHandler("cream");
  };

  // SM
  const inflatableLeatherMouseEnterHandler = () => {
    titleToggleHandler("inflatableLeather");
  };
  const edgeStoolsMouseEnterHandler = () => {
    titleToggleHandler("edgeStools");
  };
  const wallObjectsMouseEnterHandler = () => {
    titleToggleHandler("wallObjects");
  };

  // TE
  const ambienceOfLightMouseEnterHandler = () => {
    titleToggleHandler("ambienceOfLight");
  };

  // Banners
  const bannerMouseEnterHandler = () => {
    setHovered(true);
  };

  // Mouse pointer leave event handlers ---------------------------
  //JB
  const theFallMouseLeaveHandler = () => {
    titleToggleHandler("metamorphosis");
  };
  const foolishPleasureMouseLeaveHandler = () => {
    titleToggleHandler("foolishPleasure");
  };
  const creamMouseLeaveHandler = () => {
    titleToggleHandler("cream");
  };

  // SM
  const inflatableLeatherMouseLeaveHandler = () => {
    titleToggleHandler("inflatableLeather");
  };
  const edgeStoolsMouseLeaveHandler = () => {
    titleToggleHandler("edgeStools");
  };
  const wallObjectsMouseLeaveHandler = () => {
    titleToggleHandler("wallObjects");
  };

  // TE
  const ambienceOfLightMouseLeaveHandler = () => {
    titleToggleHandler("ambienceOfLight");
  };

  // Banners
  const bannerMouseLeaveHandler = () => {
    setHovered(false);
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
          onPointerEnter={ambienceOfLightMouseEnterHandler}
          onPointerLeave={ambienceOfLightMouseLeaveHandler}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        {isTitle.ambienceOfLight && (
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

      <mesh
        geometry={exhibitionBanner.nodes.exhibitionBannerRe.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
        onClick={exhibitionBannerClickHandler}
        onPointerEnter={bannerMouseEnterHandler}
        onPointerLeave={bannerMouseLeaveHandler}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>

      <mesh
        geometry={designersBanner.nodes.jbBannerRe.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
        onClick={JBBannerClickHandler}
        onPointerEnter={bannerMouseEnterHandler}
        onPointerLeave={bannerMouseLeaveHandler}
      >
        <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
      </mesh>

      <mesh
        geometry={designersBanner.nodes.smBannerRe.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
        onClick={SMBannerClickHandler}
        onPointerEnter={bannerMouseEnterHandler}
        onPointerLeave={bannerMouseLeaveHandler}
      >
        <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
      </mesh>

      <mesh
        geometry={designersBanner.nodes.teBannerRe.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
        onClick={TEBannerClickHandler}
        onPointerEnter={bannerMouseEnterHandler}
        onPointerLeave={bannerMouseLeaveHandler}
      >
        <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}
