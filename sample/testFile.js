// Encoder:
let toBeEncoded = 'Automated testing foundations with JavaScript'
let finalString = ''
for (let i = 0; i < toBeEncoded.length; i++) {
  finalString += toBeEncoded[i] + 'yeap'
}
//console.log(finalString)

// Decoder:
let toBeDecoded =
  'Ayeapuyeaptyeapoyeapmyeapayeaptyeapeyeapdyeap yeaptyeapeyeapsyeaptyeapiyeapnyeapgyeap yeapfyeapoyeapuyeapnyeapdyeapayeaptyeapiyeapoyeapnyeapsyeap yeapwyeapiyeaptyeaphyeap yeapJyeapayeapvyeapayeapSyeapcyeapryeapiyeappyeaptyeap'
//let finalString = ''
for (let i = 0; i < toBeDecoded.length; i++) {
  if (
    toBeDecoded[i] !== 'y' ||
    toBeDecoded[i + 1] !== 'e' ||
    toBeDecoded[i + 2] !== 'a' ||
    toBeDecoded[i + 3] !== 'p'
  ) {
    finalString += toBeDecoded[i]
  } else i += 3
}
console.log(finalString)
