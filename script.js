var userInput= prompt(
    "Where do you want to start?\n \n1: Forward counting\n2: Backward counting\n3: Tables \n\n Select any one"
  );
  
  if (userInput === "Forward counting".toLowerCase()) {
    var startFrom = +prompt("Enter Your Starting Number");
    var endFrom = +prompt("Enter Your Ending Number");
    document.write("Forward counting:<br>");
    for (var i = startFrom; i <= endFrom; i += 10) {
      for (var j = i; j < i + 10 && j <= endFrom; j++) {
        document.write(" " + j + " ");
      }
      document.write("<br>");
    }
  }
  else if(userInput === "Backward counting".toLowerCase()){
      var startFrom = +prompt("Enter Your Starting Number");
      var endFrom = +prompt("Enter Your Ending Number");
      document.write("Backward counting:<br>");
      
      for (var i =endFrom; i >=startFrom; i -= 10) {
          for (var j = i; j > i -10; j--) { 
              document.write(" " + j + " ");
          }
          document.write("<br>");
      }
  }
   else if (userInput === "Tables".toLowerCase()) {
    var Total = +prompt("Enter Table Number");
    var startFirst = +prompt("Enter Your Starting Number");
    var startEnd = +prompt("Enter Your Ending Number");
    document.write("Tables:<br>");
    for (var i = startFirst; i <= startEnd; i++) {
      document.write(Total + "X " + i + " = " + Total * i + "</br>");
    }
  }
  else {
    document.write("<h1>TRY AGAIN!</h1> ")
  }