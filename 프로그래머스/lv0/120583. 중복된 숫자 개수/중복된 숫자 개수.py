def solution(array, n):
    answer = 0
    for idx in array :
        if idx == n :
            answer += 1
        
    return answer