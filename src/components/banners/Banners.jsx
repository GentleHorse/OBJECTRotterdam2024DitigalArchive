import { useState, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Banners() {
  // Change mouse pointer
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  // Open a link logic on mouse click
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  // Load the mesh
  const exhibitionBanner = useGLTF("./models/banners/exhibitionBanner.glb");
  const designersBanner = useGLTF("./models/banners/designersBanner.glb");

  // Load the texture
  const bakedExhibitionBannerTexture = useTexture(
    "./models/banners/baked-banners-exhibition.jpg"
  );
  bakedExhibitionBannerTexture.flipY = false;

  const bakedDesignersBannerTexture = useTexture(
    "./models/banners/baked-banner-individual-designers.jpg"
  );
  bakedDesignersBannerTexture.flipY = false;

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
        geometry={exhibitionBanner.nodes.exhibitionBanner.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
        onClick={exhibitionBannerClickHandler}
        onPointerEnter={bannerMouseEnterHandler}
        onPointerLeave={bannerMouseLeaveHandler}
      >
        <meshBasicMaterial map={bakedExhibitionBannerTexture} />
      </mesh>

      <mesh
        geometry={designersBanner.nodes.jbBanner.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
        onClick={JBBannerClickHandler}
        onPointerEnter={bannerMouseEnterHandler}
        onPointerLeave={bannerMouseLeaveHandler}
      >
        <meshBasicMaterial map={bakedDesignersBannerTexture} side={THREE.DoubleSide} />
      </mesh>

      <mesh
        geometry={designersBanner.nodes.smBanner.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
        onClick={SMBannerClickHandler}
        onPointerEnter={bannerMouseEnterHandler}
        onPointerLeave={bannerMouseLeaveHandler}
      >
        <meshBasicMaterial map={bakedDesignersBannerTexture} side={THREE.DoubleSide} />
      </mesh>

      <mesh
        geometry={designersBanner.nodes.teBanner.geometry}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
        onClick={TEBannerClickHandler}
        onPointerEnter={bannerMouseEnterHandler}
        onPointerLeave={bannerMouseLeaveHandler}
      >
        <meshBasicMaterial map={bakedDesignersBannerTexture} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}
