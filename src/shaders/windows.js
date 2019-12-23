import { createShaderCanvas } from "react-shader-canvas";

const shader = props =>
  `#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 mouse;


void main(){
    vec2 coord = 6.0 * gl_FragCoord.xy / u_resolution;

    coord += vec2(0.7 / sin(coord.y + u_time + 0.3) + 0.8, 0.4 / sin(coord.x + u_time + 0.3) + 1.6);
    vec3 color = vec3(0.5 * sin(coord.x) + 0.5, 0.5 * sin(coord.y) + 0.5, sin(coord.x + coord.y));

    gl_FragColor = vec4(color, 1.0);
}`;

const windowsShader = createShaderCanvas(shader);

export default windowsShader;