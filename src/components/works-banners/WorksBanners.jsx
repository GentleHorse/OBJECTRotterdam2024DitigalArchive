import { useTexture } from "@react-three/drei";
import WorksJB from "../individual-works/WorksJB.jsx";
import WorksSM from "../individual-works/WorksSM.jsx";
import WorksTE from "../individual-works/WorksTE.jsx";
import Banners from "../banners/Banners.jsx";

export default function WorksBanners() {
  // Load one big uv texture for design works & banners
  const bakedTexture = useTexture(
    "./models/works-banners/baked-works-banners.jpg"
  );
  bakedTexture.flipY = false;

  return (
    <>
      <WorksJB bakedTexture={bakedTexture} />

      <WorksSM bakedTexture={bakedTexture} />

      <WorksTE bakedTexture={bakedTexture} />

      <Banners bakedTexture={bakedTexture} />
    </>
  );
}
