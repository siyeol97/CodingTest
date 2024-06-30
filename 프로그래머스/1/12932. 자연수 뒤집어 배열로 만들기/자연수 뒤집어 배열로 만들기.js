function solution(n) {
    let arr = [...(''+n)].reverse();
    let answer = []
    arr.forEach((i) => {
        answer.push(parseInt(i))
    })
    return answer
}