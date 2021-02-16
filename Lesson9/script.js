const visitors = [
    {
        name: "gregory",
        surname: "vlasov",
        isWelcome: true,
    },
    {
        name: "anton",
        surname: "vlasov",
        isWelcome: false,
    },
    {
        name: "vlasov",
        surname: "vlasov",
        isWelcome: false,
    }
]

const createWrapper = (node) => {
    const wrapper = document.createElement(node);
    document.body.append(wrapper);
    return wrapper;
}

const renderListOfVisitors = (list) => {
    const unvisitorMarker = 'red';
    const isVisitor = 'green';

    const wrapper = createWrapper('ul');
    list.forEach((visitor) => {
        let visitorLine = document.createElement('li');
        if(visitor.isWelcome) {
            visitorLine.style.color = isVisitor;
            visitorLine.innerText = `${visitor.name.toUpperCase()} ${visitor.surname.toUpperCase()}`
        } else {
            visitorLine.style.color = unvisitorMarker;
            visitorLine.innerText = `${visitor.name.toLowerCase()} ${visitor.surname.toLowerCase()}`
        }
        wrapper.append(visitorLine);
    })
    
}

const start = () => renderListOfVisitors(visitors);