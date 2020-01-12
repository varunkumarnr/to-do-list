var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener("click", function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var quotes = ['it does not matter how slowly you go as long as you do not stop - Confucius','the secret of getting ahead is getting started-Mark Twian','Tough times dont last last,Tough people do-Robert.H Schuller','keep going everthing you need will come to in the perfect time','You have to be at your strongest when you are feeling at your weakest','never give up great things take time ,be patient',
'If you feel like giving up , think why you started','Look in mirror,thats your compitaion','If you can dream it,you can do it-Walt Disney',
'If you cannot fly then run,if you cannot run then walk ,if you cannot walk then crawl,whatever you do don\'t stop moving forward-Martin Luther king Jr',
'You don\'t have to be great to start,you have to start to be great','Nothing will work unless you do','If your not making mistakes your not making descisions',
'Make habits the habits will make you','Today\'s achivements were yesterdays impossibilites','Average person dies at 25,and is buried at 75',
'Never let anyone out work you' 
]

function newquote() {
  var RandomNumber = Math.floor(Math.random()*quotes.length);
  document.getElementById('quotes').innerHTML = quotes[RandomNumber];
  console.log(document.getElementById('quotes').innerHTML )
}