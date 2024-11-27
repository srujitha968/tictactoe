const c1 = document.querySelectorAll(".c")

var cp="0";
let stop=false;
c1.forEach(cell=> {
    cell.addEventListener("click", () => {
        if(cell.innerHTML!=="" || stop){           
       return;
        }

        cell.innerHTML=cp;

        if(c1[0].innerHTML===cp&&c1[1].innerHTML===cp&&c1[2].innerHTML===cp){
            document.getElementById("result").innerHTML=`${cp} is the winner`;
            stop=true;
            return;
        }else if(c1[3].innerHTML===cp&&c1[4].innerHTML===cp&&c1[5].innerHTML===cp){
            document.getElementById("result").innerHTML=`${cp} is the winner`;
            stop=true;
            return;
        } else if(c1[6].innerHTML===cp&&c1[7].innerHTML===cp&&c1[8].innerHTML===cp){
            document.getElementById("result").innerHTML=`${cp} is the winner`;
            stop=true;
            return;
        }else if(c1[0].innerHTML===cp&&c1[3].innerHTML===cp&&c1[6].innerHTML===cp){
            document.getElementById("result").innerHTML=`${cp} is the winner`;
            stop=true;
            return
        }else if(c1[1].innerHTML===cp&&c1[4].innerHTML===cp&& c1[7].innerHTML===cp){
            document.getElementById("result").innerHTML=`${cp} is the winner`;
            stop=true;
            return;
        }else if(c1[2].innerHTML===cp&&c1[5].innerHTML===cp&&c1[8].innerHTML===cp){
            document.getElementById("result").innerHTML=`${cp} is the winner`;
            stop=true;
            return;
        }else if(c1[0].innerHTML===cp&&c1[4].innerHTML===cp&&c1[8].innerHTML===cp){
            document.getElementById("result").innerHTML=`${cp} is the winner`;
            stop=true;
            return;
        }else if(c1[2].innerHTML===cp&&c1[4].innerHTML===cp&&c1[6].innerHTML===cp){
            document.getElementById("result").innerHTML=`${cp} is the winner`;
            stop=true;
            return;
        }else if(c1[0].innerHTML!=="" && c1[1].innerHTML!=="" && c1[2].innerHTML!=="" && c1[3].innerHTML!=="" && c1[4].innerHTML!=="" && c1[5].innerHTML!=="" && c1[6].innerHTML!=="" && c1[7].innerHTML!=="" && c1[8].innerHTML!==""){
            document.getElementById("result").innerHTML=`It is a tie`;
        }



        

        if(cp=="0"){
            cp="x";
        }
        else{       
            cp="0";
        }
    });
});

function res(){
    window.location="index.html"
}