
document.getElementById("solicitar").addEventListener("click",agregarvianda);
let array=[];
function agregarvianda(){
    let frec=document.getElementsById("frecuencia").value;
   let menu=document.getElementsByName("tipomenu").value;
  let  item=document.getElementsByName("items").value;
   let fecha=document.getElementById("fecha").value;
   let cantidad=document.getElementById("cantidad").value;
   let pendiente="Pendiente";
    let x=new Vianda(frec,menu,item,fecha,cantidad,pendiente);
    array.push(x);
    console.log(array);

}


function Vianda(frec,menu,item,fecha,cantidad,pendiente){
        this.frec=frec;
        this.menu=menu;
        this.item=item;
        this.fecha=fecha;
        this.cantidad=cantidad;
        this.pendiente=pendiente;
    }
