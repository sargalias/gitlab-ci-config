import arrayShuffle from 'array-shuffle';

function* randomHueGen() {
  const hues = arrayShuffle(Array.from({ length: 360 }, (el, index) => index));
  let i = 0;
  while (true) {
    i %= 360;
    yield hues[i++];
  }
}

const it = randomHueGen();

const randomHue = () => {
  return it.next().value;
};

export default randomHue;
