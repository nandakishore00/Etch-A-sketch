let grid=document.querySelector('.grid');
let selectButton=document.querySelector(".btn-danger")
selectButton.addEventListener("click",function(){
    let getSize=selectSize();
    createGrid(getSize);

})
function createGrid(size){
    document.querySelector('.grid').style.gridTemplateRows=`repeat(${size},1fr)`;
    document.querySelector('.grid').style.gridTemplateColumns=`repeat(${size},1fr)`;
    let numDiv=size*size;
    for (var i=0;i<numDiv;i++){
        let div=document.createElement("div");
        div.addEventListener("mouseover",function(){
        div.style.backgroundColor="black"
        })
        grid.insertAdjacentElement("beforeend",div);
    }
}

function selectSize()
{
    let size=prompt("enter a number between 1 to 100")
    if(size==""){
        while(size==""){
            alert("please provide input")
            size=prompt("enter a number between 1 to 64")
        }
        
    }
    else if(size<0 || size>64)
    {
        while(size<0 ||size>64)
        {
            alert("please provide input")
            size=prompt("enter a number between 1 to 64")
        }
        
    }
    return size
}

