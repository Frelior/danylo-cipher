export function textToChifer(text) {
  const a = text.split("").forEach((char) => {
    return alphabetEng[char]
  })
  console.log(a)
}

const alphabetEng = {
  q: "11",
  w: "21",
  e: "31",
  r: "41",
  t: "51",
  y: "61",
  u: "71",
  i: "81",
  o: "91",
  p: "01",
  a: "12",
  s: "22",
  d: "32",
  f: "42",
  g: "52",
  h: "62",
  j: "72",
  k: "82",
  l: "92",
  z: "13",
  x: "23",
  c: "33",
  v: "43",
  b: "53",
  n: "63",
  m: "73",
}
