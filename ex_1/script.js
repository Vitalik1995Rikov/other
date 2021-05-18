function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}


let generator = generateSequence();
// alert(typeof generator)
let one = generator.next();
// alert(typeof one)
// alert(JSON.stringify(one));

let two = generator.next();
// alert(JSON.stringify(two));

let three = generator.next();
// alert(JSON.stringify(three));

let four = generator.next();
// alert(JSON.stringify(four));

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

let number = generateNumbers();
// for (let value of number) {
//     alert(value);
// }

let all = [0, ...number];
alert(all);