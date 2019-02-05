#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 mouse;

#define pi 3.14159265

// vec3 colorA = vec3(0.234, 0.765, 0.987);
// vec3 colorB = vec3(0.827, 0.278, 0.13);

// void main() {
//   vec3 color = vec3(0.0);

//   vec2 st = gl_FragCoord.xy / u_resolution;
//   float pct = abs(sin(u_time));

//   // Mix uses pct (a value from 0-1) to
//   // mix the two colors
//   color = mix(colorA, colorB, pct);

//   gl_FragColor = vec4(color, 1.0);
// }

void main(void) {

  vec2 st = gl_FragCoord.xy / u_resolution;

  vec2 p = vec2(0.5) - st;

  // radius
  float radius = length(p) * 3.0;
  // angle

  float angle = atan(p.x, p.y);

  float e = sin(angle * 5.0 * u_time);

  float r = e;
  float g = e;
  float b = e;

  gl_FragColor = vec4(r, g, b, 1.0);
}