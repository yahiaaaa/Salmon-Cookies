"use strict";

const shop = document.getElementById('shop');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let seattle = {
    name: 'seattle',
    minCust: 23,
    maxCust: 65,
    avg: 6.3,
    cookiesSales: [],
    total: 0,

    gitCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let randAVGCust = (Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg));
            this.cookiesSales.push(randAVGCust);
            this.total += randAVGCust ;

        }
    },

    render: function () {
        const h2Elelmant = document.createElement('h2');
        h2Elelmant.textContent = this.name;
        shop.appendChild(h2Elelmant);

        const ulElement = document.createElement('ul');
        shop.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            const liEle = document.createElement('li');
            liEle.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
            ulElement.appendChild(liEle);

        }
        const totalLi = document.createElement('li');
            totalLi.textContent = `Total: ${this.total } cookies`;
            ulElement.appendChild(totalLi);
    }
};

let Tokyo = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avg: 1.2,
    cookiesSales: [],
    total: 0,

    gitCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let randAVGCust = (Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg));
            this.cookiesSales.push(randAVGCust);
            this.total += randAVGCust ;

        }
    },

    render: function () {
        const h2Elelmant = document.createElement('h2');
        h2Elelmant.textContent = this.name;
        shop.appendChild(h2Elelmant);

        const ulElement = document.createElement('ul');
        shop.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            const liEle = document.createElement('li');
            liEle.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
            ulElement.appendChild(liEle);

        }
        const totalLi = document.createElement('li');
            totalLi.textContent = `Total: ${this.total } cookies`;
            ulElement.appendChild(totalLi);
    }
};

let Dubai = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avg: 3.7,
    cookiesSales: [],
    total: 0,

    gitCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let randAVGCust = (Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg));
            this.cookiesSales.push(randAVGCust);
            this.total += randAVGCust ;

        }
    },

    render: function () {
        const h2Elelmant = document.createElement('h2');
        h2Elelmant.textContent = this.name;
        shop.appendChild(h2Elelmant);

        const ulElement = document.createElement('ul');
        shop.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            const liEle = document.createElement('li');
            liEle.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
            ulElement.appendChild(liEle);

        }
        const totalLi = document.createElement('li');
            totalLi.textContent = `Total: ${this.total } cookies`;
            ulElement.appendChild(totalLi);
    }
};

let Paris = {
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avg: 2.3,
    cookiesSales: [],
    total: 0,

    gitCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let randAVGCust = (Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg));
            this.cookiesSales.push(randAVGCust);
            this.total += randAVGCust ;

        }
    },

    render: function () {
        const h2Elelmant = document.createElement('h2');
        h2Elelmant.textContent = this.name;
        shop.appendChild(h2Elelmant);

        const ulElement = document.createElement('ul');
        shop.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            const liEle = document.createElement('li');
            liEle.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
            ulElement.appendChild(liEle);

        }
        const totalLi = document.createElement('li');
            totalLi.textContent = `Total: ${this.total } cookies`;
            ulElement.appendChild(totalLi);
    }
};
let Lima = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avg: 4.6,
    cookiesSales: [],
    total: 0,

    gitCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let randAVGCust = (Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg));
            this.cookiesSales.push(randAVGCust);
            this.total += randAVGCust ;

        }
    },

    render: function () {
        const h2Elelmant = document.createElement('h2');
        h2Elelmant.textContent = this.name;
        shop.appendChild(h2Elelmant);

        const ulElement = document.createElement('ul');
        shop.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            const liEle = document.createElement('li');
            liEle.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
            ulElement.appendChild(liEle);

        }
        const totalLi = document.createElement('li');
            totalLi.textContent = `Total: ${this.total } cookies`;
            ulElement.appendChild(totalLi);
    }
};
seattle.gitCookies();
seattle.render();
console.log(seattle.cookiesSales)
Tokyo.gitCookies();
Tokyo.render();
console.log(Tokyo.cookiesSales)
Dubai.gitCookies();
Dubai.render();
console.log(Dubai.cookiesSales)
Paris.gitCookies();
Paris.render();
console.log(Paris.cookiesSales)
Lima.gitCookies();
Lima.render();
console.log(Lima.cookiesSales)




function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
