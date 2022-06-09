let turn ="X";
let gameover =0;
let count=0;
const changeTurn =()=>{
    return turn === "X"? "0":"X";
}
const checkWin = ()=>{
    let boxtext=document.getElementsByClassName('boxtext');
     let wins =[
         [0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
        ]
        wins.forEach(e=>{
           if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!== "")){
             gameover+=1;
             if(gameover==1){
                document.querySelector('.info').innerText= boxtext[e[0]].innerText +" Won" ;
             }
            
           }
           
        })
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText=== ''){
            boxtext.innerText=turn;
           turn = changeTurn();
            checkWin();
             count+=1;
            if(!gameover && count<9){
                    document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
            else if(!gameover){
                document.getElementsByClassName("info")[0].innerText="Draw";
            }
        }
    })
})

reset.addEventListener('click',()=>{
   let boxtexts=document.querySelectorAll('.boxtext');
   Array.from(boxtexts).forEach(element =>{
       element.innerText= ""
   });
   turn = "X";
   gameover=0;
   document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
})
