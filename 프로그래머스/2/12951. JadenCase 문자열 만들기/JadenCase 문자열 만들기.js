function solution(s) {
    var answer = '';
    
    s = s.toLowerCase();
    
    let arr = s.split(' ');
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== ''){
            arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
        }
    }
    
    answer = arr.join(' ');
    
    return answer;
}