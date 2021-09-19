var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/panda.png') {
        document.body.style.backgroundColor = '#d73b37';
        document.getElementById('pandaState').innerHTML = "This is angry panda!";
        myImage.setAttribute('src', 'images/angry-panda.png');
    }
    else if (mySrc == 'images/angry-panda.png') {
        document.body.style.backgroundColor = '#77ace2';
        document.getElementById('pandaState').innerHTML = "This is happy panda!";
        myImage.setAttribute('src', 'images/panda.png');
    }
}

// var myButton = document.querySelector('button');
// var pandaName = document.getElementById('pandaName');

// function setPandaName() {
//     var myName = prompt("Please enter panda's name.");
//     localStorage.setItem('name', myName);
//     pandaName.textContent = 'Panda is ' + myName;
//   }

//   if(!localStorage.getItem('name')) {
//     setPandaName();
//   } else {
//     var storedName = localStorage.getItem('name');
//     pandaName.textContent = 'Panda is ' + storedName;
//   }

//   myButton.onclick = function() {
//     setPandaName();
//   }