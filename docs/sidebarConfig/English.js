module.exports =  {
    //English-Word
    '/English/Word': [
        {
            text: 'BetweenWords-MaTianYi',//单词之间
            collapsible: true,
            children: [
                '/English/Word/BetweenWords/Day1.md',
                '/English/Word/BetweenWords/Day2.md',
                '/English/Word/BetweenWords/Day3.md',
                '/English/Word/BetweenWords/Day4.md',
                '/English/Word/BetweenWords/Day9.md',
                '/English/Word/BetweenWords/Day19.md'
            ],
        },
        '/English/Word/100SentencesRememberWord'
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
