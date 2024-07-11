function solution(cards1, cards2, goal) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < goal.length; i++) {
        if (x < cards1.length && cards1[x] === goal[i]) {
            x++;
        } else if (y < cards2.length && cards2[y] === goal[i]) {
            y++;
        } else {
            return 'No';
        }
    }

    return 'Yes';
}
