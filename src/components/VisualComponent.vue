<template>
    <div id="main_visual">
        <img src="@/assets/images/mainVisual.jpg" alt="" id="visual_img">
        <div class="txt_box">
            <h5>Web Publisher // Frontend Engineer</h5>
            <h1>Yousang<br />portfolio</h1>
        </div>
    </div>
</template>
<script>
import * as THREE from 'three';

export default {
  components: {},
  data() {
    return {
      sketch: null,
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.mouseover();
  },
  unmounted() {},
  methods: {
    mouseover() {
      // variables
      const imageContainer = document.getElementById("main_visual");
      const imageElement = document.getElementById("visual_img");

      let easeFactor = 0.1;
      let scene, camera, renderer, planeMesh;
      let mousePosition = { x: 0.5, y: 0.5 };
      let targetMousePosition = { x: 0.5, y: 0.5 };
    //   let mouseStopTimeout;
      let aberrationIntensity = 0.0;
    //   let lastPosition = { x: 0.5, y: 0.5 };
      let prevPosition = { x: 0.5, y: 0.5 };
      let imgLoad = false;

      // shaders
      const vertexShader = `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
      `;

      const fragmentShader = `
          varying vec2 vUv;
          uniform sampler2D u_texture;
          uniform vec2 u_mouse;
          uniform vec2 u_prevMouse;
          uniform float u_aberrationIntensity;

          void main() {
              vec2 gridUV = floor(vUv * vec2(50.0, 50.0)) / vec2(50.0, 50.0);
              vec2 centerOfPixel = gridUV + vec2(1.0/50.0, 1.0/50.0);

              vec2 mouseDirection = u_mouse - u_prevMouse;

              vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
              float pixelDistanceToMouse = length(pixelToMouseDirection);
              float strength = smoothstep(0.4, 0.0, pixelDistanceToMouse);

              vec2 uvOffset = strength * - mouseDirection * 0.3;
              vec2 uv = vUv - uvOffset;

              vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
              vec4 colorG = texture2D(u_texture, uv);
              vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

              gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
          }
      `;

      function initializeScene(texture) {
        // scene creation
        scene = new THREE.Scene();

          // 이미지 크기와 동일한 캔버스를 설정하기 위해 #myImage 요소 크기 가져오기
          let imageWidth = imageElement.clientWidth || 1;  // 0이 되지 않도록 최소값 설정
        let imageHeight = imageElement.clientHeight || 1;

        let imageAspect = imageWidth / imageHeight;

        // 카메라 설정 (이미지 비율을 반영)
        camera = new THREE.PerspectiveCamera(80, imageAspect, 0.01, 10);
        camera.position.z = 1;

        // uniforms
        let shaderUniforms = {
          u_mouse: { type: "v2", value: new THREE.Vector2() },
          u_prevMouse: { type: "v2", value: new THREE.Vector2() },
          u_aberrationIntensity: { type: "f", value: 0.0 },
          u_texture: { type: "t", value: texture }
        };

        // PlaneGeometry 생성 시 이미지 비율에 맞춰 생성
        let planeGeometry;

        if (imageAspect > 1) {
          // 가로가 더 길다면 가로 기준으로 크기 조정
          planeGeometry = new THREE.PlaneGeometry(2 * imageAspect, 2);
        } else {
          // 세로가 더 길다면 세로 기준으로 크기 조정
          planeGeometry = new THREE.PlaneGeometry(2, 2 / imageAspect);
        }

        // creating a plane mesh with materials
        planeMesh = new THREE.Mesh(
          planeGeometry, // 이미지 비율에 맞는 PlaneGeometry
          new THREE.ShaderMaterial({
            uniforms: shaderUniforms,
            vertexShader,
            fragmentShader
          })
        );

        // add mesh to scene
        scene.add(planeMesh);

        // render
        renderer = new THREE.WebGLRenderer({ alpha: true }); // 배경을 투명하게 설정 가능
        renderer.setSize(imageWidth, imageHeight); // 이미지 크기에 맞게 캔버스 크기를 설정
        imgLoad = true;

        // 기존 이미지를 감추고 캔버스 추가
        imageElement.style.display = 'none';
        imageContainer.appendChild(renderer.domElement);

      }

      if (!imgLoad) {
  // 비동기적으로 이미지 로드 후 initializeScene 호출
  setTimeout(() => {
    new THREE.TextureLoader().load(
      imageElement.src,
      function (texture) {
        initializeScene(texture);
        imgLoad = true; // 이미지를 성공적으로 로드했음을 표시

        // animateScene 호출은 planeMesh가 생성된 이후에만 해야 합니다.
        animateScene();
        window.addEventListener('resize', onWindowResize);
      },
      undefined,
      function (error) {
        console.error('Error loading texture:', error);
      }
    );
  }, 100)
}


      function onWindowResize() {
        imageElement.style.display = 'block';
        // 이미지의 새로운 크기 계산
        let imageWidth = imageElement.clientWidth || 1;  // 0이 되지 않도록 방지
        let imageHeight = imageElement.clientHeight || 1;
        imageElement.style.display = 'none';

        // 이미지의 가로 세로 비율 계산
        const imageAspect = imageWidth / imageHeight;

        // 카메라와 캔버스 크기 재조정
        camera.aspect = imageAspect;
        camera.updateProjectionMatrix();
        renderer.setSize(imageWidth, imageHeight);

        // PlaneGeometry 크기도 다시 설정 (이미지 비율에 맞게)
        if (imageAspect > 1) {
          planeMesh.geometry = new THREE.PlaneGeometry(2 * imageAspect, 2);
        } else {
          planeMesh.geometry = new THREE.PlaneGeometry(2, 2 / imageAspect);
        }
      }

      // use the existing image from html in the canvas


      // animateScene();

      function animateScene() {
        requestAnimationFrame(animateScene);

        mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
        mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

        planeMesh.material.uniforms.u_mouse.value.set(
          mousePosition.x,
          1.0 - mousePosition.y
        );

        planeMesh.material.uniforms.u_prevMouse.value.set(
          prevPosition.x,
          1.0 - prevPosition.y
        );

        aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);

        planeMesh.material.uniforms.u_aberrationIntensity.value = aberrationIntensity;

        renderer.render(scene, camera);
      }

      // event listeners
      imageContainer.addEventListener("mousemove", handleMouseMove);
      imageContainer.addEventListener("mouseenter", handleMouseEnter);
      imageContainer.addEventListener("mouseleave", handleMouseLeave);

      function handleMouseMove(event) {
        easeFactor = 0.02;
        let rect = imageContainer.getBoundingClientRect();
        prevPosition = { ...targetMousePosition };

        targetMousePosition.x = (event.clientX - rect.left) / rect.width;
        targetMousePosition.y = (event.clientY - rect.top) / rect.height;

        aberrationIntensity = 1;
      }

      function handleMouseEnter(event) {
        easeFactor = 0.02;
        let rect = imageContainer.getBoundingClientRect();

        mousePosition.x = targetMousePosition.x = (event.clientX - rect.left) / rect.width;
        mousePosition.y = targetMousePosition.y = (event.clientY - rect.top) / rect.height;
      }

      function handleMouseLeave() {
        easeFactor = 0.02;
        targetMousePosition = { ...prevPosition };
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/layout/Visual.scss";
</style>