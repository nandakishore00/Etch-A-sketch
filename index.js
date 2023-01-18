let color='black'
let click=false
let size =16
let clickToPause=document.querySelector("body")
let reset= document.querySelector(".btn-primary")
let pause=document.querySelector(".pause")
let grid=document.querySelector('.grid');
document.querySelector(".number").innerHTML=`${size}*${size} pixels`
let selectButton=document.querySelector(".btn-danger")
reset.addEventListener("click",resetButton)
clickToPause.addEventListener("click",function(e){
    if(e.target.tagName!=="BUTTON")
    {
    
    if(click==false){
    pause.innerText="U can resume sketching"
    click=true
    }
    else if(click ==true)
    {
        click= false
        pause.innerText="Please click somewhere on the screen to resume sketching"
    }
}
})
selectButton.addEventListener("click",function(){
    let getSize=selectSize();
    createGrid(getSize);
    document.querySelector(".number").innerHTML=`${size}*${size} pixels`

})
function selectSize()
{
   size=prompt("enter a number between 1 to 100")
    if(size==""){
        while(size==""){
            alert("please provide input")
            size=prompt("enter a number between 1 to 100")
        }
        
    }
    else if(size<0 || size>100)
    {
        while(size<0 ||size>100)
        {
            alert("number should be within 0 to 100")
            size=prompt("enter a number between 1 to 100")
        }
        
    }
    return size
}
function createGrid(size){
    document.querySelector('.grid').style.gridTemplateRows=`repeat(${size},1fr)`;
    document.querySelector('.grid').style.gridTemplateColumns=`repeat(${size},1fr)`;
    let numDiv=size*size;
    for (var i=0;i<numDiv;i++){
        let div=document.createElement("span");
        div.addEventListener("mouseover",colorDiv)
        grid.insertAdjacentElement("beforeend",div); 
    }
}
function colorDiv(){
    if(click==true)
    {
        if(color=='random'){
            this.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`
        }
        else if(color=='black'){
            this.style.backgroundColor='black';
        }
    }
}
function setColor(colorChoice){
   color=colorChoice
}
function resetButton(){
    let divs=document.querySelectorAll("span")
    divs.forEach((div)=>
    div.style.backgroundColor="white")
    click=false
    pause.innerText="Please click somewhere on the screen to resume sketching"  


}
createGrid(16)
