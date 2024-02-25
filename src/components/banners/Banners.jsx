import { useState, useEffect, useRef } from "react";
import { useGLTF, CameraControls } from "@react-three/drei";
import * as THREE from "three";

export default function Banners({ bakedTexture }) {
  const cameraControlsRef = useRef();

  // Change mouse pointer
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  // Open a link logic on mouse click
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  // Load the meshes
  const exhibitionBanner = useGLTF(
    "./models/works-banners/exhibitionBanner.glb"
  );
  const designersBanner = useGLTF("./models/works-banners/designersBanner.glb");
  const urlLinks = useGLTF("./models/works-banners/urlLinks.glb");

  // Click handlers - url link marks of event
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

  // Mouse pointer enter event handlers
  const bannerMouseEnterHandler = () => {
    setHovered(true);
  };

  // Mouse pointer leave event handlers
  const bannerMouseLeaveHandler = () => {
    setHovered(false);
  };

  return (
    <>
      {/* <CameraControls ref={cameraControlsRef} makeDefault /> */}

      <group position={[0, 0, 0]} rotation={[0, Math.PI * 0.5, 0]}>
        <mesh geometry={exhibitionBanner.nodes.exhibitionBannerRe.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <mesh
          geometry={urlLinks.nodes.urlLinkExhibition.geometry}
          onClick={exhibitionBannerClickHandler}
          onPointerEnter={bannerMouseEnterHandler}
          onPointerLeave={bannerMouseLeaveHandler}
        >
          <meshBasicMaterial color="gray" side={THREE.DoubleSide} />
        </mesh>

        <mesh geometry={designersBanner.nodes.jbBannerRe.geometry}>
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>

        <mesh
          geometry={urlLinks.nodes.urlLinkJB.geometry}
          onClick={JBBannerClickHandler}
          onPointerEnter={bannerMouseEnterHandler}
          onPointerLeave={bannerMouseLeaveHandler}
        >
          <meshBasicMaterial color="gray" side={THREE.DoubleSide} />
        </mesh>

        <mesh geometry={designersBanner.nodes.smBannerRe.geometry}>
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>

        <mesh
          geometry={urlLinks.nodes.urlLinkSM.geometry}
          onClick={SMBannerClickHandler}
          onPointerEnter={bannerMouseEnterHandler}
          onPointerLeave={bannerMouseLeaveHandler}
        >
          <meshBasicMaterial color="gray" side={THREE.DoubleSide} />
        </mesh>

        <mesh geometry={designersBanner.nodes.teBannerRe.geometry}>
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>

        <mesh
          geometry={urlLinks.nodes.urlLinkTE.geometry}
          onClick={TEBannerClickHandler}
          onPointerEnter={bannerMouseEnterHandler}
          onPointerLeave={bannerMouseLeaveHandler}
        >
          <meshBasicMaterial color="gray" side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
}
