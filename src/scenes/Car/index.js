import React from 'react';

import {
  ViroARScene,
  ViroMaterials,
  ViroNode,
  Viro3DObject,
  ViroLightingEnvironment,
  ViroSpotLight,
} from 'react-viro';

const createReactClass = require('create-react-class');

const CarScene = createReactClass({
  render() {
    return (
      <ViroARScene>
        <ViroLightingEnvironment
          source={require('../../assets/objects/car/garage_1k.hdr')}
        />
        <ViroNode
          position={[0, -1, -7]}
          dragType="FixedToWorld"
          onDrag={() => {}}>
          <Viro3DObject
            source={require('../../assets/objects/car/object_car.obj')}
            position={[0, 0, 0]}
            scale={[1, 1, 1]}
            type="OBJ"
            resources={[require('../../assets/objects/car/object_car_m.mtl')]}
            materials="white"
          />
        </ViroNode>

        <ViroSpotLight
          innerAngle={5}
          outerAngle={25}
          direction={[0, 0, -1]}
          position={[0, 5, 1]}
          color="#ffffff"
          castsShadow
          shadowMapSize={2048}
          shadowNearZ={2}
          shadowFarZ={7}
          shadowOpacity={0.7}
        />
      </ViroARScene>
    );
  },
});

ViroMaterials.createMaterials({
  white: {
    lightingModel: 'PBR',
    diffuseTexture: require('../../assets/objects/car/object_car_main_Base_Color.png'),
    metalnessTexture: require('../../assets/objects/car/object_car_main_Metallic.png'),
    roughnessTexture: require('../../assets/objects/car/object_car_main_Roughness.png'),
  },
});

module.exports = CarScene;
