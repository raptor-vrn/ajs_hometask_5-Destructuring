import {getAttack} from '../getAttack.js'

test('get array with objects', () => {
    const hero = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 3,
        attack: 40,
        defence: 10,
        special: [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон',
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
            },
        ],
    };

    let array = [
        {   id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {   id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
            description: 'Описание недоступно'
        },
    ];
    expect(getAttack(hero.special).toBe(array))
});
