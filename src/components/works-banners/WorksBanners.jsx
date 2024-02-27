import { useRef } from "react";
import { useTexture, CameraControls } from "@react-three/drei";
import WorksJB from "../individual-works/WorksJB.jsx";
import WorksSM from "../individual-works/WorksSM.jsx";
import WorksTE from "../individual-works/WorksTE.jsx";
import Banners from "../banners/Banners.jsx";

import CustomCamera from "../utils/CustomCamera.jsx";

export default function WorksBanners() {
  // Zoom in camera logic set up
  const cameraControlsRef = useRef();

  const cameraFocusArrayObject = {
    ambienceOfLightZoomInCameraPosition: [14.7, 4.0, -45.7],
    ambienceOfLightZoomInCameraTarget: [15.68, -1.88, -13.09],
    MetamorphosisZoomInCameraPosition: [-10.04, 7.22, -62.34],
    MetamorphosisZoomInCameraTarget: [-11.21, 9.17, 0.0],
    foolishPleasureZoomInCameraPosition: [20.56, 8.7, 0.0],
    foolishPleasureZoomInCameraTarget: [-89.18, 5.35, 2.13],
    creamZoomInCameraPosition: [-26.53, 8.5, 23.0],
    creamZoomInCameraTarget: [300.0, 0.0, 18.0],
    untitledZoomInCameraPosition: [10.14, 9.5, 20.0],
    untitledZoomInCameraTarget: [-330.22, -5.5, 44.22],
    inflatableLeatherZoomInCameraPosition: [1.31, 6.31, -28.55],
    inflatableLeatherZoomInCameraTarget: [6.51, 0.0, 0.0],
    edgeStoolsZoomInCameraPosition: [6.68, 1.31, 36.53],
    edgeStoolsZoomInCameraTarget: [29.12, -4.48, -31.15],
    wallObjectsZoomInCameraPosition: [14.00, 9.0, 23.64],
    wallObjectsZoomInCameraTarget: [142.72, 9.0, -118.84],
    exhibitionBannerZoomInCameraPosition: [65.0, 8.0, -32.62],
    exhibitionBannerZoomInCameraTarget: [65.0, 8.0, 0.0],
    JBBannerZoomInCameraPosition: [-75.0, 8.0, -51.31],
    JBBannerZoomInCameraTarget: [-83.0, 8.0, 0.0],
    SMBannerZoomInCameraPosition: [-60.0, 8.0, -30.0],
    SMBannerZoomInCameraTarget: [-65.23, 8.0, 0.0],
    TEBannerZoomInCameraPosition: [-50.0, 8.0, -12.5],
    TEBannerZoomInCameraTarget: [-53.0, 8.0, 0.0],
  };

  // Zoom in camera logic click handlers
  // JB works
  const metamorphosisClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.MetamorphosisZoomInCameraPosition[0],
      cameraFocusArrayObject.MetamorphosisZoomInCameraPosition[1],
      cameraFocusArrayObject.MetamorphosisZoomInCameraPosition[2],
      cameraFocusArrayObject.MetamorphosisZoomInCameraTarget[0],
      cameraFocusArrayObject.MetamorphosisZoomInCameraTarget[1],
      cameraFocusArrayObject.MetamorphosisZoomInCameraTarget[2],
      true
    );
  };
  const foolishPleasureClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.foolishPleasureZoomInCameraPosition[0],
      cameraFocusArrayObject.foolishPleasureZoomInCameraPosition[1],
      cameraFocusArrayObject.foolishPleasureZoomInCameraPosition[2],
      cameraFocusArrayObject.foolishPleasureZoomInCameraTarget[0],
      cameraFocusArrayObject.foolishPleasureZoomInCameraTarget[1],
      cameraFocusArrayObject.foolishPleasureZoomInCameraTarget[2],
      true
    );
  };
  const creamClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.creamZoomInCameraPosition[0],
      cameraFocusArrayObject.creamZoomInCameraPosition[1],
      cameraFocusArrayObject.creamZoomInCameraPosition[2],
      cameraFocusArrayObject.creamZoomInCameraTarget[0],
      cameraFocusArrayObject.creamZoomInCameraTarget[1],
      cameraFocusArrayObject.creamZoomInCameraTarget[2],
      true
    );
  };
  const untitledClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.untitledZoomInCameraPosition[0],
      cameraFocusArrayObject.untitledZoomInCameraPosition[1],
      cameraFocusArrayObject.untitledZoomInCameraPosition[2],
      cameraFocusArrayObject.untitledZoomInCameraTarget[0],
      cameraFocusArrayObject.untitledZoomInCameraTarget[1],
      cameraFocusArrayObject.untitledZoomInCameraTarget[2],
      true
    );
  };

  // SM works
  const inflatableLeatherClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.inflatableLeatherZoomInCameraPosition[0],
      cameraFocusArrayObject.inflatableLeatherZoomInCameraPosition[1],
      cameraFocusArrayObject.inflatableLeatherZoomInCameraPosition[2],
      cameraFocusArrayObject.inflatableLeatherZoomInCameraTarget[0],
      cameraFocusArrayObject.inflatableLeatherZoomInCameraTarget[1],
      cameraFocusArrayObject.inflatableLeatherZoomInCameraTarget[2],
      true
    );
  };
  const edgeStoolsClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.edgeStoolsZoomInCameraPosition[0],
      cameraFocusArrayObject.edgeStoolsZoomInCameraPosition[1],
      cameraFocusArrayObject.edgeStoolsZoomInCameraPosition[2],
      cameraFocusArrayObject.edgeStoolsZoomInCameraTarget[0],
      cameraFocusArrayObject.edgeStoolsZoomInCameraTarget[1],
      cameraFocusArrayObject.edgeStoolsZoomInCameraTarget[2],
      true
    );
  };
  const wallObjectsClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.wallObjectsZoomInCameraPosition[0],
      cameraFocusArrayObject.wallObjectsZoomInCameraPosition[1],
      cameraFocusArrayObject.wallObjectsZoomInCameraPosition[2],
      cameraFocusArrayObject.wallObjectsZoomInCameraTarget[0],
      cameraFocusArrayObject.wallObjectsZoomInCameraTarget[1],
      cameraFocusArrayObject.wallObjectsZoomInCameraTarget[2],
      true
    );
  };

  // TE work
  const ambienceOfLightClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.ambienceOfLightZoomInCameraPosition[0],
      cameraFocusArrayObject.ambienceOfLightZoomInCameraPosition[1],
      cameraFocusArrayObject.ambienceOfLightZoomInCameraPosition[2],
      cameraFocusArrayObject.ambienceOfLightZoomInCameraTarget[0],
      cameraFocusArrayObject.ambienceOfLightZoomInCameraTarget[1],
      cameraFocusArrayObject.ambienceOfLightZoomInCameraTarget[2],
      true
    );
  };

  // Exhibition banner
  const exhibitionBannerClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.exhibitionBannerZoomInCameraPosition[0],
      cameraFocusArrayObject.exhibitionBannerZoomInCameraPosition[1],
      cameraFocusArrayObject.exhibitionBannerZoomInCameraPosition[2],
      cameraFocusArrayObject.exhibitionBannerZoomInCameraTarget[0],
      cameraFocusArrayObject.exhibitionBannerZoomInCameraTarget[1],
      cameraFocusArrayObject.exhibitionBannerZoomInCameraTarget[2],
      true
    );
  };

  // JB Banner
  const JBBannerClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.JBBannerZoomInCameraPosition[0],
      cameraFocusArrayObject.JBBannerZoomInCameraPosition[1],
      cameraFocusArrayObject.JBBannerZoomInCameraPosition[2],
      cameraFocusArrayObject.JBBannerZoomInCameraTarget[0],
      cameraFocusArrayObject.JBBannerZoomInCameraTarget[1],
      cameraFocusArrayObject.JBBannerZoomInCameraTarget[2],
      true
    );
  };

  // SM Banner
  const SMBannerClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.SMBannerZoomInCameraPosition[0],
      cameraFocusArrayObject.SMBannerZoomInCameraPosition[1],
      cameraFocusArrayObject.SMBannerZoomInCameraPosition[2],
      cameraFocusArrayObject.SMBannerZoomInCameraTarget[0],
      cameraFocusArrayObject.SMBannerZoomInCameraTarget[1],
      cameraFocusArrayObject.SMBannerZoomInCameraTarget[2],
      true
    );
  };

  // SM Banner
  const TEBannerClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.TEBannerZoomInCameraPosition[0],
      cameraFocusArrayObject.TEBannerZoomInCameraPosition[1],
      cameraFocusArrayObject.TEBannerZoomInCameraPosition[2],
      cameraFocusArrayObject.TEBannerZoomInCameraTarget[0],
      cameraFocusArrayObject.TEBannerZoomInCameraTarget[1],
      cameraFocusArrayObject.TEBannerZoomInCameraTarget[2],
      true
    );
  };

  // Load one big uv texture for design works & banners
  const bakedTexture = useTexture(
    "./models/works-banners/baked-works-banners.jpg"
  );
  bakedTexture.flipY = false;

  return (
    <>
      <CameraControls ref={cameraControlsRef} makeDefault />

      {/* <CustomCamera /> */}

      <WorksJB
        bakedTexture={bakedTexture}
        onClickMetamorphosis={metamorphosisClickHandler}
        onClickFoolishPleasure={foolishPleasureClickHandler}
        onClickCream={creamClickHandler}
        onClickUntitled={untitledClickHandler}
      />

      <WorksSM
        bakedTexture={bakedTexture}
        onClickInflatableLeather={inflatableLeatherClickHandler}
        onClickEdgeStools={edgeStoolsClickHandler}
        onClickWallObjects={wallObjectsClickHandler}
      />

      <WorksTE
        bakedTexture={bakedTexture}
        onClickAmbienceOfLight={ambienceOfLightClickHandler}
      />

      <Banners
        bakedTexture={bakedTexture}
        onClickExhibitionBanner={exhibitionBannerClickHandler}
        onClickJBBanner={JBBannerClickHandler}
        onClickSMBanner={SMBannerClickHandler}
        onClickTEBanner={TEBannerClickHandler}
      />
    </>
  );
}
