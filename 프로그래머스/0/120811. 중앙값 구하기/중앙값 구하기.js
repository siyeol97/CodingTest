function solution(array) {
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray[Math.floor(array.length / 2)]
}