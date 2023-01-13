let grid=document.querySelector('.grid');

createGrid(16);
function createGrid(size){
    document.querySelector('.grid').style.gridTemplateRows=`repeat(${size},1fr)`;
    document.querySelector('.grid').style.gridTemplateColumns=`repeat(${size},1fr)`;
    
    
    
    let numDiv=size*size;
    

}
