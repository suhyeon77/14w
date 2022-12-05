 function nightDayHandler(self){
  if(self.value == 'night'){
    self.value = 'day';
    Links.setColor('powderblue');
    Body.setColor('white');
    Body.setBackgroundColor('black');
  } else {
    self.value = 'night';
    Links.setColor('blue');
    Body.setColor('black');
    Body.setBackgroundColor('white');
  }
}

var Links = {
  setColor : function(color){
    var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
  }
}
}

var Body = {
  setBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor =color;
  },

  setColor : function(color){
    document.querySelector('body').style.color = color;
  }
}

/*
function linksSetColor(color){
  var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
}
function bodySetColor(color){
    document.querySelector('body').style.color = color;
}
function backgroundSetColor(color){
  document.querySelector('body').style.backgroundColor =color;
} */
