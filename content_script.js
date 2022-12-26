let calendars = document.querySelectorAll(".list-rst__calendar-frame");
for(let i = 0; i < calendars.length; i++){
  let e = calendars[i];
  e.style.display = 'none';
}

function f(n){
  let cs = n.childNodes;
  for(let i = 0; i < cs.length; i++){
    let c = cs[i];
    if(c.nodeType == Node.TEXT_NODE){
      c.textContent = c.textContent.replace(/です。/g, "でござるよ。");
    }
    else{
      f(c);
    }
  }
}

f(document.body); // document.body は HTML の文章全体を示す要素