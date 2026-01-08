"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Float, Grid } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";

function CyberCity({ count = 800 }) {
    const mesh = useRef<THREE.InstancedMesh | null>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const done = useRef(false); // Optimization ref

    const buildings = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 100;
            const z = (Math.random() - 0.5) * 80;

            const isSkyscraper = Math.random() > 0.9;
            const w = isSkyscraper ? 1 + Math.random() : 1 + Math.random() * 3;
            const h = isSkyscraper ? 5 + Math.random() * 15 : 0.5 + Math.random() * 3;
            const d = isSkyscraper ? 1 + Math.random() : 1 + Math.random() * 3;

            temp.push({ x, z, w, h, d });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;

        const time = state.clock.getElapsedTime();
        // Intro animation duration
        if (time > 4) {
            if (!done.current) {
                mesh.current.computeBoundingSphere();
                done.current = true;
            }
            return; // Stop updating after intro is done (optimization)
        }

        buildings.forEach((b, i) => {
            dummy.position.set(b.x, b.h / 2, b.z);

            // Growth Animation: Scale up based on distance from center
            const dist = Math.sqrt(b.x * b.x + b.z * b.z);
            const delay = dist * 0.015; // Faster ripple (Instant feel)
            const progress = THREE.MathUtils.clamp((time - delay) * 2, 0, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // Cubic out

            dummy.scale.set(b.w, b.h * ease, b.d);
            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);

            // Optional: Set color/emissive if using InstancedMesh with custom attributes/colors?
            // Standard material doesn't support per-instance emissive easily without custom shader or instanceColor.
            // keeping it simple scaling for now to avoid complexity/crashes.
        });
        mesh.current.instanceMatrix.needsUpdate = true;
        // mesh.current.computeBoundingSphere(); // Moved to post-intro block
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                color="#2a0a0a"
                emissive="#ff2222"
                emissiveIntensity={0.15}
                roughness={0.4}
                metalness={0.2}
            />
        </instancedMesh>
    );
}

function TrafficStreams({ count = 100 }) {
    const mesh = useRef<THREE.InstancedMesh | null>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const streams = useMemo(() => {
        return new Array(count).fill(0).map(() => ({
            x: (Math.random() - 0.5) * 100,
            y: 0.5 + Math.random() * 4,
            zOffset: Math.random() * 100,
            speed: 0.2 + Math.random() * 0.8,
            length: 1 + Math.random() * 4
        }))
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;
        const t = state.clock.getElapsedTime();

        streams.forEach((s, i) => {
            const zPos = ((t * s.speed * 30 + s.zOffset) % 120) - 60;
            dummy.position.set(s.x, s.y, zPos);
            dummy.scale.set(0.15, 0.15, s.length);
            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
        // mesh.current.computeBoundingSphere(); // Removed per-frame call
    });

    useEffect(() => {
        if (mesh.current) {
            mesh.current.computeBoundingSphere();
        }
    }, []);

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="#ff4040" toneMapped={false} />
        </instancedMesh>
    );
}

function InteractiveLights() {
    const spotLightRef = useRef<THREE.SpotLight>(null);
    // Use useState to guarantee the target exists on first render and is stable
    const [target] = useState(() => new THREE.Object3D());

    useFrame((state) => {
        if (!spotLightRef.current) return;

        const targetX = state.pointer.x * 40;
        const targetZ = -state.pointer.y * 20;

        // Smooth movement for light source
        spotLightRef.current.position.x += (targetX - spotLightRef.current.position.x) * 0.1;
        spotLightRef.current.position.z += (targetZ - spotLightRef.current.position.z + 20) * 0.1;

        // Directly update target position
        target.position.set(targetX, 0, targetZ - 10);
        target.updateMatrixWorld();
    });

    return (
        <>
            <spotLight
                ref={spotLightRef}
                position={[0, 40, 20]}
                angle={0.45}
                penumbra={0.5}
                intensity={50}
                color="#ffaaaa"
                castShadow
                target={target}
            />
            {/* Explicitly add target to scene graph */}
            <primitive object={target} />
        </>
    );
}

function CameraRig() {
    const phase = useRef<"intro" | "live">("intro");
    const progress = useRef(0);

    const startPos = useMemo(() => new THREE.Vector3(0, 90, 0), []);
    const endPos = useMemo(() => new THREE.Vector3(0, 25, 50), []);

    useFrame((state, delta) => {
        const camera = state.camera;

        if (phase.current === "intro") {
            progress.current += delta / 2.5;
            const t = Math.min(progress.current, 1);
            const ease = 1 - Math.pow(1 - t, 4);

            camera.position.lerpVectors(startPos, endPos, ease);
            camera.rotation.z = THREE.MathUtils.lerp(0.2, 0, ease);
            camera.lookAt(0, 5 * ease, 0);

            if (t === 1) {
                phase.current = "live";
            }
            return;
        }

        // LIVE MODE
        camera.position.x += (state.pointer.x * 2 - camera.position.x) * 0.05;
        camera.position.z += ((50 + state.pointer.y * 2) - camera.position.z) * 0.03;
        camera.lookAt(0, 5, 0);
    });

    return null;
}

export default function HeroScene3D() {
    return (
        <div className="absolute inset-0 z-0 bg-black">
            <Canvas
                shadows
                dpr={[1, 2]}
                frameloop="always"
                camera={{ position: [0, 90, 0], fov: 45 }}
            >
                <color attach="background" args={["#030000"]} />

                {/* Stable Lighting Setup (No Environment Preset) */}
                <ambientLight intensity={0.5} color="#401010" />
                <hemisphereLight intensity={0.9} color="#ffaaaa" groundColor="#050000" />
                <InteractiveLights />

                {/* City Elements */}
                <group rotation={[0, 0, 0]}>
                    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.1}>
                        <CyberCity count={800} />
                    </Float>
                    <TrafficStreams count={150} />
                </group>

                {/* Ground */}
                <Grid
                    position={[0, -0.1, 0]}
                    sectionSize={5}
                    sectionColor="#ff0000"
                    sectionThickness={1}
                    cellSize={1}
                    cellColor="#1a0505"
                    cellThickness={0.5}
                    infiniteGrid
                    fadeDistance={80}
                    fadeStrength={5}
                />

                {/* Cinematic Effects */}
                <EffectComposer enableNormalPass={false}>
                    <Bloom
                        luminanceThreshold={1}
                        intensity={1.2}
                        radius={0.4}
                        mipmapBlur
                    />
                    <Noise opacity={0.05} />
                    <Vignette eskil={false} offset={0.1} darkness={1.0} />
                </EffectComposer>

                <CameraRig />
                <fog attach="fog" args={['#030000', 10, 90]} />
            </Canvas>
        </div>
    );
}
