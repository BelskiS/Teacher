# Teacher

# Lesson 4
-------------------------

Ссылка на презентацию https://www.mediafire.com/file/1ycija71k0xg5b1/JS_lesson_4.pptx/file

# Домашнее задание: 

Сделать аналогию зоопарка
есть массив объектов в каждом объекте:

в нем есть звери, кличка животного/имя, смотрители
здоров, болен, сыт, голоден, цвет, вес

У вас должны быть функции, которые работают с данным массивом

- могут добавлять новых
- удаляь объекты зверей
- менять их статусы (здоров, болен, сыт, голоден)
- менять смотрителей (дополнительный объект с его именем, возрастом ...)

Т.е набор функций, которые меняют состояние зоопарка
Например меняют кличку животному - функция принимает имя животного и новую кличку, на выходе новый массив в котором у этого животного новая кличка

```
const animals = [
 {
   name: "lyon",
   weight: 45,
   isHealthy: true,
   isAche: false,
   warden: {
    name: "Petr",
    age: 72
   }
 },
 //далее объекты остальных, полей может быть больше
];

function zoo () { //тут никаких параметров, это такая сборочная функция для нас будет
  return {
    deleteAnimal: function(animals, name) {
    },
    changeHelth: function(status, animals) {},
    addAnimal: (animals, params) => {//здесь решение, а например params - это объект с полями для нового животного}
  }
}

let zooManager = zoo()
zooManager.deleteAnimal(animals, name)

//и другие методы, добавить-поменять какое-то свойство и т.д
```
