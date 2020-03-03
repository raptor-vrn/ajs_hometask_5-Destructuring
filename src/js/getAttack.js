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

function getAttack({ special }) {
  const array = [];

  for (let i = 0; i < special.length; i++) {
    const obj = special[i];
    const { description = 'Описание недоступно' } = obj;
    obj.description = description;
    array.push(obj);
  }

  return array;
}

const result = getAttack(hero);
console.log(result);

export {getAttack};
