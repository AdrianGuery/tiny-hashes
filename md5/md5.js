// See "precomputation" in notes
var k = [], i = 0;

for (; i < 64;) {
  k[i] = 0 | Math.sin(++i % Math.PI) * 4294967296;
  // k[i] = 0 | (Math.abs(Math.sin(++i)) * 4294967296);
}

export default function md5(s) {
  return s;
}
