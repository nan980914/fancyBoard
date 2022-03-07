/**
 * [旋转]
 * @param x1 
 * @param y1 
 * @param x2 
 * @param y2 
 * @param angle 
 * @returns 
 */
export function rotate(x1, y1, x2, y2, angle) {
  return [
    (x1 - x2) * Math.cos(angle) - (y1 - y2) * Math.sin(angle) + x2,
    (x1 - x2) * Math.sin(angle) + (y1 - y2) * Math.cos(angle) + y2,
  ];
}