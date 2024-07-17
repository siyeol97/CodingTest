function solution(nums) {
    const temp = [];
    for(let i = 0; i < nums.length; i++){
        if(temp.includes(nums[i])){
            continue;
        }
        temp.push(nums[i]);
        
        if(temp.length === nums.length / 2){
            break;
        }
    }
    
    return temp.length;
}