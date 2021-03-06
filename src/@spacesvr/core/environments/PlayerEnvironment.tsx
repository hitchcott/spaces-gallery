import React, { useRef } from "react";
import styled from "@emotion/styled";
import PauseMenu from "@spacesvr/overlays/PauseMenu/";
import Crosshair from "../ui/Crosshair";
import { SceneComponent } from "@spacesvr/core/types/scene";
import { getEnvironmentStore } from "@spacesvr/core/stores/environment";
import LoadingScreen from "@spacesvr/overlays/LoadingScreen";
import { ContainerProps } from "react-three-fiber/targets/shared/web/ResizeContainer";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  canvas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    outline: 0;
  }
`;

type EnvironmentProps = {
  scene: SceneComponent;
  title?: string;
  artist?: string;
  link?: string;
};

const defaultCanvasProps: Partial<ContainerProps> = {
  shadowMap: true,
  gl: { alpha: false },
  camera: { position: [0, 2, 0], near: 0.01, far: 100 },
};

const PlayerEnvironment = (props: EnvironmentProps) => {
  const { scene: Scene, artist, title, link } = props;

  // create container ref and pass into environment store
  const container = useRef<HTMLDivElement>(null);
  const useStore = getEnvironmentStore(() => ({ container }));

  return (
    <Container ref={container}>
      <Scene useEnvStore={useStore} defaultCanvasProps={defaultCanvasProps} />
      <LoadingScreen />
      <PauseMenu
        useEnvStore={useStore}
        artist={artist}
        link={link}
        title={title}
      />
      <Crosshair />
    </Container>
  );
};

export default PlayerEnvironment;
