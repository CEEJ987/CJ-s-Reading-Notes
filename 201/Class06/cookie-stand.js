'use strict'
//random function between max and min input
function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
    // 0 >= random #  <= 1  * limit
}

const seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    location: 'Seattle',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('seattle avg cookies/sale', this.avg);
            console.log('seattle avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
    
getCookiesoutput: function(){
    let SeattlehoursArray = document.querySelector('.SeattleCookies')
    this.getCookies()
        for(let i = 0; i < seattle.hoursOfOperation.length; i++) {
        //hoursDemo[i].innerHTML
        let SeattleCookies = document.createElement("li");
        SeattleCookies.innerHTML = `${seattle.hoursOfOperation[i]}: ${seattle.cookiesPerHour[i]} cookies`;
        SeattlehoursArray.append(SeattleCookies);
    }

}
}
seattle.getCookiesoutput ()


function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
    // 0 >= random #  <= 1  * limit
}

const Tokyo = {
    min: 2,
    max: 24,
    avg: 1.2,
    location: 'Tokyo',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('Tokyo avg cookies/sale', this.avg);
            console.log('Tokyo avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
    
getCookiesoutput: function(){
    let TokyohoursArray = document.querySelector('.TokyoCookies')
    this.getCookies()
        for(let i = 0; i < Tokyo.hoursOfOperation.length; i++) {
        //hoursDemo[i].innerHTML
        let TokyoCookies = document.createElement("li");
        TokyoCookies.innerHTML = `${Tokyo.hoursOfOperation[i]}: ${Tokyo.cookiesPerHour[i]} cookies`;
        TokyohoursArray.append(TokyoCookies);
    }

}
}
Tokyo.getCookiesoutput ()

function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
    // 0 >= random #  <= 1  * limit
}

const Dubai = {
    min: 2,
    max: 24,
    avg: 1.2,
    location: 'Dubai',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('Dubai avg cookies/sale', this.avg);
            console.log('Dubai avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
    
getCookiesoutput: function(){
    let DubaihoursArray = document.querySelector('.DubaiCookies')
    this.getCookies()
        for(let i = 0; i < Dubai.hoursOfOperation.length; i++) {
        //hoursDemo[i].innerHTML
        let DubaiCookies = document.createElement("li");
        DubaiCookies.innerHTML = `${Dubai.hoursOfOperation[i]}: ${Dubai.cookiesPerHour[i]} cookies`;
        DubaihoursArray.append(DubaiCookies);
    }

}
}
Dubai.getCookiesoutput ()

function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
    // 0 >= random #  <= 1  * limit
}

const Paris = {
    min: 2,
    max: 24,
    avg: 1.2,
    location: 'Paris',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('Paris avg cookies/sale', this.avg);
            console.log('Paris avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
    
getCookiesoutput: function(){
    let ParishoursArray = document.querySelector('.ParisCookies')
    this.getCookies()
        for(let i = 0; i < Paris.hoursOfOperation.length; i++) {
        //hoursDemo[i].innerHTML
        let ParisCookies = document.createElement("li");
        ParisCookies.innerHTML = `${Paris.hoursOfOperation[i]}: ${Paris.cookiesPerHour[i]} cookies`;
        ParishoursArray.append(ParisCookies);
    }

}
}
Paris.getCookiesoutput ()


function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
    // 0 >= random #  <= 1  * limit
}

const Lima = {
    min: 2,
    max: 24,
    avg: 1.2,
    location: 'Lima',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('Lima avg cookies/sale', this.avg);
            console.log('Lima avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
    
getCookiesoutput: function(){
    let LimahoursArray = document.querySelector('.LimaCookies')
    this.getCookies()
        for(let i = 0; i < Lima.hoursOfOperation.length; i++) {
        //hoursDemo[i].innerHTML
        let LimaCookies = document.createElement("li");
        LimaCookies.innerHTML = `${Lima.hoursOfOperation[i]}: ${Lima.cookiesPerHour[i]} cookies`;
        LimahoursArray.append(LimaCookies);
    }

}
}
Lima.getCookiesoutput ()

















