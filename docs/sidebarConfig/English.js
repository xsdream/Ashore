module.exports =  {
    //English-Word
    '/English/Word': [
        {
            text: 'BetweenWords',//单词之间
            children: [
                '/English/Word/BetweenWords/Day1.md',
                '/English/Word/BetweenWords/Day2.md'
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
