import App from './app'
const app = new App({setup, animate});


function setup(app) {

    window.onresize = app.handleResize;

    window.loader = new THREE.TextureLoader();
    window.controls = {}

    const controllers = [];

    controllers.forEach(controller => {
        controller.onChange((event) => {
            window.controls.changed = true;
        })
    })

    app.camera.position.z = config.sizes.globe * 2.85;
    app.camera.position.y = config.sizes.globe * 0;
    app.controls.enableDamping = true;
    app.controls.dampingFactor = 0.05;
    app.controls.rotateSpeed = 0.07;

    groups.main = new THREE.Group();
    groups.main.name = 'Main';

    const globe = new Globe();
    groups.main.add(globe);

    const points = new Points(window.grid);
    groups.globe.add(groups.points);

    app.scene.add(groups.main);
}

function animate(app) {
    if (window.controls.changed) {
        if (elements.globePoints) {
            elements.globePoints.material.size = config.sizes.globeDotSize;
            elements.globePoints.material.color.set(config.colors.globeDotColor);
        }

        if (elements.globe) {
            elements.globe.scale.set(
                config.scale.globeScale,
                config.scale.globeScale,
                config.scale.globeScale
            );
        }

        if (elements.lines) {
            for (let i = 0; i < elements.lines.length; i++) {
                const line = elements.lines[i];
                line.material.color.set(config.colors.globeLines);
            }
        }

        groups.map.visible = config.display.map;
        groups.markers.visible = config.display.markers;
        groups.points.visible = config.display.points;

        for (let i = 0; i < elements.markerLabel.length; i++) {
            const label = elements.markerLabel[i];
            label.visible = config.display.markerLabel;
        }

        for (let i = 0; i < elements.markerPoint.length; i++) {
            const point = elements.markerPoint[i];
            point.visible = config.display.markerPoint;
        }

        window.controls.changed = false
    }

    if (elements.lineDots) {
        for (let i = 0; i < elements.lineDots.length; i++) {
            const dot = elements.lineDots[i];
            dot.material.color.set(config.colors.globeLinesDots);
            dot.animate();
        }
    }

    if (elements.markers) {
        for (let i = 0; i < elements.markers.length; i++) {
            const marker = elements.markers[i];
            marker.point.material.color.set(config.colors.globeMarkerColor);
            marker.glow.material.color.set(config.colors.globeMarkerGlow);
            marker.label.material.map.needsUpdate = true;
            marker.animateGlow();
        }
    }

    if (animations.rotateGlobe) {
        groups.globe.rotation.y -= 0.001;
    }
}

export default {
    init: app.init,
}