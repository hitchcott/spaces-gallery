/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    test1: THREE.Mesh;
  };
  materials: {
    test: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/SpacesVR2-1604639915/spacesvr_01.glb";

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;
  return (
    <group ref={group} {...props}>
      <group>
        <mesh
          material={materials.test}
          geometry={nodes.test1.geometry}
          name="test1"
          position={[-0.0499, 1.5157, -14.6316]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
