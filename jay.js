let p = document.getElementsByClassName('hidden');
let myText;

for (i = 0; i < p.length; i++) {
  if (p[i].innerHTML == "My Text") {
    // console.log(myText, p[0].innerHTML);
    myText = p[i];
    break;
  }
}

myText.removeAttribute("hidden"); 