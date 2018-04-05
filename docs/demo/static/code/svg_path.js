//Shape cases come from: https://github.com/alloyteam/pasition

const paper = spritejs.Paper2D('#paper')
paper.setResolution(800, 600)

;(async function(){

const Sprite = spritejs.Sprite,
      Path = spritejs.Path

const paths = [
  `M81.025,61.094c-3.896-2.742-8.754-2.549-11.52,1.379c-2.764,3.926-22.088,28.164-53.752,18.102   c1.193,1.039,2.451,2.027,3.771,2.957c20.768,14.625,49.461,9.643,64.086-11.127C86.377,68.476,84.918,63.838,81.025,61.094z    M19.924,58.002C17.906,53.644,6.578,24.789,31.123,2.398c-1.496,0.514-2.98,1.107-4.445,1.787   C3.629,14.861-6.406,42.201,4.27,65.252c2.018,4.357,6.764,5.418,11.088,3.416C19.678,66.666,21.941,62.361,19.924,58.002z    M50.133,0.111c-4.781-0.43-8.072,3.15-8.5,7.895c-0.426,4.746,2.17,8.857,6.953,9.287c4.781,0.432,35.434,5.049,42.549,37.504   c0.305-1.553,0.531-3.135,0.676-4.746C94.092,24.75,75.432,2.392,50.133,0.111z M30.457,48.646   c-1.318,3.102-1.531,6.062-0.473,6.613c0.729,0.381,1.873-0.486,2.943-2.078c0.424,1.736,1.473,3.305,2.971,4.566   c-1.572,0.58-2.598,1.527-2.598,2.6c0,1.766,2.777,3.195,6.205,3.195c3.092,0,5.652-1.162,6.125-2.686   c0.127-0.002,0.615-0.002,0.738,0c0.475,1.523,3.037,2.686,6.127,2.686c3.428,0,6.205-1.43,6.205-3.195   c0-1.072-1.025-2.02-2.598-2.6c1.496-1.262,2.549-2.83,2.971-4.566c1.07,1.592,2.211,2.459,2.941,2.078   c1.059-0.551,0.85-3.512-0.471-6.613c-1.035-2.436-2.441-4.232-3.514-4.629c0.016-0.154,0.023-0.311,0.023-0.469   c0-0.941-0.262-1.811-0.709-2.52c0.008-0.055,0.008-0.111,0.008-0.166c0-0.434-0.104-0.84-0.279-1.191   C56.801,33.335,52.676,28.302,46,28.302c-6.678,0-10.805,5.033-11.074,11.369c-0.178,0.352-0.281,0.758-0.281,1.191   c0,0.055,0.004,0.111,0.006,0.166c-0.443,0.709-0.705,1.578-0.705,2.52c0,0.158,0.006,0.314,0.02,0.469   C32.9,44.414,31.49,46.211,30.457,48.646z`,
  `M93.6,27.1C87.6,34.2,78,39.8,68.4,39c-1.2-9.6,3.5-19.8,9-26.1c6-7.3,16.5-12.5,25-12.9
    C103.4,10,99.5,19.8,93.6,27.1 M102.3,40.9c-13.9-0.8-25.8,7.9-32.4,7.9c-6.7,0-16.8-7.5-27.8-7.3c-14.3,0.2-27.6,8.3-34.9,21.2
    c-15,25.8-3.9,64,10.6,85c7.1,10.4,15.6,21.8,26.8,21.4c10.6-0.4,14.8-6.9,27.6-6.9c12.9,0,16.6,6.9,27.8,6.7
    c11.6-0.2,18.9-10.4,26-20.8c8.1-11.8,11.4-23.3,11.6-23.9c-0.2-0.2-22.4-8.7-22.6-34.3c-0.2-21.4,17.5-31.6,18.3-32.2
    C123.3,42.9,107.7,41.3,102.3,40.9 z`,
  'M48,5L42.38,18.26L28,19.48L38.92,28.94L35.64,43L48,35.54L48,35.54L60.36,43L57.08,28.94L68,19.48L53.62,18.26Z',
  'M 40 40 Q 60 80 80 40T 120 40 T 160 40 z',
  'M32,0C14.4,0,0,14.4,0,32s14.3,32,32,32 s32-14.3,32-32S49.7,0,32,0z',
]

const s4 = new Path()

s4.attr({
  anchor: [0.5, 0.5],
  pos: [400, 300],
  color: 'red',
  d: paths[0],
})
paper.layer().append(s4)

s4.attr('d', paths[0])

function morph(from, to){
  let animation = s4.animate([
    {d: from},
    {d: to},      
  ], {
    delay: 1000,
    duration: 1000,
    fill: 'forwards',
  })
  return animation.finished
}

await morph(paths[0], paths[1])
await morph(paths[1], paths[2])
await morph(paths[2], paths[3])
await morph(paths[3], paths[4])
await morph(paths[4], paths[3])
await morph(paths[3], paths[2])
await morph(paths[2], paths[1])
await morph(paths[1], paths[0])

})()

window.addEventListener('resize', evt => {
  paper.setViewport('auto', 'auto')
})