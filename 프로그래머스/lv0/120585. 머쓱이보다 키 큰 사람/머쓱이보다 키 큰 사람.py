def solution(array, height):
    answer = 0
    for idx in array :
        if height < idx :
            answer += 1
    return answer