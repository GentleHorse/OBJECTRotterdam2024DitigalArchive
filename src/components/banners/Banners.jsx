import { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Banners({ bakedTexture }) {
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

  // Click event handlers
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
