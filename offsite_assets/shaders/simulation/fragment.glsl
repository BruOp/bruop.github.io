#define MIN_DISTANCE_FROM_ORIGIN 0.01

precision highp float;

varying vec2 vUv;

uniform float wave_speed;
uniform float damping_strength;
uniform float mouse_magnitude;
uniform float using_mouse;
uniform float draw_radius;
uniform float dx;
uniform float dy;
uniform float width;
uniform float height;
uniform vec2 mouse;

uniform sampler2D position_texture;

float when_gt(float x, float y) {
  return max(sign(x - y), 0.0);
}

vec2 when_gt(vec2 x, vec2 y) {
  return max(sign(x - y), 0.0);
}

vec2 when_lt(vec2 x, vec2 y) {
  return max(sign(y - x), 0.0);
}

float self_product(vec2 multipliers) {
  return multipliers.x * multipliers.y;
}

vec4 get_texture_values(vec2 tex_coords) {
  return texture2D(position_texture, tex_coords);
}

vec2 get_current_values(vec2 uv, vec2 is_in_bounds) {
  // Return the texture value at point uv, or if uv is out of bounds,
  // then return 0.5 for both values.
  vec2 origin = vec2(0.5, 0.5);
  return self_product(is_in_bounds) * (get_texture_values(uv).rg - origin)
          + origin;
}

vec2 fd_central(vec2 left, vec2 center, vec2 right, float dx) {
  return (right + left - (2.0 * center)) * pow(dx, -2.);
}

vec2 get_derivs(vec2 centers, vec2 offset, float dx, vec2 left_bounds, vec2 right_bounds) {
  vec2 left_uv  = vUv - offset;
  vec2 right_uv = vUv + offset;
  vec2 left_in_bounds  = when_gt(vec2(left_uv),  left_bounds);
  vec2 right_in_bounds = when_lt(vec2(right_uv), right_bounds);
  vec2 left   = get_current_values(left_uv, left_in_bounds);
  vec2 right  = get_current_values(right_uv, right_in_bounds);
  return fd_central(left, centers, right, dx);
}

vec2 get_x_derivs(vec2 centers) {
  //Use -1.0 or 2.0 when you don't care about that axis for bounding
  vec2 left_bounds = vec2(0.0, -1.0);
  vec2 right_bounds = vec2(1.0, 2.0);
  return get_derivs(centers, vec2(dx, 0.), dx, left_bounds, right_bounds);
}

vec2 get_y_derivs(vec2 centers) {
  //Use -1.0 or 2.0 when you don't care about that axis for bounding
  vec2 bot_bounds = vec2(-1.0, 0.0);
  vec2 top_bounds = vec2(2.0, 1.0);
  return get_derivs(centers, vec2(0., dy), dy, bot_bounds, top_bounds);
}

float calculate_wave_equation(float cur_position, float old_position, vec2 gradient) {
  vec2 wave_speeds = pow(wave_speed, 2.) * vec2(pow(height/width, 2.), 1.);
  float damping_factor = 1. / (1. + damping_strength);
  return damping_factor * (
      (damping_strength - 1.) * old_position
      + 2. * cur_position
      + dot(wave_speeds, gradient));
}

vec2 get_next_positions(vec2 cur_positions, vec2 old_positions) {

  vec2 x_derivs = get_x_derivs(cur_positions);
  vec2 y_derivs = get_y_derivs(cur_positions);
  vec2 phi_gradient = vec2(x_derivs.x, y_derivs.x);
  vec2 theta_gradient = vec2(x_derivs.y, y_derivs.y);

  return vec2(
    calculate_wave_equation(cur_positions.x, old_positions.x, phi_gradient),
    calculate_wave_equation(cur_positions.y, old_positions.y, theta_gradient)
  );
}

vec2 calculate_mouse_distance(vec2 uv) {
  return vec2(-1, height/width) * vec2(mouse - uv);
}

float is_within_mouse_distance(vec2 mouse_distances) {
  return max(sign(draw_radius - length(mouse_distances)), 0.0);
}

vec2 calculate_mouse_impact(vec2 uv) {
  // We need to scale our distance depending on our height/width
  vec2 mouse_distances = calculate_mouse_distance(uv);
  return mouse_magnitude * using_mouse
          * is_within_mouse_distance(mouse_distances)
          * mouse_distances;
}

void main() {
  vec2 cur_positions = get_texture_values(vUv).rg;
  vec2 old_positions = get_texture_values(vUv).ba;
  float final_phi_position;
  float final_theta_position;
  vec2 new_positions = get_next_positions(cur_positions, old_positions);
  vec2 mouse_impact = calculate_mouse_impact(vUv);
  final_phi_position   = clamp(new_positions.x + mouse_impact.y, 0., 1.);
  final_theta_position = clamp(new_positions.y + mouse_impact.x, 0., 1.);
  //Discard values that are less than min amount
  gl_FragColor = vec4(final_phi_position, final_theta_position, cur_positions.x, cur_positions.y);
}
