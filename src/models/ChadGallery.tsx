/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { ModelProps } from "types/model";
import { loadModel } from "services/loader";
import { useTrimeshCollision } from "services/collision";
import { BufferGeometry } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Tube: THREE.Mesh;
    COLLIDERS: THREE.Mesh;
    LEVEL3: THREE.Mesh;
    LEVEL2: THREE.Mesh;
    LEVEL1: THREE.Mesh;
    LEVEL3RAIL1: THREE.Mesh;
    LEVEL3RAIL2: THREE.Mesh;
    STAIR1: THREE.Mesh;
    STAIR2: THREE.Mesh;
    LEVEL2RAIL1: THREE.Mesh;
    LEVEL2RAIL2: THREE.Mesh;
    STAIR3: THREE.Mesh;
    STAIR4: THREE.Mesh;
    LEVEL1RAIL1: THREE.Mesh;
    LEVEL1RAIL2: THREE.Mesh;
  };
  materials: {
    Mat: THREE.MeshStandardMaterial;
    ["Mat.1"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: ModelProps) {
  const { useEnvStore } = props;

  const setLoading = useEnvStore((st) => st.setLoading);
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useLoader<GLTFResult>(
    GLTFLoader,
    "https://d27rt3a60hh1lx.cloudfront.net/models/ChadGallery11/ChadGallery11.glb",
    loadModel(setLoading)
  );

  useEffect(() => {
    if (group.current) {
      group.current.traverse((obj) => (obj.frustumCulled = false));
    }
  }, []);

  useTrimeshCollision(
    (nodes.COLLIDERS.geometry as BufferGeometry)
      .clone()
      .translate(0, -0.005, 0)
      .scale(80, 80, 80)
  );

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[80, 80, 80]}>
        <group position={[0, -0.005, 0]}>
          <mesh
            material={nodes.Cube.material}
            geometry={nodes.Cube.geometry}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[2, 2, 2]}
          />
          <mesh
            material={nodes.Tube.material}
            geometry={nodes.Tube.geometry}
            rotation={[Math.PI / 2, 0, -Math.PI]}
          />
          <mesh
            material={nodes.Tube.material}
            geometry={nodes.Tube.geometry}
            rotation={[Math.PI / 2, 0, -Math.PI]}
          />
          <mesh material={materials.Mat} geometry={nodes.LEVEL3.geometry} />
          <mesh material={materials.Mat} geometry={nodes.LEVEL2.geometry} />
          <mesh material={materials.Mat} geometry={nodes.LEVEL1.geometry} />
          <mesh
            material={materials["Mat.1"]}
            geometry={nodes.LEVEL3RAIL1.geometry}
          />
          <mesh
            material={materials["Mat.1"]}
            geometry={nodes.LEVEL3RAIL2.geometry}
          />
          <mesh
            material={materials["Mat.1"]}
            geometry={nodes.STAIR1.geometry}
          />
          <mesh
            material={materials["Mat.1"]}
            geometry={nodes.STAIR2.geometry}
          />
          <mesh
            material={materials["Mat.1"]}
            geometry={nodes.LEVEL2RAIL1.geometry}
          />
          <mesh
            material={materials["Mat.1"]}
            geometry={nodes.LEVEL2RAIL2.geometry}
          />
          <mesh
            material={materials["Mat.1"]}
            geometry={nodes.STAIR3.geometry}
          />
          <mesh
            material={materials["Mat.1"]}
            geometry={nodes.STAIR4.geometry}
          />
          <mesh
            material={materials["Mat.1"]}
            geometry={nodes.LEVEL1RAIL1.geometry}
          />
          <mesh
            material={materials["Mat.1"]}
            geometry={nodes.LEVEL1RAIL2.geometry}
          />
        </group>
      </group>
    </group>
  );
}
