function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}

function solution(number) {
    const combinations = getCombinations(number, 3);
    let count = 0;

    combinations.forEach((combination) => {
        const sum = combination.reduce((acc, curr) => acc + curr, 0);
        if (sum === 0) {
            count++;
        }
    });

    return count;
}
