import 'aframe';
import 'ar.js';

const ARScene = () => {
  return (
    <a-scene embedded vr-mode-ui="enabled: false" arjs="sourceType: webcam; debugUIEnabled: false;">
      <a-marker preset="hiro">
        <a-camera-static>
          <a-cursor
            gltf-model="https://grafsoul.github.io/a-frame-react-starter/photo-camera.glb"
            position="0 0 -1"
            scale="2 2 2"
            animation="property: rotation; to: 0 360 0; loop: true; dur: 5000"></a-cursor>
        </a-camera-static>
      </a-marker>
    </a-scene>
  );
};

export default ARScene;
