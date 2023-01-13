def solution(num_list):
    answer = []
    for i in range (1, len(num_list)+1) :
        answer.append(num_list[-i])
    return answer