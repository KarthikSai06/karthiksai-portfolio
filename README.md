# Olha Lazarieva · Creative Designer - Extracted Source Code & 3D Assets

This directory contains the authentic, unminified source code, 3D models, shaders, and styles extracted directly from [https://olhalazarieva.com/](https://olhalazarieva.com/).

---

## Directory Structure

```
olhalazarieva-source-code/
├── public/
│   ├── models/
│   │   └── final-scene.glb           # The 3D room model (1.42MB)
│   └── img/
│       ├── beam_linear_1024x2048.png # Linear beam light texture
│       ├── texture.png               # Main textured sphere map
│       └── texture-services.png      # Services sphere map
├── src/
│   ├── components/
│   │   ├── About/                    # About section with sticky pinning
│   │   ├── Animation/                # CopyContext, AnimatedLink, PhysicsText, RevealLines
│   │   ├── Awards/                   # Awards showcases & recognitions
│   │   ├── Footer/                   # Footer layout
│   │   ├── FormSection/              # Contact form & budget radio tabs
│   │   ├── Header/                   # Difference mix-blend-mode navigation
│   │   ├── Hero/                     # Rolling odometer digits & character split text
│   │   ├── Layouts/                  # Base Layout wrappers
│   │   ├── Loader/                   # 3D CameraOrbit & TexturedSphere shader
│   │   ├── MainPage/                 # Main page assembling all sections
│   │   ├── ProjectRoom/              # 3D Canvas room (final-scene.glb, beam, slides)
│   │   ├── Projects/                 # Case study project templates
│   │   └── ServicesSection/          # Expanding accordion services blocks
│   ├── AnimatedRoutes.jsx
│   ├── App.jsx
│   ├── RouteScrollTop.jsx
│   ├── Time.jsx
│   ├── olha.css                      # Extracted production CSS stylesheet
│   └── index.js
├── sourcemap.json                    # Full original source map (5.96MB)
└── package.json
```

---

## Key Technologies & Libraries Used
- **React 18**
- **Three.js** & **@react-three/fiber** & **@react-three/drei**
- **GSAP** & **ScrollTrigger**
- **@studio-freight/react-lenis** (Smooth inertia scroll)
- **Framer Motion**
- **React Router DOM**
