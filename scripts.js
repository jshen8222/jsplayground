


fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      getQuote(data);
    
  }); 

  const getQuote=(data)=>{
      let random=Math.trunc(data.length*Math.random());
      let quoteItem=data[random];
    console.log(quoteItem);
    return quoteItem;
  }

  $(document).ready(function(){
    $("#new-quote").click(function(){
      $("#text").load("demotext.txt");
      $("#author").html("- "+"Jian")
    });
  });
  





