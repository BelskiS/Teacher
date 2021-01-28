const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];

let searchValue = prompt("Please, input name");

let isCheck = false;
for(let i = 0; i < data.length; i++) {
    //toLowerCase () Федр
    if(data[i].firstName === searchValue) {
        isCheck = true;
        alert(`${data[i].firstName} ${data[i].lastName} ${data[i].age}`)
    }
}

if (isCheck === false) {
    alert("Ничего не найдено или совподений нет")
}



checkName(data, "Ashton")