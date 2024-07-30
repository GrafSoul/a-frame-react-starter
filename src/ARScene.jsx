import { useEffect } from 'react';
import 'aframe';

const ARScene = () => {
  useEffect(() => {}, []);

  return (
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      renderer="logarithmicDepthBuffer: true; antialias: true;"
      background="color: #ECECEC"
      environment="preset: forest"
      loading-screen="enabled: true"
      debug="true"
      stats="true"
      inspector="true"
      device-orientation-permission-ui="enabled: true"
      arjs="sourceType: webcam;"
      webxr="optionalFeatures: hit-test;">
      <a-assets>
        <a-asset-item id="gltfModel" src=""></a-asset-item>
      </a-assets>

      <a-camera position="0 1.6 0" look-controls="true"></a-camera>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>

      <a-gltf-model src="#gltfModel" position="0 0 -3" scale="0.5 0.5 0.5"></a-gltf-model>

      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>

      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  );
};

export default ARScene;
