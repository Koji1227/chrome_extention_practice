// 授業資料の語尾を変更する

function f(n){
    let cs = n.childNodes;
    for(let i = 0; i < cs.length; i++){
      let c = cs[i];
      if(c.nodeType == Node.TEXT_NODE){
        c.textContent = c.textContent.replace(/です。/g, "でありますな。");
      }
      else{
        f(c);
      }
    }
  }
  
  f(document.body); // document.body は HTML の文章全体を示す要素