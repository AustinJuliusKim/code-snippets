// Object merge
var destination = { a: 0 },
    src1 = { b: 1, c: 2 },
    src2 = { d: 3, e: 4 };

// ES5
Object.keys(src1).forEach(function(k){
  destination[k] = src1[k];
});
Object.keys(src2).forEach(function(k){
  destination[k] = src2[k];
});

// ES6
Object.assign(destination, src1, src2)
// Result
destination === { a: 0, b: 1, c: 2, d: 3, e: 4}


// Merge with same properties
var o1 = { a: 1, b: 2, c: 1 },
    o2 = { b: 2, c: 2 },
    o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);

// Object Clone
var obj = { a: 0 };
var copy = Object.assign({}, obj);
console.log(copy);

// Array Element Finding
var array = ['a', 'b', 'c', 'd', 'e'];
var arrayWithDups = ['a', 'b', 'c', 'd', 'e', 'e', 'e'];

// ES5
array.filter(function(x){ return x = 'e';})[0];

// ES6
array.find( x => x == 'e' );
array.findIndex( x => x == 'e' );
arrayWithDups.findIndex( x => x == 'e' );

// String Repeating

// ES5
var repeat = Array ( 3 + 1).join('foo ');
console.log(repeat);

// ES6 - has added String.repeat(3)
var repeast = 'foo '.repeat(3);
console.log(repeat);

// String Searching

// ES5
"hello".indexOf("ello") === 1; // true
"hello".indexOf("hell") === ( 4 - "hell".length);

// ES6
"hello".startsWith("ello", 1);
"hello".endsWith("hell", 4);
"hello".includes("ell");

// Number Type Checking

var isNan = function(n){
  return n !== n;
};
var isFinite = function(v){
  return (typeof v === "number" && !isNan(v) && v !== Infinity && v !== - Infinity)
}
