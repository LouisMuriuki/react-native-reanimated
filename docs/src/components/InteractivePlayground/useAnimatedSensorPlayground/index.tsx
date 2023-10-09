import React, { useEffect, useMemo, useState } from 'react';
import Example from './Example';

import { Range, SelectOption } from '..';

import { ValueRotation } from 'react-native-reanimated';
import * as THREE from 'three';

const g_0 = 9.80665; // m/s^2
const INTERVAL = 500; // ms

const initialState = {
  x: 0,
  y: 0,
  z: 0,
  sensorType: 'GRAVITY',
  measurement: {
    current: null,
    previous: null,
    currentX: null,
    previousX: null,
    currentY: null,
    previousY: null,
    currentZ: null,
    previousZ: null,
  },
};

function degreeToRadian(x: number, y: number, z: number) {
  const radX = THREE.MathUtils.degToRad(x);
  const radY = THREE.MathUtils.degToRad(y);
  const radZ = THREE.MathUtils.degToRad(z);
  return { radX, radY, radZ };
}

function getGravityRotationVector(x: number, y: number, z: number) {
  const { radX, radY, radZ } = degreeToRadian(x, y, z);

  const euler = new THREE.Euler(radX, radY, radZ, 'XYZ');
  const rotationMatrix = new THREE.Matrix4().makeRotationFromEuler(euler);
  const gravityVector = new THREE.Vector3(0, -g_0, 0);

  return gravityVector.applyMatrix4(rotationMatrix);
}

function formatGravityCode(rotationVector: THREE.Vector3) {
  return `
  { 
    "interfaceOrientation": 0,
    "x": ${rotationVector.x.toFixed(2)},
    "y": ${rotationVector.y.toFixed(2)},
    "z": ${rotationVector.z.toFixed(2)}
  }
  `;
}

function getRotation(
  x: number,
  y: number,
  z: number
): Omit<ValueRotation, 'interfaceOrientation'> {
  const { radX, radY, radZ } = degreeToRadian(x, y, z);
  const euler = new THREE.Euler(radX, radY, radZ, 'XYZ');
  const quaternion = new THREE.Quaternion();
  quaternion.setFromEuler(euler);

  return {
    pitch: euler.x,
    roll: euler.y,
    yaw: euler.z,
    qw: quaternion.w,
    qx: quaternion.x,
    qy: quaternion.y,
    qz: quaternion.z,
  };
}

function formatRotationCode({
  pitch,
  roll,
  yaw,
  qw,
  qx,
  qy,
  qz,
}: Omit<ValueRotation, 'interfaceOrientation'>) {
  return `
  { 
    "interfaceOrientation": 0,
    "pitch": ${(-pitch).toFixed(2)},
    "roll": ${roll.toFixed(2)},
    "yaw": ${yaw.toFixed(2)},
    "qw": ${qw.toFixed(2)},
    "qx": ${qx.toFixed(2)},
    "qy": ${qy.toFixed(2)},
    "qz": ${qz.toFixed(2)}
  }
  `;
}

function getGyroscope(dx: number, dy: number, dz: number, dt: number) {
  const { radX, radY, radZ } = degreeToRadian(dx, dy, dz);

  return {
    x: (1000 * radX) / dt,
    y: (1000 * radY) / dt,
    z: (1000 * radZ) / dt,
  };
}

function formatGyroscopeCode({ x, y, z }: { x: number; y: number; z: number }) {
  return `
  { 
    "interfaceOrientation": 0,
    "x": ${x.toFixed(2)},
    "y": ${y.toFixed(2)},
    "z": ${z.toFixed(2)}
  }
  `;
}

export default function useAnimatedSensorPlayground() {
  const [x, setX] = useState(initialState.x);
  const [y, setY] = useState(initialState.y);
  const [z, setZ] = useState(initialState.z);
  const [sensorType, setSensorType] = useState(initialState.sensorType);
  const [measurement, setMeasurement] = useState(initialState.measurement);

  const resetOptions = () => {
    setX(initialState.x);
    setY(initialState.y);
    setZ(initialState.z);
    setMeasurement(initialState.measurement);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const loop = () => {
      const now = performance.now();
      setMeasurement((prev) => ({
        current: now,
        previous: prev.current,
        currentX: x,
        previousX: prev.currentX,
        currentY: y,
        previousY: prev.currentY,
        currentZ: z,
        previousZ: prev.currentZ,
      }));
      timer = setTimeout(loop, INTERVAL);
    };
    loop();

    return () => {
      clearTimeout(timer);
    };
  }, [x, y, z]);

  const controls = (
    <>
      <SelectOption
        label="Sensor type"
        value={sensorType}
        onChange={(option) => setSensorType(option)}
        options={[
          'ACCELEROMETER',
          'GYROSCOPE',
          'GRAVITY',
          'MAGNETIC_FIELD',
          'ROTATION',
        ]}
        disabledOptions={['ACCELEROMETER', 'MAGNETIC_FIELD']}
      />
      <Range
        label="X"
        min={-180}
        max={180}
        step={1}
        value={x}
        onChange={setX}
      />
      <Range
        label="Y"
        min={-180}
        max={180}
        step={1}
        value={y}
        onChange={setY}
      />
      <Range
        label="Z"
        min={-180}
        max={180}
        step={1}
        value={z}
        onChange={setZ}
      />
    </>
  );

  const gravityCode = formatGravityCode(getGravityRotationVector(x, y, z));
  const rotationCode = formatRotationCode(getRotation(x, y, z));
  const gyroscopeCode = formatGyroscopeCode(
    getGyroscope(
      measurement.currentX - measurement.previousX,
      measurement.currentY - measurement.previousY,
      measurement.currentZ - measurement.previousZ,
      measurement.current - measurement.previous
    )
  );

  const code = {
    GRAVITY: gravityCode,
    ROTATION: rotationCode,
    GYROSCOPE: gyroscopeCode,
  }[sensorType];

  const example = useMemo(() => <Example values={{ x, y, z }} />, [x, y, z]);

  return {
    code,
    controls,
    example,
    resetOptions,
  };
}
