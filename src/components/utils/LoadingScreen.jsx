import logoImage from "../../../public/logo.png";
import { useProgress, Html } from "@react-three/drei";

export default function LoadingScreen() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Html
      center
      className="w-[100vw] h-[100vh] bg-[#fef102] flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <img src={logoImage} className="w-[200px] h-[200px]" />
        <div className="w-full">
          <div
            className="h-1 rounded-xl mb-2 bg-[#010101]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-[#010101] text-[10px] font-bold">
          OOBJECT Rotterdam 2024 digital archive loaded {progress.toFixed(2)} %
        </p>
      </div>
    </Html>
  );
};

