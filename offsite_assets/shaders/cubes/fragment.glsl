precision highp float;

uniform float width;
uniform float height;

varying vec3 vColor;

void main() {
  gl_FragColor = vec4(vColor, 1.0);
}
