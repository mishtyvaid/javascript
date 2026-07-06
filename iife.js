(function chai(){
    console.log(`hello`)
})();
//runs immediately - global pollution avoid krne ke liye
((namr)=>{
    console.log(`hello ${namr}`)
})("neha");