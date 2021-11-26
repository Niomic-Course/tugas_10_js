/*
let count = 0

for (let x = 1; x <= 10; x++) {
    count = count + x;
    console.log(count)
}
*/

// tambahan cara penyelesaian:
let count = 0;

for (let i = 1; i <= 55; i++) {
    if (count <= 55 && count !== 0) {
        console.log(count);
        count += i;
    } else if (count === 0) {
        count += i;
    }
}