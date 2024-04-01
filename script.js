let str = prompt('Matn kiriting');
let arr = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' ') {
    arr += str[i].toUpperCase();
  } else {
    arr += str[i];
  }
}

console.log(arr);