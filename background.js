// Main Particles.js Configuration
const particlesConfig = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#60a5fa'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#60a5fa',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'window',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        }
    },
    retina_detect: true
};

// Projects Section Particles Configuration
const projectsParticlesConfig = {
    ...particlesConfig,
    particles: {
        ...particlesConfig.particles,
        number: {
            value: 40,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#60a5fa'
        },
        size: {
            value: 4,
            random: true
        },
        move: {
            speed: 1.5
        }
    }
};

// Contact Section Particles Configuration
const contactParticlesConfig = {
    ...particlesConfig,
    particles: {
        ...particlesConfig.particles,
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#60a5fa'
        },
        size: {
            value: 3,
            random: true
        },
        move: {
            speed: 1
        }
    }
};

// Initialize all particle effects
window.addEventListener('load', () => {
    // Main particles
    particlesJS('particles-js', particlesConfig);
    
    // Projects section particles
    particlesJS('projects-particles-js', projectsParticlesConfig);
    
    // Contact section particles
    particlesJS('contact-particles-js', contactParticlesConfig);
    
    // Initialize 3D background
    new Background3D();
});

// Three.js Animation
class Background3D {
    constructor() {
        this.container = document.getElementById('three-container');
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.objects = [];

        this.init();
    }

    init() {
        // Setup renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        // Camera position
        this.camera.position.z = 30;

        // Create objects
        this.createObjects();

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize(), false);

        // Start animation
        this.animate();
    }

    createObjects() {
        // Create multiple floating spheres
        for (let i = 0; i < 15; i++) {
            const geometry = new THREE.SphereGeometry(Math.random() * 1 + 0.5, 32, 32);
            const material = new THREE.MeshPhongMaterial({
                color: 0x60a5fa,
                transparent: true,
                opacity: 0.3,
                shininess: 100
            });
            const sphere = new THREE.Mesh(geometry, material);

            // Random position
            sphere.position.x = Math.random() * 40 - 20;
            sphere.position.y = Math.random() * 40 - 20;
            sphere.position.z = Math.random() * 40 - 20;

            // Add to scene and objects array
            this.scene.add(sphere);
            this.objects.push({
                mesh: sphere,
                rotationSpeed: Math.random() * 0.02 - 0.01,
                floatSpeed: Math.random() * 0.01,
                floatOffset: Math.random() * Math.PI * 2
            });
        }

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0x404040);
        this.scene.add(ambientLight);

        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1);
        this.scene.add(directionalLight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Animate each object
        const time = Date.now() * 0.001;
        this.objects.forEach(obj => {
            obj.mesh.rotation.x += obj.rotationSpeed;
            obj.mesh.rotation.y += obj.rotationSpeed;
            obj.mesh.position.y += Math.sin(time + obj.floatOffset) * obj.floatSpeed;
        });

        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
} 