
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