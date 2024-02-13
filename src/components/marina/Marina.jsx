import { useGLTF } from "@react-three/drei";

// apox. 180cm hight woman
export default function Marina() {
  const marina = useGLTF("./models/marina/Marina-1276.glb");

  return (
    <>
      <primitive
        object={marina.scene}
        scale={5}
        position={[20, 0, 30]}
        rotation={[0, -Math.PI * 0.9, 0]}
      />
    </>
  );
}
