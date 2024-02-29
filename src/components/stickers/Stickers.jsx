import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";

export default function Stickers({
  onClickExhibitionBanner,
  onClickWorks,
  onClickDesignerBanners,
}) {
  // Change mouse pointer
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  // Mouse pointer enter event handler
  const mousePointerEnterHandler = () => {
    setHovered(true);
  };

  // Mouse pointer leave event handler
  const mousePointerLeaveHandler = () => {
    setHovered(false);
  };

  return (
    <>
      <group position={[34.5, 17, -5]} rotation={[0, Math.PI, 0]}>
        <Text
          position={[3.8, 0, 0]}
          fontSize={0.9}
          font="./fonts/shippori-mincho-b1-v21-japanese-800.woff"
          color="#080808"
          anchorX="right"
          anchorY="middle"
          onClick={(e) => (onClickDesignerBanners(), e.stopPropagation())}
          onPointerEnter={mousePointerEnterHandler}
          onPointerLeave={mousePointerLeaveHandler}
        >
          Designers {">>"}
        </Text>

        <Text
          position={[3.8, -2, 0]}
          fontSize={0.9}
          font="./fonts/shippori-mincho-b1-v21-japanese-800.woff"
          color="#080808"
          anchorX="right"
          anchorY="middle"
          onClick={(e) => (onClickWorks(), e.stopPropagation())}
          onPointerEnter={mousePointerEnterHandler}
          onPointerLeave={mousePointerLeaveHandler}
        >
          Works {">"}
        </Text>

        <Text
          position={[-3.8, -4, 0]}
          fontSize={0.9}
          font="./fonts/shippori-mincho-b1-v21-japanese-800.woff"
          color="#080808"
          anchorX="left"
          anchorY="middle"
          onClick={(e) => (onClickExhibitionBanner(), e.stopPropagation())}
          onPointerEnter={mousePointerEnterHandler}
          onPointerLeave={mousePointerLeaveHandler}
        >
          {"<"} Expo Info
        </Text>
      </group>

      <group position={[-34.5, 17, -5]} rotation={[0, Math.PI, 0]}>
        <Text
          position={[3.9, 0, 0]}
          fontSize={0.9}
          font="./fonts/shippori-mincho-b1-v21-japanese-800.woff"
          color="#080808"
          anchorX="right"
          anchorY="middle"
          onClick={(e) => (onClickDesignerBanners(), e.stopPropagation())}
          onPointerEnter={mousePointerEnterHandler}
          onPointerLeave={mousePointerLeaveHandler}
        >
          Designers {">"}
        </Text>

        <Text
          position={[-3.5, -2, 0]}
          fontSize={0.9}
          font="./fonts/shippori-mincho-b1-v21-japanese-800.woff"
          color="#080808"
          anchorX="left"
          anchorY="middle"
          onClick={(e) => (onClickWorks(), e.stopPropagation())}
          onPointerEnter={mousePointerEnterHandler}
          onPointerLeave={mousePointerLeaveHandler}
        >
          {"<"} Works
        </Text>

        <Text
          position={[-3.5, -4, 0]}
          fontSize={0.9}
          font="./fonts/shippori-mincho-b1-v21-japanese-800.woff"
          color="#080808"
          anchorX="left"
          anchorY="middle"
          onClick={(e) => (onClickExhibitionBanner(), e.stopPropagation())}
          onPointerEnter={mousePointerEnterHandler}
          onPointerLeave={mousePointerLeaveHandler}
        >
          {"<<"} Expo Info
        </Text>
      </group>

      <group position={[-34.5, 17, 5]} rotation={[0, 0, 0]}>
        <Text
          position={[-4, 0, 0]}
          fontSize={0.9}
          font="./fonts/shippori-mincho-b1-v21-japanese-800.woff"
          color="#080808"
          anchorX="left"
          anchorY="middle"
          onClick={(e) => (onClickDesignerBanners(), e.stopPropagation())}
          onPointerEnter={mousePointerEnterHandler}
          onPointerLeave={mousePointerLeaveHandler}
        >
          {"<"} Designers
        </Text>

        <Text
          position={[3.5, -2, 0]}
          fontSize={0.9}
          font="./fonts/shippori-mincho-b1-v21-japanese-800.woff"
          color="#080808"
          anchorX="right"
          anchorY="middle"
          onClick={(e) => (onClickWorks(), e.stopPropagation())}
          onPointerEnter={mousePointerEnterHandler}
          onPointerLeave={mousePointerLeaveHandler}
        >
          Works {">"}
        </Text>

        <Text
          position={[3.5, -4, 0]}
          fontSize={0.9}
          font="./fonts/shippori-mincho-b1-v21-japanese-800.woff"
          color="#080808"
          anchorX="right"
          anchorY="middle"
          onClick={(e) => (onClickExhibitionBanner(), e.stopPropagation())}
          onPointerEnter={mousePointerEnterHandler}
          onPointerLeave={mousePointerLeaveHandler}
        >
          Expo Info {">>"}
        </Text>
      </group>
    </>
  );
}
