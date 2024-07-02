function solution(n) {

    let ternary = n.toString(3);

    let reversedTernary = ternary.split('').reverse().join('');

    return parseInt(reversedTernary, 3);
}
