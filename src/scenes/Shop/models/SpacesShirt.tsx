/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from "three";
import React, { useCallback, useRef } from "react";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { isMobile } from "react-device-detect";
import { useGLTF } from "@react-three/drei";

type GLTFResult = GLTF & {
  nodes: {
    Body_Front1: THREE.Mesh;
  };
  materials: {
    ["New Shirt"]: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://spaces-gallery-assets.s3-us-west-1.amazonaws.com/models/SpacesShop/shirt.glb";

type ShirtProps = {
  overlay: boolean;
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SpacesShirt(props: ShirtProps) {
  const { overlay, setOverlay } = props;

  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;

  const onClick = useCallback(() => {
    setOverlay(!overlay);
  }, [overlay]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[60, 60, 60]}>
        {isMobile ? (
          <mesh
            onPointerDown={onClick}
            material={materials["New Shirt"]}
            geometry={nodes.Body_Front1.geometry}
          />
        ) : (
          <mesh
            onClick={onClick}
            material={materials["New Shirt"]}
            geometry={nodes.Body_Front1.geometry}
          />
        )}
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
