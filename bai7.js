var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]


function getTotalGold(sports) {
    let count = 0;
    sports.forEach(element => {
        count += element.gold;
    });

    return count;
}

// Expected results:
console.log(getTotalGold(sports)) // Output: 23