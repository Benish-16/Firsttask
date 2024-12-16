const in1=document.getElementById("in1");


document.getElementById("in3").addEventListener('input', function() {
    if (this.value.length > 7) {

        this.value = this.value.slice(0, 7); 
    }
    
 
 
 
});
document.getElementById("in5").addEventListener('input', function() {
    if (this.value.length > 7) {

        this.value = this.value.slice(0, 7); 
    }
    
 
 
 
});
document.getElementById("in3").maxLength = 7;  

document.getElementById("in3").addEventListener('input', function() {
    if (this.value.length > 7) {
        this.value = this.value.slice(0, 7); 
    }
});
const  select1=document.getElementById("select1");

const in2=document.getElementById("in2");
const  select2=document.getElementById("select2");
const  select3=document.getElementById("select3");
const in3=document.getElementById("in3");
const in4=document.getElementById("in4");
let y;
const blu1 = document.getElementById("in3");
blu1.addEventListener("blur", function() {
    console.log("You have been blurred1!");
    y=10;
  
    
        });
        const blu2 = document.getElementById("in4");
        blu2.addEventListener("blur", function() {
    console.log("You have been blurred2!");


    y=20;
   
  
        });
        const blu3 = document.getElementById("in5");
        blu3.addEventListener("blur", function() {
    console.log("You have been blurred2!");


    y=30;
   
  
        });
function update(){
    
    
    in1.value = select1.value;
    if(y==10){
        console.log("1");
            blu1.focus();
            blu1.click();
           in3.style.color="red";
            in4.style.color = " black";
            in5.style.color = " black";
            
        }

          if(y==20){
            console.log("2");
            blu2.focus();
            blu2.click();
            in4.style.color="red";
            in5.style.color="black";
            in3.style.color = " black";
            
     
        
        }
        if(y==30){
            console.log("2");
            blu2.focus();
            blu2.click();
            in5.style.color="red";
            in4.style.color="black";
            in3.style.color = " black";
            
     
        
        }
        
        
          
   
        
   
  
   
   
 
}
   
 

    
 


function update2(){
    in2.value = select2.value;
    
    if(y==10){
        console.log("1");
            blu1.focus();
            blu1.click();
            in3.style.color="red";
            in4.style.color = " black";
            in5.style.color = " black";
            in4.style.outline = " none";
            in3.style.outline = " none";}

          if(y==20){
            console.log("2");
            blu2.focus();
            blu2.click();
            in4.style.color="red";
            in3.style.color = " black";
            in5.style.color = " black";
            in4.style.outline = " none";
            in3.style.outline = " none";}
            if(y==30){
                console.log("2");
                blu3.focus();
                blu3.click();
                in5.style.color="red";
                in3.style.color = " black";
                in4.style.color = " black";
                
         
            
            }
            
          
}
function update3(){
    in6.value = select3.value;
    
    if(y==10){
        console.log("1");
            blu1.focus();
            blu1.click();
            in3.style.color="red";
            in4.style.color = " black";
            in5.style.color = " black";
            in4.style.outline = " none";
            in3.style.outline = " none";}

          if(y==20){
            console.log("2");
            blu2.focus();
            blu2.click();
            in4.style.color="red";
            in3.style.color = " black";
            in5.style.color = " black";
            in4.style.outline = " none";
            in5.style.outline = " none";
            in3.style.outline = " none";}
            if(y==30){
                console.log("2");
                blu3.focus();
                blu2.click();
                in4.style.color="black";
                in5.style.color="red";
                in3.style.color = " black";
                
         
            
            }
            
          
}
document.getElementById("in3").addEventListener('focus', function() {
   in3.style.color="red"
    in4.style.color="black"
        in5.style.color="black"
    in4.style.outline = " none";
    in3.style.outline = " none";
    select1.style.outline = " none";
  
});
document.getElementById("in4").addEventListener('focus', function() {
 in4.style.color="red"
    in3.style.color="black"
       in5.style.color="black"
    in4.style.outline = " none";
            in3.style.outline = " none";
            select2.style.outline = " none";
    
});
document.getElementById("in5").addEventListener('focus', function() {
    in5.style.color="red"
       in3.style.color="black"
         in4.style.color="black"
       in4.style.outline = " none";
               in3.style.outline = " none";
               select3.style.outline = " none";
               
       
   });
   


async function Currencyfirst() {
   

   
  
    let input = parseFloat(document.getElementById("in3").value);
  

    const URL = "https://open.er-api.com/v6/latest/USD";

    
     
        let response = await fetch(URL);
       
        let data = await response.json();
        const rates = data.rates;

       

        const fromRate = rates[select1.value]
        const toRate1 = rates[select2.value];
        const toRate2 = rates[select3.value];

     

        
        const conversionRate1 = (toRate1 / fromRate);
        const conversionRate2 = (toRate2 / fromRate);
        let output1 = input * conversionRate1;
        let output2 = input * conversionRate2;
      
    
        



      
        
        
       

        document.getElementById("in4").value =   output1;
        document.getElementById("in5").value =   output2;
        }
    
       

async function Currencyfirst2() {
   
      
    
    let input = parseFloat(document.getElementById("in4").value);


    const URL = "https://open.er-api.com/v6/latest/USD";

   
     
        let response = await fetch(URL);
     
    
        let data = await response.json();
        const rates = data.rates;



        const fromRate = rates[select2.value];
        const toRate1 = rates[select1.value];
        const toRate2 = rates[select3.value];

       

        const conversionRate1 = (toRate1 / fromRate);
        const conversionRate2 = (toRate2 / fromRate);
  
    let output1 = input * conversionRate1;
    let output2 = input * conversionRate2;
    
     
       

    document.getElementById("in3").value = output1;
    document.getElementById("in5").value = output2;
       
    
}
async function Currencyfirst3() {
   
      
    
    let input = parseFloat(document.getElementById("in5").value);


    const URL = "https://open.er-api.com/v6/latest/USD";

   
     
        let response = await fetch(URL);
     
    
        let data = await response.json();
        const rates = data.rates;


        const fromRate = rates[select3.value];
        const toRate1= rates[select1.value];
        const toRate2 = rates[select2.value];

       
        console.log("hi2");
        const conversionRate1 = (toRate1 / fromRate);
        const conversionRate2 = (toRate2 / fromRate);
  
    let output1 = input * conversionRate1;
    let output2 = input * conversionRate2;
    
     
       

    document.getElementById("in3").value = output1;
    document.getElementById("in4").value = output2;
       
    
}
