m=0
stack=[]
el=document.getElementById("dis1");
function action(e){
  el.style.color='black'
  keyAction(e.id)
}
function key(e){
  el.style.color='black'
  regex = /^[0-9-]?[0-9]*(\.\d*)?((?<=[\d.])[eE]\d*)?$/;
  c=e.key
  v=document.getElementById('dis1').value
  str = v+e.key;
  let m;
  if ((m = regex.exec(str)) !== null) 
      return true;
  keyAction(c)
  e.preventDefault()
}
function keyAction(s){
  switch(s) {
    case 'c':
      // code block
      el.value="0"
      break;
    case "ac":
      for (i = 1; i < 5; i++) {
        e=document.getElementById("dis"+i);
        e.value="0"
        stack=[]
      }
      break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      if (el.value=="0"){
        el.value=s
      }
      else{
        el.value+=s
      }
      break;
    case "dot":
      if (el.value.indexOf('.')==-1){
        el.value+="."
      }
      break;
    case "Enter":
      n=Number(el.value)
      if(isNaN(n))
        el.style.color='red'
      else{
        stack.push(document.getElementById("dis4").value)
        for (i = 4; i>1; i--) {
          e1=document.getElementById("dis"+i)
          e2=document.getElementById("dis"+(i-1))
          e1.value=e2.value;
        }
        el.value=0
      }
      break;
    case "pop":
      for (i = 2; i<5; i++) {
        e1=document.getElementById("dis"+i)
        e2=document.getElementById("dis"+(i-1))
        e2.value=e1.value;
      }
      if(stack.length==0)
        document.getElementById("dis4").value=0;
      else
        document.getElementById("dis4").value=stack.pop();
      break;
    case "plus":
    case "+":
      v=Number(document.getElementById("dis1").value);
      for (i = 2; i<5; i++) {
        e1=document.getElementById("dis"+i)
        e2=document.getElementById("dis"+(i-1))
        e2.value=e1.value;
      }
      el.value=Number(el.value)+v;
      if(stack.length==0)
        document.getElementById("dis4").value=0;
      else
        document.getElementById("dis4").value=stack.pop();
      break;
    case "minus":
    case "-":
      v=Number(document.getElementById("dis1").value);
      for (i = 2; i<5; i++) {
        e1=document.getElementById("dis"+i)
        e2=document.getElementById("dis"+(i-1))
        e2.value=e1.value;
      }
      el.value=Number(el.value)-v;
      if(stack.length==0)
        document.getElementById("dis4").value=0;
      else
        document.getElementById("dis4").value=stack.pop();
      break;
    case "X":
      v=Number(document.getElementById("dis1").value);
      for (i = 2; i<5; i++) {
        e1=document.getElementById("dis"+i)
        e2=document.getElementById("dis"+(i-1))
        e2.value=e1.value;
      }
      el.value=Number(el.value)*v;
      if(stack.length==0)
        document.getElementById("dis4").value=0;
      else
        document.getElementById("dis4").value=stack.pop();
      break;
    case "div":
    case "/":
      v=Number(document.getElementById("dis1").value);
      for (i = 2; i<5; i++) {
        e1=document.getElementById("dis"+i)
        e2=document.getElementById("dis"+(i-1))
        e2.value=e1.value;
      }
      el.value=Number(el.value)/v;
      if(stack.length==0)
        document.getElementById("dis4").value=0;
      else
        document.getElementById("dis4").value=stack.pop();
      break;
    case "pow":
      v=Number(document.getElementById("dis1").value);
      for (i = 2; i<5; i++) {
        e1=document.getElementById("dis"+i)
        e2=document.getElementById("dis"+(i-1))
        e2.value=e1.value;
      }
      el.value=Math.pow(Number(el.value),v);
      if(stack.length==0)
        document.getElementById("dis4").value=0;
      else
        document.getElementById("dis4").value=stack.pop();
      break;
    case "%":
      v=Number(document.getElementById("dis1").value);
      for (i = 2; i<5; i++) {
        e1=document.getElementById("dis"+i)
        e2=document.getElementById("dis"+(i-1))
        e2.value=e1.value;
      }
      el.value=Number(el.value)*v/100;
      if(stack.length==0)
        document.getElementById("dis4").value=0;
      else
        document.getElementById("dis4").value=stack.pop();
      break;
    case 'inv':
      el.value=1/Number(el.value)
      break;
    case 'change':
      el.value=-Number(el.value)
      break;
    case 'sqrt':
      v=Math.sqrt(Number(el.value))
      if(isNaN(v))
        el.style.color='red'
      else
        el.value=Math.sqrt(Number(el.value))
      break;
    case 'swap':
      el2=document.getElementById('dis2')
      v=el2.value
      el2.value=el.value
      el.value=v
      break;
    case 'mp':
      m+=Number(el.value)
      break;
    case 'M':
      m-=Number(el.value)
      break;
    case 'MR':
      el.value=m
      break;
    case 'MC':
      m=0
      break;
    default:
  }
}
buttons = document.getElementsByTagName("button");
x=window.matchMedia("(max-width: 480px)")
if(!x.matches){
for(button of buttons){
  addHover(button)
  delHover(button)
}

  function addHover(button) {
    button.addEventListener("mouseover",function(){
      button.style.background="#fed8b1"//light orange
    })
    // button.addEventListener("touchstart",function(){
    //   button.style.background="#fed8b1"//light orange
    // })
  }
  function delHover(button) {
    button.addEventListener("mouseout",function(){
      button.style.background="whitesmoke"// lightgray
    })
    // events=["touchend","touchcancel","touchmove","mouseout"]
    // for(e of events){
    //   button.addEventListener(e,function(){
    //     button.style.background="whitesmoke"
    //   })
    // }
  }
}