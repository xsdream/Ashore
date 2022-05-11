module.exports =  {
    //English-Word
    '/English/Word': [
        {
            text: 'BetweenWords-MaTianYi',//单词之间
            children: [
                '/English/Word/BetweenWords/Day1.md',
                '/English/Word/BetweenWords/Day2.md',
                '/English/Word/BetweenWords/Day3.md',
                '/English/Word/BetweenWords/Day4.md',
                '/English/Word/BetweenWords/Day5.md',
                '/English/Word/BetweenWords/Day6.md',
                '/English/Word/BetweenWords/Day7.md',
                '/English/Word/BetweenWords/Day8.md',
                '/English/Word/BetweenWords/Day9.md',
                '/English/Word/BetweenWords/Day10.md',
                '/English/Word/BetweenWords/Day11.md',
                '/English/Word/BetweenWords/Day12.md'
            ],
        },
    ],
    // English-Read
    '/English/Read': [
        {
            text: 'The Economist',
            children: [
                '/English/Read/TheEconomist/A1.md',
                '/English/Read/TheEconomist/A2.md'
            ],
        },
        {
            text: 'Examination',
            collapsible: true,
            children: [
                {
                    text: '2010',
                    children: [
                        { text: 'test1', link: '/English/Read/Examination/2010/2010test1.md' },
                        { text: 'test2', link: '/English/Read/Examination/2010/2010test2.md' },
                    ]
                },
            ],
        }
    ],
}
