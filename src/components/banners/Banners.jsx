import { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Banners({
  bakedTexture,
  onClickExhibitionBanner,
  onClickJBBanner,
  onClickSMBanner,
  onClickTEBanner,
}) {
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
      <group position={[0, 0, 0]} rotation={[0, Math.PI * 0.5, 0]}>
        <mesh
          geometry={exhibitionBanner.nodes.exhibitionBannerRe.geometry}
          onClick={(e) => (onClickExhibitionBanner(), e.stopPropagation())}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <mesh
          geometry={urlLinks.nodes.urlLinkExhibition.geometry}
          onClick={(e) => (exhibitionBannerClickHandler(), e.stopPropagation())}
          onPointerEnter={bannerMouseEnterHandler}
          onPointerLeave={bannerMouseLeaveHandler}
        >
          <meshBasicMaterial color="gray" side={THREE.DoubleSide} />
        </mesh>

        <mesh
          geometry={designersBanner.nodes.jbBannerRe.geometry}
          onClick={(e) => (onClickJBBanner(), e.stopPropagation())}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>

        <mesh
          geometry={urlLinks.nodes.urlLinkJB.geometry}
          onClick={(e) => (JBBannerClickHandler(), e.stopPropagation())}
          onPointerEnter={bannerMouseEnterHandler}
          onPointerLeave={bannerMouseLeaveHandler}
        >
          <meshBasicMaterial color="gray" side={THREE.DoubleSide} />
        </mesh>

        <mesh
          geometry={designersBanner.nodes.smBannerRe.geometry}
          onClick={(e) => (onClickSMBanner(), e.stopPropagation())}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>

        <mesh
          geometry={urlLinks.nodes.urlLinkSM.geometry}
          onClick={(e) => (SMBannerClickHandler(), e.stopPropagation())}
          onPointerEnter={bannerMouseEnterHandler}
          onPointerLeave={bannerMouseLeaveHandler}
        >
          <meshBasicMaterial color="gray" side={THREE.DoubleSide} />
        </mesh>

        <mesh
          geometry={designersBanner.nodes.teBannerRe.geometry}
          onClick={(e) => (onClickTEBanner(), e.stopPropagation())}
        >
          <meshBasicMaterial map={bakedTexture} side={THREE.DoubleSide} />
        </mesh>

        <mesh
          geometry={urlLinks.nodes.urlLinkTE.geometry}
          onClick={(e) => (TEBannerClickHandler(), e.stopPropagation())}
          onPointerEnter={bannerMouseEnterHandler}
          onPointerLeave={bannerMouseLeaveHandler}
        >
          <meshBasicMaterial color="gray" side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
}
