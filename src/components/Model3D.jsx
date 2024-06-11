// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import SplineLoader from "@splinetool/loader";

// const Model3D = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // camera
//     const camera = new THREE.OrthographicCamera(
//       window.innerWidth / -2,
//       window.innerWidth / 2,
//       window.innerHeight / 2,
//       window.innerHeight / -2,
//       -50000,
//       10000
//     );
//     camera.position.set(0, 0, 0);
//     camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

//     // scene
//     const scene = new THREE.Scene();

//     // renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.shadowMap.enabled = true;
//     renderer.shadowMap.type = THREE.PCFShadowMap;
//     renderer.setClearColor("#2d2e32", 1);
//     document.body.appendChild(renderer.domElement);

//     // orbit controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.125;

//     // load spline scene
//     const loader = new SplineLoader();
//     loader.load(
//       "https://prod.spline.design/PO5wD7OEQPVKgFMi/scene.splinecode",
//       (splineScene) => {
//         scene.add(splineScene);
//       }
//     );

//     const onWindowResize = () => {
//       camera.left = window.innerWidth / -2;
//       camera.right = window.innerWidth / 2;
//       camera.top = window.innerHeight / 2;
//       camera.bottom = window.innerHeight / -2;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     const animate = (time) => {
//       controls.update();
//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };

//     window.addEventListener("resize", onWindowResize);
//     animate();

//     return () => {
//       window.removeEventListener("resize", onWindowResize);
//       document.body.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
// };

// export default Model3D;
