const character = {
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
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

const getAttackProperties = function (object) {
  const { special } = object;
  const newSpecial = [];

  special.forEach((el) => {
    const {
      id, name, icon, description = 'Описание отсутствует',
    } = el;
    newSpecial.push({
      id,
      name,
      icon,
      description,
    });
  });

  console.log(newSpecial);
  return newSpecial;
};

getAttackProperties(character);

export default getAttackProperties;
