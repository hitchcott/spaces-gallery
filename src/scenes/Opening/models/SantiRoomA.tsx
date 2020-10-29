/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from "three";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useFrame } from "react-three-fiber";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import { MeshBasicMaterial } from "three";
import { useGLTF } from "@react-three/drei";

type GLTFResult = GLTF & {
  nodes: {
    display_l: THREE.Mesh;
    screen_l: THREE.Mesh;
    display_r: THREE.Mesh;
    screen_r: THREE.Mesh;
    Room: THREE.Mesh;
    Gallery_cut: THREE.Mesh;
    New_screen: THREE.Mesh;
    Human_mesh: THREE.SkinnedMesh;
    Spinner: THREE.Mesh;
    Treadmill: THREE.Mesh;
    Armature_rootJoint: THREE.Bone;
  };
  materials: {
    Room: THREE.MeshStandardMaterial;
    Display: THREE.MeshStandardMaterial;
    ["GALLERY.FULL"]: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
  };
};

const FILE_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/content/opening/santi/room_a/room_a.glb";

type ActionName = "Walk";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function Model(
  props: JSX.IntrinsicElements["group"] & {
    setGLTF: Dispatch<SetStateAction<GLTF | undefined>>;
  }
) {
  const { setGLTF } = props;

  const humanMaterial = useMemo(() => new MeshBasicMaterial(), []);
  const group = useRef<THREE.Group>();
  const gltf = useGLTF(FILE_URL) as GLTFResult;
  const { nodes, materials, animations, scene } = gltf;
  const actions = useRef<GLTFActions>();
  const [mixer] = useState(() => new THREE.AnimationMixer(scene));
  useFrame((state, delta) => mixer.update(delta));
  useEffect(() => {
    actions.current = {
      Walk: mixer.clipAction(animations[0]),
    };
    actions.current["Walk"].play();
    return () => animations.forEach((clip) => mixer.uncacheClip(clip));
  }, []);

  useEffect(() => {
    if (group.current) {
      group.current.traverse((obj) => (obj.frustumCulled = false));
    }

    setGLTF(gltf);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[1, 1, 1]} position={[0, 0.5, 0]}>
        <mesh
          material={materials.Room}
          geometry={nodes.display_l.geometry}
          position={[-3.075846, 2.273903, -48.671379]}
          rotation={[0.122314, 0.892506, 0]}
          scale={[1.522987, 1.522985, 1.522985]}
        />
        <mesh
          material={materials.Display}
          geometry={nodes.screen_l.geometry}
          position={[-3.075846, 2.273903, -48.671379]}
          rotation={[0.122314, 0.892506, -Math.PI / 2]}
          scale={[3.83533, 3.835333, 3.83533]}
        />
        <mesh
          material={materials.Room}
          geometry={nodes.display_r.geometry}
          position={[4.3735, 2.149279, -48.505623]}
          rotation={[0.122314, -0.49195, 0]}
          scale={[1.522986, 1.522985, 1.522986]}
        />
        <mesh
          material={materials.Display}
          geometry={nodes.screen_r.geometry}
          position={[4.3735, 2.149279, -48.505623]}
          rotation={[0.122314, -0.49195, -Math.PI / 2]}
          scale={[3.83533, 3.83533, 3.83533]}
        />
        <mesh material={materials.Room} geometry={nodes.Room.geometry} />
        <mesh
          material={materials["GALLERY.FULL"]}
          geometry={nodes.Gallery_cut.geometry}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.01, 0.01, 0.01]}
        />
        <mesh
          material={materials.Screen}
          geometry={nodes.New_screen.geometry}
        />
        <group
          position={[0, 5.599249, -45.647251]}
          rotation={[-0.278667, 0, 0]}
          scale={[2.961422, 2.961423, 2.961423]}
        >
          <primitive object={nodes.Armature_rootJoint} />
          <skinnedMesh
            material={humanMaterial}
            geometry={nodes.Human_mesh.geometry}
            skeleton={nodes.Human_mesh.skeleton}
          />
        </group>
        <mesh material={materials.Room} geometry={nodes.Spinner.geometry} />
        <mesh material={materials.Room} geometry={nodes.Treadmill.geometry} />
      </group>
    </group>
  );
}

useGLTF.preload(FILE_URL);
