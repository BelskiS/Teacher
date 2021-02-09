# Область видимости или Scope

Область видимости (scope) определяет видимость или доступность переменной (другого ресурса) в области твоего кода.

# Глобальная область видимости или Global Scope

В JavaScript есть только одна глобальная область. Область за пределами всех функций считается глобальной областью, и переменные, определенные в глобальной области, могут быть доступны и изменены в любых других областях.

```
// Глобальная область

var num = 5;
console.log(num);   // 5

function getNum(){
  console.log(num); // num доступен здесь
}

getNum();           // 5
```

# Локальная область видимости или Local Scope

Переменные, объявленные внутри функций, становятся локальными для функции и рассматриваются в соответствующей локальной области. Каждая функция имеет свою область видимости. Одна и та же переменная может использоваться в разных функциях, поскольку они связаны с соответствующими функциями и не являются взаимно видимыми.

```
// Глобальная область

function foo1(){
    // Локальная область 1
  function foo2(){
    // Локальная область 2
  }
}

// Глобальная область
function foo3(){
  // Локальная область 3
}

// Глобальная область
```

Локальная область видимости может быть разделена на область видимости функции и область видимости блока. Концепция область видимости блока или block scope была представлена в ECMAScript6 (ES6) вместе с новыми способами объявления переменных - const и let.

# Область видимости функции

Всякий раз, когда мы объявляем переменную в функции, переменная видна только внутри функции. Мы не можем получить к ней доступ вне функции. var - это ключевое слово, определяющее переменную для доступности области функций.

```
function foo(){
  var num = 10;
  console.log('inside function: ', num);
}

foo();                   // inside function: 10
console.log(num);       // ReferenceError: num is not defined
```

# Область видимости блока

Область видимости блока - это область в условиях if и switch или циклов for, и while. Вообще говоря, всякий раз, когда мы видим фигурные скобки {} - это блок. В ES6 ключевые слова const и let позволяют разработчикам объявлять переменные в области видимости блока, что означает, что эти переменные существуют только в соответствующем блоке.

```
function foo(){
  if (true) {
    var num1 = 5;        // существуют в области видимости функции
    const num2 = 10;     // существуют в области видимости блока
    let num3 = 23;       // существуют в области видимости блока
  }
  console.log(num1);
  console.log(num2);
  console.log(num3);
}

foo();

// 5
// ReferenceError: num2 is not defined
// ReferenceError: num3 is not defined
```

# Лексическая область видимости

Ещё один момент, о котором стоит упомянуть - это лексическая область. Лексическая область означает, что дочерняя область имеет доступ к переменным, определенным в родительской области. Дочерние функции лексически связаны с контекстом исполнения их родителей.

```
function foo1(){
  var num1 = 5;
  const num2 = 10;
  let num3 = 23;
  function foo2(){
    console.log(num1);
    console.log(num2);
    console.log(num3);
  }
  foo2();
}

foo1();

// 5
// 10
// 23
```