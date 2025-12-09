function run1(fn:any){
    setInterval(fn,1000);
}

run1(function(){
    console.log("hey there!");  // this is called callback 
})




function run2(fn:()=>void){
    setInterval(fn,1000);
}  

run2(function(){
    console.log("hey there2!");  // this is called callback 
})