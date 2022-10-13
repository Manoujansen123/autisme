//clock

function setClock() {
    let now = new Date();
    let hours = now .getHours();
    let minutes = now .getMinutes();
    let seconds = now .getSeconds();
  
    //calculating the clock hands here :)
    hrValue = (hours * 30) + (minutes * 6) / 12;
    minValue = minutes * 6;
    secValue = seconds * 6;
  
    //theez will add the valuezzzz to de la clock hands :)
    document.querySelector(".hr-hand").style.transform = "rotate(" + hrValue + "deg";
    document.querySelector(".min-hand").style.transform = "rotate(" + minValue + "deg";
    document.querySelector(".sec-hand").style.transform = "rotate(" + secValue + "deg";
  }
  
  setInterval(setClock, 1000);