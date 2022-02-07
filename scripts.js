

let quoteItem={};
let quoteList=[];
fetch("https://type.fit/api/quotes")
  .then(function(response) {
  
    return response.json();
  })
  .then(function(data) {

      window.onload = function(){ 
        getQuote(data);
        $("#text").html("<h3>"+quoteItem.text+"</h3>");
      $("#author").html("<h5> - "+quoteItem.author+"</h5>"); }
    
      $("button").click(function(){
        getQuote(data);
        $("#text").html("<h3>"+quoteItem.text+"</h3>");
        $("#author").html("<h5> - "+quoteItem.author+"</h5>"); 

      })
    
    
  }); 
    
  
  const getQuote=(d)=>{
    let random=Math.trunc(d.length*Math.random());
     quoteItem=d[random];
  console.log(quoteItem.text+"-"+quoteItem.author);

  return quoteItem;

}



  





