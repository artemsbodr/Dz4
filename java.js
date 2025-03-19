// завдання1
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
// завдання2
for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

// завдання3
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// завдання4
const n = parseInt(prompt("Введіть n: "));
for (let i = 1; i < 100; i++) {
    if (i >= n) break;
    console.log(i);
}
// завдання5
let a = 1 ;
while (a <= 20) {
    if (a % 3 === 0) {
        a++;
        continue;
    }
    console.log(a);
    a++;
}
