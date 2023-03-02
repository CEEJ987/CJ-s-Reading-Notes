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

    /*
    Seattle
    6am: 16 cookies
    7am: 20 cookies
    8am: 35 cookies
    9am: 48 cookies
    10am: 56 cookies
    11am: 77 cookies
    12pm: 93 cookies
    1pm: 144 cookies
    2pm: 119 cookies
    3pm: 84 cookies
    4pm: 61 cookies
    5pm: 23 cookies
    6pm: 42 cookies
    7pm: 57 cookies
    Total: 875 cookies
    
function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
    // 0 >= random #  <= 1  * limit
}

const tokyo = {
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
            //console.log('seattle avg cookies/sale', this.avg);
           // console.log('seattle avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
    
}


    let TokyohoursArray = document.querySelector('.SeattleCookies')
    for(let i = 0; i < Tokyo.hoursOfOperation.length; i++) {
        //hoursDemo[i].innerHTML
        let tokyoCookies = document.createElement("li");
        tokyoCookies.innerHTML = `${tokyo.hoursOfOperation[i]}: ${tokyo.getCookies()[i]} cookies`;
        T okyohoursArray.append(tokyoCookies);
    }
    
    Seattle
    6am: 16 cookies
    7am: 20 cookies
    8am: 35 cookies
    9am: 48 cookies
    10am: 56 cookies
    11am: 77 cookies
    12pm: 93 cookies
    1pm: 144 cookies
    2pm: 119 cookies
    3pm: 84 cookies
    4pm: 61 cookies
    5pm: 23 cookies
    6pm: 42 cookies
    7pm: 57 cookies
    Total: 875 cookies
    

    
*/