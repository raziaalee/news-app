$.ajax({
	url: "https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=14a531983ea6412da67cf3e9d803c5a0",
	success: function(data){

		
		for(let i =0; i<=8; i++){

			document.querySelector(".main").innerHTML+=`
			<div class="card" id="news">
			<div class="card-img-top news" style="background-image: url(${data.articles[i].urlToImage})"></div>
			<div class="card-body">
			<h3 class="card-title author">${data.articles[i].author}</h3>
			<p class="card-text des">${data.articles[i].title}</p>
			<a href="${data.articles[i].url}" target="_blank"> <button class="btn btn-danger">Read More</button></a>
			</div>
			</div>

			`
		}
		
		

	},

	error: function(error){
		console.log(error);
	}

})

