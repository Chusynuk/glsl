#ifdef GL_ES
precision highp float;
#endif

// declaration diferents uniforms
uniform vec2 u_resolution;
uniform float u_quant;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec4 c1;
uniform vec4 c2;

#define pi 3.14159235659

// declaring the function def, but its been assigned below
float def(vec2 st, float f);
void main(void) {

  // cartesian coordinates
  vec2 st = gl_FragCoord.xy / u_resolution;

  // define a point
  vec2 p = vec2(0.5) - st;

  // angle
  float a = atan(p.x, p.y);

  // radius
  float rad = length(p);

  float e = def(st, pi);
  float e2 = def(st, 0.0);
  float e3 = abs(sin(e2 * rad * pi));

  // COLOR
  vec4 col1 = vec4(0.5, 0.9, 0.9, 1.0);
  vec4 col2 = vec4(0.9, 0.5, 0.5, 1.0);
  vec4 col3 = vec4(0.8, 0.8, 0.2, 1.0);

  // Mixin colors
  vec4 fin = col1 * e * col1.a + col2 * e2 * col2.a + col3 * e3 * col3.a;

  // Final variable
  gl_FragColor = fin * 2.0;
}

// defining function behaviour
float def(vec2 st, float f) {

  // quantity of points on the patterns
  float u_quant = 5.0;

  // inicialize the form value
  float e = 0.0;

  // for for all points
  for (int i = 0; i < u_quant; i++) {

    // creating diferent points
    vec2 p = vec2(0.5, i / u_quant) - st;

    // angle definition again
    float a = atan(p.x, p.y);

    // radius definition again
    float rad = length(p);

    e += sin(rad * pi * 12.0 + f + time + abs(sin(p.x * pi * 15.0))) * 0.5;

    // depth for the texture
    e += sin(e * pi * 2.0) * 0.3;
  }

  return e / u_quant * 2.0;
}
