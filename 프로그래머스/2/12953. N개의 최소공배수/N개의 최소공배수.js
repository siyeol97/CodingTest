function solution(arr) {
    function gcd(a, b){
        let x = a >= b ? a : b;
        let y = a < b ? a : b;
        let r = 0;
        while(x % y !== 0){
            r = x % y;
            x = y;
            y = r;
        }
        
        return y;
    }
    function lcm(a, b){
        return a * b / gcd(a, b);
    }
    
    for(let i = 0; i < arr.length - 1; i++){
        let temp = lcm(arr[i], arr[i+1]);
        arr.splice(i, 2, temp);
        i--;
    }
    
    return arr[0]
}