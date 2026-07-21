console.log([
    "\u00e9"["0"] === "\u00e9",
    "\u00e9"["1"] === undefined,
    "\ud83d\ude00"["0"] === "\ud83d",
    "\ud83d\ude00"["1"] === "\ude00",
    "\ud83d\ude00"["2"] === undefined,
    "\ud800"["0"] === "\ud800",
    "\ud800"["1"] === undefined,
].join(","));

console.log([
    "A".charCodeAt(),
    "A".charCodeAt(0.9),
    "AB".charCodeAt(1.9),
    "A".charCodeAt(-0.9),
    "A".charCodeAt(NaN),
    "\ud83d\ude00".charCodeAt(0),
    "\ud83d\ude00".charCodeAt(1),
    "A".charCodeAt(-1),
    "A".charCodeAt(1),
    "A".charCodeAt(Infinity),
    "A".charCodeAt(-Infinity),
    "A".charCodeAt(4294967296),
].join(","));

console.log([
    "A".codePointAt(),
    "A".codePointAt(0.9),
    "AB".codePointAt(1.9),
    "A".codePointAt(-0.9),
    "A".codePointAt(NaN),
    "\ud83d\ude00".codePointAt(0),
    "\ud83d\ude00".codePointAt(1),
    "\ud800".codePointAt(0),
    "\udc00".codePointAt(0),
    "A".codePointAt(-1),
    "A".codePointAt(1),
    "A".codePointAt(Infinity),
    "A".codePointAt(-Infinity),
    "A".codePointAt(4294967296),
].join(","));
