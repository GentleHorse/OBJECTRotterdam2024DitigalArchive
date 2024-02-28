import { useRef, useState } from "react";
import { useTexture, CameraControls, Text } from "@react-three/drei";
import WorksJB from "../individual-works/WorksJB.jsx";
import WorksSM from "../individual-works/WorksSM.jsx";
import WorksTE from "../individual-works/WorksTE.jsx";
import Banners from "../banners/Banners.jsx";
import Stickers from "../stickers/Stickers.jsx";

import CustomCamera from "../utils/CustomCamera.jsx";

export default function WorksBanners() {
  // Zoom in camera logic set up
  const cameraControlsRef = useRef();

  // Zoom in & out toggling state logic
  const [isFocused, setIsFocused] = useState({
    ambienceOfLight: false,
    metamorphosis: false,
    foolishPleasure: false,
    cream: false,
    untitled: false,
    inflatableLeather: false,
    edgeStools: false,
    wallObjects: false,
    exhibitionBanner: false,
    JBBanner: false,
    SMBanner: false,
    TEBanner: false,
  });

  const focusOnHandler = (selector) => {
    setIsFocused((prevIsFocused) => {
      const newIsFocused = { ...prevIsFocused };

      for (const focus in newIsFocused) {
        if (focus === selector) {
          if (newIsFocused[selector] === false) {
            newIsFocused[selector] = true;
          }
        }
      }

      return newIsFocused;
    });
  };

  const focusOffHandler = (selector) => {
    setIsFocused((prevIsFocused) => {
      const newIsFocused = { ...prevIsFocused };

      for (const focus in newIsFocused) {
        if (focus === selector) {
          if (newIsFocused[selector] === true) {
            newIsFocused[selector] = false;
          }
        }
      }

      return newIsFocused;
    });
  };

  const cameraFocusArrayObject = {
    // Zoom-in Position
    // JB works
    metamorphosisZoomInCameraPosition: [-10.04, 7.22, -62.34],
    metamorphosisZoomInCameraTarget: [-11.21, 9.17, 0.0],
    foolishPleasureZoomInCameraPosition: [20.56, 8.7, 0.0],
    foolishPleasureZoomInCameraTarget: [-89.18, 5.35, 2.13],
    creamZoomInCameraPosition: [-26.53, 8.5, 23.0],
    creamZoomInCameraTarget: [300.0, 0.0, 18.0],
    untitledZoomInCameraPosition: [8.7, 8.0, 12.0],
    untitledZoomInCameraTarget: [-5.5, 8.0, 18.5],

    // SM works
    inflatableLeatherZoomInCameraPosition: [1.31, 6.31, -28.55],
    inflatableLeatherZoomInCameraTarget: [6.51, 0.0, 0.0],
    edgeStoolsZoomInCameraPosition: [6.68, 1.31, 36.53],
    edgeStoolsZoomInCameraTarget: [29.12, -4.48, -31.15],
    wallObjectsZoomInCameraPosition: [14.0, 9.0, 23.64],
    wallObjectsZoomInCameraTarget: [142.72, 9.0, -118.84],

    // TE work
    ambienceOfLightZoomInCameraPosition: [14.7, 4.0, -45.7],
    ambienceOfLightZoomInCameraTarget: [15.68, -1.88, -13.09],

    // Banners
    exhibitionBannerZoomInCameraPosition: [65.0, 8.0, -32.62],
    exhibitionBannerZoomInCameraTarget: [65.0, 8.0, 0.0],
    JBBannerZoomInCameraPosition: [-75.0, 8.0, -51.31],
    JBBannerZoomInCameraTarget: [-83.0, 8.0, 0.0],
    SMBannerZoomInCameraPosition: [-60.0, 8.0, -30.0],
    SMBannerZoomInCameraTarget: [-65.23, 8.0, 0.0],
    TEBannerZoomInCameraPosition: [-50.0, 8.0, -12.5],
    TEBannerZoomInCameraTarget: [-53.0, 8.0, 0.0],

    // Zoom-out Position
    // JB works
    metamorphosisZoomOutCameraPosition: [14.92, 18.54, -76.23],
    metamorphosisZoomOutCameraTarget: [0.0, 0.0, 0.0],
    foolishPleasureZoomOutCameraPosition: [-43.33, 18.98, 48.38],
    foolishPleasureZoomOutCameraTarget: [0.0, 0.0, 0.0],
    creamZoomOutCameraPosition: [30.3, 3.0, -11.58],
    creamZoomOutCameraTarget: [0.0, 0.0, 0.0],
    untitledZoomOutCameraPosition: [6.68, 8.0, 73.91],
    untitledZoomOutCameraTarget: [0.0, 0.0, 0.0],

    // SM works
    inflatableLeatherZoomOutCameraPosition: [-14.94, 7.38, 57.66],
    inflatableLeatherZoomOutCameraTarget: [0.0, 0.0, 0.0],
    edgeStoolsZoomOutCameraPosition: [28.68, 13.61, 61.02],
    edgeStoolsZoomOutCameraTarget: [0.0, 0.0, 0.0],
    wallObjectsZoomOutCameraPosition: [0.0, 12.47, 58.69],
    wallObjectsZoomOutCameraTarget: [0.0, 0.0, 0.0],

    // TE work
    ambienceOfLightZoomOutCameraPosition: [33.61, 6.31, -63.77],
    ambienceOfLightZoomOutCameraTarget: [0.0, 0.0, 0.0],

    // Go back to the initial position & target
    worksInitialCameraPosition: [-10, 25, -70],
    worksInitialCameraTarget: [0.0, 0.0, 0.0],

    // Go to the designer banners overview position & target
    designerbannersCameraPosition: [-50.43, 10.00, -62.62],
    designerbannersCameraTarget: [-64.46, 10.00, 1.31],
  };

  // Zoom in & out camera logic click handlers
  // JB works
  const metamorphosisClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.metamorphosisZoomInCameraPosition[0],
      cameraFocusArrayObject.metamorphosisZoomInCameraPosition[1],
      cameraFocusArrayObject.metamorphosisZoomInCameraPosition[2],
      cameraFocusArrayObject.metamorphosisZoomInCameraTarget[0],
      cameraFocusArrayObject.metamorphosisZoomInCameraTarget[1],
      cameraFocusArrayObject.metamorphosisZoomInCameraTarget[2],
      true
    );

    focusOnHandler("metamorphosis");
  };
  const metamorphosisClickBackHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.metamorphosisZoomOutCameraPosition[0],
      cameraFocusArrayObject.metamorphosisZoomOutCameraPosition[1],
      cameraFocusArrayObject.metamorphosisZoomOutCameraPosition[2],
      cameraFocusArrayObject.metamorphosisZoomOutCameraTarget[0],
      cameraFocusArrayObject.metamorphosisZoomOutCameraTarget[1],
      cameraFocusArrayObject.metamorphosisZoomOutCameraTarget[2],
      true
    );

    focusOffHandler("metamorphosis");
    document.body.style.cursor = "auto";
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

    focusOnHandler("foolishPleasure");
  };
  const foolishPleasureClickBackHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.foolishPleasureZoomOutCameraPosition[0],
      cameraFocusArrayObject.foolishPleasureZoomOutCameraPosition[1],
      cameraFocusArrayObject.foolishPleasureZoomOutCameraPosition[2],
      cameraFocusArrayObject.foolishPleasureZoomOutCameraTarget[0],
      cameraFocusArrayObject.foolishPleasureZoomOutCameraTarget[1],
      cameraFocusArrayObject.foolishPleasureZoomOutCameraTarget[2],
      true
    );

    focusOffHandler("foolishPleasure");
    document.body.style.cursor = "auto";
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

    focusOnHandler("cream");
  };
  const creamClickBackHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.creamZoomOutCameraPosition[0],
      cameraFocusArrayObject.creamZoomOutCameraPosition[1],
      cameraFocusArrayObject.creamZoomOutCameraPosition[2],
      cameraFocusArrayObject.creamZoomOutCameraTarget[0],
      cameraFocusArrayObject.creamZoomOutCameraTarget[1],
      cameraFocusArrayObject.creamZoomOutCameraTarget[2],
      true
    );

    focusOffHandler("cream");
    document.body.style.cursor = "auto";
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

    focusOnHandler("untitled");
  };
  const untitledClickBackHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.untitledZoomOutCameraPosition[0],
      cameraFocusArrayObject.untitledZoomOutCameraPosition[1],
      cameraFocusArrayObject.untitledZoomOutCameraPosition[2],
      cameraFocusArrayObject.untitledZoomOutCameraTarget[0],
      cameraFocusArrayObject.untitledZoomOutCameraTarget[1],
      cameraFocusArrayObject.untitledZoomOutCameraTarget[2],
      true
    );

    focusOffHandler("untitled");
    document.body.style.cursor = "auto";
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

    focusOnHandler("inflatableLeather");
  };
  const inflatableLeatherClickBackHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.inflatableLeatherZoomOutCameraPosition[0],
      cameraFocusArrayObject.inflatableLeatherZoomOutCameraPosition[1],
      cameraFocusArrayObject.inflatableLeatherZoomOutCameraPosition[2],
      cameraFocusArrayObject.inflatableLeatherZoomOutCameraTarget[0],
      cameraFocusArrayObject.inflatableLeatherZoomOutCameraTarget[1],
      cameraFocusArrayObject.inflatableLeatherZoomOutCameraTarget[2],
      true
    );

    focusOffHandler("inflatableLeather");
    document.body.style.cursor = "auto";
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

    focusOnHandler("edgeStools");
  };
  const edgeStoolsClickBackHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.edgeStoolsZoomOutCameraPosition[0],
      cameraFocusArrayObject.edgeStoolsZoomOutCameraPosition[1],
      cameraFocusArrayObject.edgeStoolsZoomOutCameraPosition[2],
      cameraFocusArrayObject.edgeStoolsZoomOutCameraTarget[0],
      cameraFocusArrayObject.edgeStoolsZoomOutCameraTarget[1],
      cameraFocusArrayObject.edgeStoolsZoomOutCameraTarget[2],
      true
    );

    focusOffHandler("edgeStools");
    document.body.style.cursor = "auto";
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

    focusOnHandler("wallObjects");
  };
  const wallObjectsClickBackHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.wallObjectsZoomOutCameraPosition[0],
      cameraFocusArrayObject.wallObjectsZoomOutCameraPosition[1],
      cameraFocusArrayObject.wallObjectsZoomOutCameraPosition[2],
      cameraFocusArrayObject.wallObjectsZoomOutCameraTarget[0],
      cameraFocusArrayObject.wallObjectsZoomOutCameraTarget[1],
      cameraFocusArrayObject.wallObjectsZoomOutCameraTarget[2],
      true
    );

    focusOffHandler("wallObjects");
    document.body.style.cursor = "auto";
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

    focusOnHandler("ambienceOfLight");
  };
  const ambienceOfLightClickBackHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.ambienceOfLightZoomOutCameraPosition[0],
      cameraFocusArrayObject.ambienceOfLightZoomOutCameraPosition[1],
      cameraFocusArrayObject.ambienceOfLightZoomOutCameraPosition[2],
      cameraFocusArrayObject.ambienceOfLightZoomOutCameraTarget[0],
      cameraFocusArrayObject.ambienceOfLightZoomOutCameraTarget[1],
      cameraFocusArrayObject.ambienceOfLightZoomOutCameraTarget[2],
      true
    );

    focusOffHandler("ambienceOfLight");
    document.body.style.cursor = "auto";
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

  // TE Banner
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

  // Go back to the initial position & target
  const worksClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.worksInitialCameraPosition[0],
      cameraFocusArrayObject.worksInitialCameraPosition[1],
      cameraFocusArrayObject.worksInitialCameraPosition[2],
      cameraFocusArrayObject.worksInitialCameraTarget[0],
      cameraFocusArrayObject.worksInitialCameraTarget[1],
      cameraFocusArrayObject.worksInitialCameraTarget[2],
      true
    );
  };

  // Go to the designer banners overview position & target
  const designerBannersClickHandler = () => {
    cameraControlsRef.current.setLookAt(
      cameraFocusArrayObject.designerbannersCameraPosition[0],
      cameraFocusArrayObject.designerbannersCameraPosition[1],
      cameraFocusArrayObject.designerbannersCameraPosition[2],
      cameraFocusArrayObject.designerbannersCameraTarget[0],
      cameraFocusArrayObject.designerbannersCameraTarget[1],
      cameraFocusArrayObject.designerbannersCameraTarget[2],
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
        onClickBackMetamorphosis={metamorphosisClickBackHandler}
        isFocusedMetamorphosis={isFocused.metamorphosis}
        onClickFoolishPleasure={foolishPleasureClickHandler}
        onClickBackFoolishPleasure={foolishPleasureClickBackHandler}
        isFocusedFoolishPleasure={isFocused.foolishPleasure}
        onClickCream={creamClickHandler}
        onClickBackCream={creamClickBackHandler}
        isFocusedCream={isFocused.cream}
        onClickUntitled={untitledClickHandler}
        onClickBackUntitled={untitledClickBackHandler}
        isFocusedUntitled={isFocused.untitled}
      />

      <WorksSM
        bakedTexture={bakedTexture}
        onClickInflatableLeather={inflatableLeatherClickHandler}
        onClickBackInflatableLeather={inflatableLeatherClickBackHandler}
        isFocusedInflatableLeather={isFocused.inflatableLeather}
        onClickEdgeStools={edgeStoolsClickHandler}
        onClickBackEdgeStools={edgeStoolsClickBackHandler}
        isFocusedEdgeStools={isFocused.edgeStools}
        onClickWallObjects={wallObjectsClickHandler}
        onClickBackWallObjects={wallObjectsClickBackHandler}
        isFocusedWallObjects={isFocused.wallObjects}
      />

      <WorksTE
        bakedTexture={bakedTexture}
        onClickAmbienceOfLight={ambienceOfLightClickHandler}
        onClickBackAmbienceOfLight={ambienceOfLightClickBackHandler}
        isFocusedAmbienceOfLight={isFocused.ambienceOfLight}
      />

      <Banners
        bakedTexture={bakedTexture}
        onClickExhibitionBanner={exhibitionBannerClickHandler}
        onClickJBBanner={JBBannerClickHandler}
        onClickSMBanner={SMBannerClickHandler}
        onClickTEBanner={TEBannerClickHandler}
      />

      <Stickers
        onClickExhibitionBanner={exhibitionBannerClickHandler}
        onClickWorks={worksClickHandler}
        onClickDesignerBanners={designerBannersClickHandler}
      />
    </>
  );
}
