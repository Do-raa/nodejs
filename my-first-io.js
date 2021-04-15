const fs = require ('fs'); 
var file = process.argv[1];
var buff =fs.readFileSync(process.argv[2], 'utf8');  
var lines = buff.split('\n');
console.log(lines.length-1);


