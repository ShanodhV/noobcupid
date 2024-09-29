import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import * as THREE from 'three';

// Container for the hero section with particles
const HeroContainer = styled(Box)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0a0a, #1c1c1c); /* Dark space gradient */
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

// Canvas for 3D particles (stars)
const CanvasContainer = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Ensure it stays behind text */
`;

// Title and subtitle styles
const Title = styled(Typography)`
  font-size: 4rem;
  font-weight: 700;
  color: #ff4d4d; /* Neon red to stand out */
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Adjust for smaller screens */
  }
`;

const Subtitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 300;
  color: #d1d1d1; /* Softer gray for contrast */
  margin-bottom: 40px !important;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust for smaller screens */
  }
`;

// Custom button styling with glow effect
const GlowButton = styled(Button)`
  font-size: 1.2rem;
  background-color: #ff4d4d; 
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: 0px 0px 20px rgba(255, 77, 77, 0.8); /* Glowing effect */
 

  &:hover {
    background-color: #ff6f6f;
    box-shadow: 0px 0px 30px rgba(255, 110, 110, 0.8); /* Enhanced glow on hover */
  }
`;

function HeroSection() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 300; // Move the camera further back to show more particles

    // Star field geometry
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    // Create random star-like particles across the canvas
    const starCount = 8000; // Increased star count for more coverage
    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * window.innerWidth * 4; // Wider range for x-axis
      const y = (Math.random() - 0.5) * window.innerHeight * 4; // Wider range for y-axis
      const z = (Math.random() - 0.5) * 2000; // Depth for star field

      vertices.push(x, y, z);

      // Random star colors with a soft gradient
      const starColor = new THREE.Color(`hsl(${Math.random() * 360}, 100%, 80%)`);
      colors.push(starColor.r, starColor.g, starColor.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.2, // Smaller size to prevent a clustered look
      vertexColors: true,
    });

    const starField = new THREE.Points(geometry, material);
    scene.add(starField);

    // Star field movement (drifting effect)
    const animate = () => {
      requestAnimationFrame(animate);

      // Slowly move the stars forward and slightly rotate for subtle motion
      starField.position.z += 0.2; // Drift stars toward the camera
      if (starField.position.z > 2000) {
        starField.position.z = -2000; // Reset when stars go out of view
      }
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <HeroContainer
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <CanvasContainer ref={canvasRef} />
      <Box zIndex={2}>
        <Title variant="h2">
          Welcome to NoobCupid
        </Title>
        <Subtitle variant="h5">
          Building the future, one line of code at a time.
        </Subtitle>
        <GlowButton
          variant="contained"
          size="large"
          component={motion.div}
          whileHover={{ scale: 1.1, boxShadow: '0px 0px 40px rgba(255, 110, 110, 1)' }} 
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </GlowButton>
      </Box>
    </HeroContainer>
  );
}

export default HeroSection;
