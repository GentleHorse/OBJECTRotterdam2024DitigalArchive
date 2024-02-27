import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function CustomCamera() {
  const { camera } = useThree();
  const { Position_X, Position_Y, Position_Z, Target_X, Target_Y, Target_Z } =
    useControls("camera", {
      Position_X: { value: -10, min: -500, max: 500, step: 0.01 },
      Position_Y: { value: 25, min: -500, max: 500, step: 0.01 },
      Position_Z: { value: -70, min: -500, max: 500, step: 0.01 },
      Target_X: { value: 0, min: -500, max: 500, step: 0.01 },
      Target_Y: { value: 0, min: -500, max: 500, step: 0.01 },
      Target_Z: { value: 0, min: -500, max: 500, step: 0.01 },
    });

  useEffect(() => {
    camera.position.x = Position_X;
    camera.position.y = Position_Y;
    camera.position.z = Position_Z;
    camera.lookAt(Target_X, Target_Y, Target_Z);
  }, [Position_X, Position_Y, Position_Z, Target_X, Target_Y, Target_Z]);

  return null;
}
