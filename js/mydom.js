function changeVal(evt)
{
   evt.preventDefault();
document.getElementsByTagName("h1")[0].style.color="red";
 let tab=document.getElementsByTagName("table")[0];
let search=frm.txtname.value;

 tbody=tab.getElementsByTagName("tbody")[0];
 var trows=tbody.getElementsByTagName("tr");
 
 for(i=0;i<trows.length;i++)
 {
  let tdata=trows[i].getElementsByTagName("td");

 for(j=0;j<tdata.length;j++)
 {
    if(tdata[j].innerText==search)
     {
       console.log(tdata[1].innerText + " " + tdata[2].innerText);
      }
  }//inner
 }//for
  //let arrdata=[...tdata];
} 





 //var resultarr=arrdata.filter( data =>(data.innerText==search));
 
//            } //for

//            if(resultarr.length>0)
// console.log(resultarr[0].innerText);

// }








// if(resultarr.length>0)
// {
// console.log(resultarr[1].innerText);
// }


//  console.log(trows);

//  var row=trows[1];
//  console.log(row);

//  var tdata=trows.getElementsByTagName("td");

//  console.log(tdata[0].innerText);

