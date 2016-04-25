function getValue(){
    var myArray= ["BRILLIANT","BORDERLINE GENIUS","SUPER ENTHUSIASTIC", "TALENTED", "MAGNIFICENT", "SMART", "FUNNY", "COOL"];
    var blanks = document.getElementsByClassName("message");

    for(i=0; i<blanks.length; i++){
      var random = Math.floor(Math.random() * myArray.length);
      blanks[i].innerHTML = myArray[random];
      myArray.splice(random, 1);
    }
}


