function solution(n) {
    let arr = [0n, 1n];
    for(let i=2; i<=n; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }
    
    return arr[n] % 1234567n;
}