m=0
function action(e){
    el=document.getElementById("dis1");
    el.style.color='black'
    switch(e.id) {
        case 'c':
          // code block
          el.value="0"
          break;
        case "ac":
          for (i = 1; i < 5; i++) {
            el=document.getElementById("dis"+i);
            el.value="0"
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
            el.value=e.id
          }
          else{
            el.value+=e.id
          }
          break;
        case "dot":
          if (el.value.indexOf('.')==-1){
            el.value+="."
          }
          break;
        case "enter":
          n=Number(el.value)
          if(isNaN(n))
            el.style.color='red'
          else{
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
          document.getElementById("dis4").value=0;
          break;
        case "plus":
          v=Number(document.getElementById("dis1").value);
          for (i = 2; i<5; i++) {
            e1=document.getElementById("dis"+i)
            e2=document.getElementById("dis"+(i-1))
            e2.value=e1.value;
          }
          el.value=Number(el.value)+v;
          document.getElementById("dis4").value=0;
          break;
        case "minus":
          v=Number(document.getElementById("dis1").value);
          for (i = 2; i<5; i++) {
            e1=document.getElementById("dis"+i)
            e2=document.getElementById("dis"+(i-1))
            e2.value=e1.value;
          }
          el.value=Number(el.value)-v;
          document.getElementById("dis4").value=0;
          break;
        case "X":
          v=Number(document.getElementById("dis1").value);
          for (i = 2; i<5; i++) {
            e1=document.getElementById("dis"+i)
            e2=document.getElementById("dis"+(i-1))
            e2.value=e1.value;
          }
          el.value=Number(el.value)*v;
          document.getElementById("dis4").value=0;
          break;
        case "div":
          v=Number(document.getElementById("dis1").value);
          for (i = 2; i<5; i++) {
            e1=document.getElementById("dis"+i)
            e2=document.getElementById("dis"+(i-1))
            e2.value=e1.value;
          }
          el.value=Number(el.value)/v;
          document.getElementById("dis4").value=0;
          break;
        case "pow":
          v=Number(document.getElementById("dis1").value);
          for (i = 2; i<5; i++) {
            e1=document.getElementById("dis"+i)
            e2=document.getElementById("dis"+(i-1))
            e2.value=e1.value;
          }
          el.value=Math.pow(Number(el.value),v);
          document.getElementById("dis4").value=0;
          break;
        case "%":
          v=Number(document.getElementById("dis1").value);
          for (i = 2; i<5; i++) {
            e1=document.getElementById("dis"+i)
            e2=document.getElementById("dis"+(i-1))
            e2.value=e1.value;
          }
          el.value=Number(el.value)*v/100;
          document.getElementById("dis4").value=0;
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
function key(e){
  regex = /^[0-9-]*(\.\d*)?((?<=[\d.])[eE]\d*)?$/;
  c=e.key
  v=document.getElementById('dis1').value
  str = v+e.key;
  let m;

  if ((m = regex.exec(str)) !== null) {
      return true;
  }
  e.preventDefault()
}