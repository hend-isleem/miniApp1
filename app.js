var t=false
let c=function(x){
if(!t){

if(x.innerText===""){x.innerText="X";x.style.color="red";x.style.padding="71px 82px 71px 82px"}
else if(x.innerText==="X"){x.innerText="O";x.style.color="blue";x.style.padding="71px 82px 71px 82px"}
else{x.innerText="";x.style.padding="100px"}

x1=document.getElementById('a1')
x2=document.getElementById('a2')
x3=document.getElementById('a3')
x4=document.getElementById('a4')
x5=document.getElementById('a5')
x6=document.getElementById('a6')
x7=document.getElementById('a7')
x8=document.getElementById('a8')
x9=document.getElementById('a9')

if(x1.innerText!==""&&x1.innerText===x5.innerText&&x1.innerText===x9.innerText){x1.style.color="green";x5.style.color="green";x9.style.color="green";console.log(x1.innerText+" wins!");t=true}
if(x3.innerText!==""&&x3.innerText===x5.innerText&&x3.innerText===x7.innerText){x3.style.color="green";x5.style.color="green";x7.style.color="green";console.log(x3.innerText+" wins!");t=true}

if(x1.innerText!==""&&x1.innerText===x2.innerText&&x1.innerText===x3.innerText){x1.style.color="green";x2.style.color="green";x3.style.color="green";console.log(x1.innerText+" wins!");t=true}
if(x4.innerText!==""&&x4.innerText===x5.innerText&&x4.innerText===x6.innerText){x4.style.color="green";x5.style.color="green";x6.style.color="green";console.log(x1.innerText+" wins!");t=true}
if(x7.innerText!==""&&x7.innerText===x8.innerText&&x7.innerText===x9.innerText){x7.style.color="green";x8.style.color="green";x9.style.color="green";console.log(x1.innerText+" wins!");t=true}

if(x1.innerText!==""&&x1.innerText===x4.innerText&&x1.innerText===x7.innerText){x1.style.color="green";x4.style.color="green";x7.style.color="green";console.log(x1.innerText+" wins!");t=true}
if(x2.innerText!==""&&x2.innerText===x6.innerText&&x2.innerText===x8.innerText){x2.style.color="green";x6.style.color="green";x8.style.color="green";console.log(x1.innerText+" wins!");t=true}
if(x3.innerText!==""&&x3.innerText===x5.innerText&&x3.innerText===x9.innerText){x3.style.color="green";x5.style.color="green";x9.style.color="green";console.log(x1.innerText+" wins!");t=true}
}
}

let r=function(b){
    x1=document.getElementById('a1').innerText=""
    x2=document.getElementById('a2').innerText=""
    x3=document.getElementById('a3').innerText=""
    x4=document.getElementById('a4').innerText=""
    x5=document.getElementById('a5').innerText=""
    x6=document.getElementById('a6').innerText=""
    x7=document.getElementById('a7').innerText=""
    x8=document.getElementById('a8').innerText=""
    x9=document.getElementById('a9').innerText=""

    x1=document.getElementById('a1').style.padding="100px"
    x2=document.getElementById('a2').style.padding="100px"
    x3=document.getElementById('a3').style.padding="100px"
    x4=document.getElementById('a4').style.padding="100px"
    x5=document.getElementById('a5').style.padding="100px"
    x6=document.getElementById('a6').style.padding="100px"
    x7=document.getElementById('a7').style.padding="100px"
    x8=document.getElementById('a8').style.padding="100px"
    x9=document.getElementById('a9').style.padding="100px"

    t=false
}