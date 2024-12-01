const nbr = 5;
// Ex 1
for (let i = 1; i <= nbr; i++) {
    let str = '*';
    console.log(str.repeat(i));
}
// Ex 2
for (let i = 5; i >= 1; i--) {
    let str = '*';
    console.log(str.repeat(i));
}
// Ex 3
for (let i = 1; i <= nbr; i++) {
    let str = '*';
    console.log(str.repeat(i));
}

for (let i = 4; i >= 1; i--) {
    let str = '*';
    console.log(str.repeat(i));
}
// Ex 4
for (let i = 1; i <= nbr; i+=2) {
    let str = '*';
    let space = ' ';
    console.log(space.repeat((nbr - i / 2)) + str.repeat(i));
}

for (let i = 3; i >= 1; i-=2) {
    let str = '*';
    let space = ' ';
    console.log(space.repeat((nbr - i / 2)) + str.repeat(i));
}