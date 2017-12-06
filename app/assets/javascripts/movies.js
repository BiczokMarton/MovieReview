$(document).on('turbolinks:load', function(){
	var movies = new Boodhound({
		datumTokenizer:Boodhound.tokenizers.whitespace,
		queryTokenizer:Boodhound.tokenizers.whitespace,
		remote	:{
			url: '/movies/autocomplete?query=%QUERY',
			wildcard: '%QUERY'
		}
	});
	$('#movies_search').typeahead(null,{
		source: movies
	});

})