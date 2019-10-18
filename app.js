
// Name Function
function askName() {
    var username = prompt('What is your name?');

    return '<h3>' + username + ', ' + '</h3>';
}



// Greeting Function PART A
function greetingA() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;


    if (hourNow > 18) {
        greeting = 'Good evening,';


    } else if (hourNow > 12) {
        greeting = 'Good afternoon, ';

    } else if (hourNow > 0) {
        greeting = 'Good morning, ';
    } else {
        greeting = 'Welcome, ';

    }
    return '<h3>' + greeting + '</h3>';
}


// Greeting Function PART B
function greetingB() {
    var today = new Date();
    var hourNow = today.getHours();
    var greetingTwo;

    if (hourNow > 18) {
        greetingTwo = 'Contact us tonight!';

    } else if (hourNow > 12) {
        greetingTwo = 'Contact us this afternoon!';

    } else if (hourNow > 0) {
        greetingTwo = 'Contact us this morning!';
    } else {
        greetingTwo = 'Just call us!';

    }
    return '<h3>' + greetingTwo + '</h3>';
}

// Current Time & Date
function currentTime() {
    var today = new Date();
    var hourNow = today.toLocaleTimeString();
    var dateNow = today.toDateString();

    return '<h3>' + hourNow + '</h3>' + dateNow + '<br></br>';
}


//Pop Up
function whileDemo() {
    var answer = prompt('Do you enjoy our site?');

    while (answer !== 'yes') {
        var answer = prompt('These are not the droids your looking for... You will love this site... type, yes, and the force will release you..');
    }
    return '';
}

// Prompt what faction they are joining?
function getFaction() {
    var order = prompt('Will you join the REBELLION or the EMPIRE?');
    var item;

    if (order === 'rebellion') {
        item = '<img src="images/rebellion.png">';
    } else if (order === 'empire') {
        item = '<img src="images/empire.jpg">';
    }

    return item;
}


// Loop for How Many Bases Count
var howManybases = function () {
    var count = prompt('How many bases would you like to order?');

    while (count === '' || isNaN(count)) {
        var count = prompt('How many bases would you like to order? PLEASE enter a number');
    }

    return count;
}

//Loop for bases appearing result
function starwarsFaction() {
    var item = getFaction();
    var total = howManybases();
    var result = '';

    for (var i = 0; i < total; i++) {
        result = result + '<p>Base #' + (i + 1) + '' + item + '</p>';
    }
    return result;
}