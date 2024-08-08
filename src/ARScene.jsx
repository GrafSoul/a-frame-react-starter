import 'aframe';

const ARScene = () => {
  return (
    <a-scene>
      <a-camera>
        <a-cursor
          gltf-model="/photo-camera.glb"
          position="0 0 -1"
          scale="2 2 2"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 5000"></a-cursor>
      </a-camera>
    </a-scene>
  );
};

export default ARScene;
