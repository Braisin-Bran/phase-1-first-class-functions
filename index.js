function receivesAFunction(callbackFun = "return"){
   callbackFun();
}
function returnsANamedFunction(){
   let returnedFunction = function(){ 
      console.log("A named funciton has been returned!");
   }
   return returnedFunction;
   
   
}
function returnsAnAnonymousFunction(){
   return function(){
      console.log("Unnamed function has been returned!");
   }
}