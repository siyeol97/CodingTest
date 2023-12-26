def solution(lottos, win_nums):
    answer = []
    cnt = 0
    for num in lottos :
        if num in win_nums :
            cnt += 1
    
    max_cnt = lottos.count(0) + cnt
    
    if cnt == 0 and lottos.count(0) == 0 :
        answer.append(6)
    else :
        answer.append((7-max_cnt))

    if cnt == 0 :
        answer.append(6)
    else :      
        answer.append(7-cnt)
    return answer