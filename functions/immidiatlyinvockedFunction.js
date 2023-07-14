/* imidiatly invoked function are anonymous function those execute just after declaration*/
((x)=>console.log(x*x))(2);
//also written as
(function(x){
    console.log(x*x)
})(2);