var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	//this is for user input
	var searchTerm=$("#searchInput").val();
	var yearBegin=$("#startYear").val();
	var yearEnd=$("#endYear").val();
	var yearBeginCode=yearBegin+=0101
	var yearEndCode=yearEnd+=0101
	url += '?' + $.param({
  	'api-key': "e85e5e2d0c1743efa02fc2149358728e",
  	'q': searchTerm,
  	'begin_date': yearBeginCode,
  	'end_date': yearEndCode
});

	console.log(url)
$.ajax({
  url: url,
  method: 'GET',
}).done(function(responce){
  
$("button").on("click" function(){
	console.log(responce);

})
  console.log(responce);




})
