 'use strict'
 //random function between max and min input
 function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
 }
    // 0 >= random #  <= 1  * limit
/* }

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
    min: 3,
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
    min: 11,
    max: 38,
    avg: 3.7,
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
    min: 20,
    max: 38,
    avg: 2.3,
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
    
 getCookiesoutput: function() {
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
    max: 16,
    avg: 4.6,
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
    
 getCookiesoutput: function() {
    let LimahoursArray = document.querySelector('.LimaCookies')
    this.getCookies()
        for(let i = 0; i < Lima.hoursOfOperation.length; i++) {
        hoursDemo[i].innerHTML
        let LimaCookies = document.createElement("li");
        LimaCookies.innerHTML = `${Lima.hoursOfOperation[i]}: ${Lima.cookiesPerHour[i]} cookies`;
        LimahoursArray.append(LimaCookies);
    }

 } 
 }
 Lima.getCookiesoutput ()*/

let locations = [];
 function cookieStandLocation(min, max, avg, location, hours) {
    let stand = {};
    stand.min = min;
    stand.max = max;
    stand.avg = avg;
    stand.location = location;
    stand.cookiesPerHour = [];
    
    stand.hoursOfOperation = hours;
 
     stand.getCustomers = function() {
     console.log(`Stand Max: ${stand.max} || this Max: ${this.max}`);
     return getRandom(this.max, this.min);
    }

 
     stand.getCookies = function getCookies() {
         for(let i = 0; i < this.hoursOfOperation.length; i++) {
              console.log('seattle avg cookies/sale', this.avg);
             this.cookiesPerHour.push(Math.ceil(this.avg * this.getCustomers()));
         }
         return this.cookiesPerHour;
    }
 
     stand.render = function() {
     // let tblDemo = document.createElement('table');
     // let trArr = [];
     let trDemo = document.createElement('tr'); 
     let localeTD = document.createElement('td');

     localeTD.innerHTML = this.location;
     trDemo.append(localeTD);
 
     for (let i = 0; i < this.hoursOfOperation.length; i++) {
        console.log (this.cookiesPerHour[i])
        console.log (this)
         let tdDemo = document.createElement('td');
         tdDemo.innerHTML = this.cookiesPerHour[i];
         trDemo.append(tdDemo);
     }
     document.getElementById('jsTbl').append(trDemo);
     let totals = 0; 
     for (let i = 0; i < this.hoursOfOperation.length; i++) {
        totals = this.cookiesPerHour [i] + totals
     }
     
     let tdtotals = document.createElement('td')
     tdtotals.innerHTML = totals 
     trDemo.append(tdtotals)
     document.getElementById('jsTbl').append(trDemo);
     console.log (this.tdtotals)

     }
 
     return stand;
 }

 let hoursDemo = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
 ];
 
 const Seattle = cookieStandLocation(23, 65, 6.3, 'Seattle', hoursDemo);
 Seattle.getCookies();
 Seattle.render(); 
 locations.push(Seattle);
 
 const tokyo = cookieStandLocation(3, 24, 1.2, 'Tokyo', hoursDemo);
 tokyo.getCookies();
 tokyo.render();
 locations.push(tokyo);

 const Dubai = cookieStandLocation(11, 38, 3.7, 'Dubai', hoursDemo);
 Dubai.getCookies();
 Dubai.render();
 locations.push(Dubai);

 const Paris = cookieStandLocation(20, 38, 2.3, 'Paris', hoursDemo);
 Paris.getCookies();
 Paris.render();
 locations.push(Paris);

 const Lima = cookieStandLocation(2, 16, 4.6, 'Lima', hoursDemo);
 Lima.getCookies();
 Lima.render();
 locations.push(Lima);
 
 
let trow = document.createElement('tr');
let hourlytotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let storetotals = [];

// Create table cells for the hourly totals row
let hourlytotalstext = document.createElement('td');
hourlytotalstext.innerHTML = "Totals";
trow.insertBefore(hourlytotalstext, trow.firstChild);
for (let i = 0; i < hoursDemo.length; i++) {
  let tdtotals = document.createElement('td');
  tdtotals.innerHTML = hourlytotals[i];
  trow.append(tdtotals);
}

// Append the row to the table
let table = document.getElementById('jsTbl');
table.append(trow);

function updateTotals() {
  // Reset the hourly totals array and store totals array
  let hourlytotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  let storetotals = [];

  // Update the store totals and hourly totals arrays
  for (let i = 0; i < locations.length; i++) {
    storetotals.push(0);
    for (let j = 0; j < locations[i].cookiesPerHour.length; j++){
      storetotals[i] += locations[i].cookiesPerHour[j];
      hourlytotals[j] += locations[i].cookiesPerHour[j];
      console.log(`${i} times thru: hourly totals [${j}]: `, hourlytotals[j]);
    }
  }

  // Update the table with the new totals
  for (let i = 0; i < hoursDemo.length; i++) {
    let tdtotals = trow.children[i+1];
    tdtotals.innerHTML = hourlytotals[i];
  }
}

// Call the updateTotals() function each time a new location is added
AddLocation.addEventListener('submit', function (event) {
  event.preventDefault();
  const AddNew = event.target.AddNew.value;
  const Avg = event.target.Avg.value;
  const Min = event.target.Min.value;
  const Max = event.target.Max.value;

  let NewLocation = cookieStandLocation(Min, Max, Avg, AddNew, hoursDemo);
  console.log(NewLocation.min)
  NewLocation.getCookies();
  NewLocation.render();
  AddLocation.reset();
  locations.push(NewLocation);
  updateTotals();
  AddLocation.append(hourlytotals);

});
