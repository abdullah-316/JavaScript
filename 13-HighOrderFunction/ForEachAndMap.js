

// Map: means the way of storing data 

// Map syntax
let map = new Map()

// Set data
map.set("PAK", "Pakistan")
map.set("UK", "United Kingdom")
map.set("KSA", "Kingdom of Saudia Arabia")

// get data
console.log(map.get('PAK'));

// Using For of Loop and destructuring
for (const [key, value] of map) {
    console.log(key, '->', value);
}