function showedit() 
{
 var a =document.getElementById("bn1"); 
    if(a.value=="yes") 
    {
        document.querySelector("#d2").style.display="block";

    } 
     
} 

function showedit2() 
{
     
    var b =document.getElementById("bn2"); 
   
    if(b.value=="hide") 
    {
        document.querySelector("#d2").style.display="none";
    }
    
} 

function color(){

   var s=document.getElementById("s1"); 

   if(s.selectedIndex=="1")
   {
       document.getElementById("he").style.backgroundColor="red";
       
    } else if(s.selectedIndex=="2")
    {
        document.getElementById("he").style.backgroundColor="blue";
        
     }else if(s.selectedIndex=="3")
     {
         document.getElementById("he").style.backgroundColor="green";
         
      }else if(s.selectedIndex=="4")
      {
          document.getElementById("he").style.backgroundColor="yellow";
          
       }else {
        document.getElementById("he").style.backgroundColor="#3333" ;
        document.getElementById("sp").innerHTML="please for a color" ;
        document.getElementById("sp").style.color="red"; 
       }
  
       // for text now 
    var t=document.getElementById("inv");
    var hea=document.getElementById("he");
    hea.textContent=t.value;  
    hea.style.textAlign="center";
    hea.style.fontWeight="bold";
    hea.style.fontSize="30px";
} 
function bnk(){
  var a= document.getElementById("bnk"); 
 var heas=document.getElementById("he");
  if(a.checked==true) 
  {
       heas.style.borderBottom="5px solid black";
  }else{
    heas.style.borderBottom="";
  }

}


