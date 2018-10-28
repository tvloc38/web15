var nextPageToken = null;
var isLoading = false;
var debouncing = null;
var throttling = null;

$(document).ready(function() {
	$('#search').on('input', function() {
		// event.preventDefault();

		// $('#result-list').empty();
		$('#result-list').html('');

        const keyword = $("#keyword").val();
        if (keyword) {
			// debounce
            // clearTimeout(debouncing);
            // debouncing = setTimeout(function() {
            //     console.log(keyword);
            //     nextPageToken = null;
            //     loadData(keyword);
			// }, 1000);
			
			// throttle
			if(!throttling) {
				console.log(keyword);
				throttling = true;
            	setTimeout(function() {
					throttling = false;
				}, 1000);
				nextPageToken = null;
				loadData(keyword);
			}
        }
	});

	$(window).on("scroll", function() {
		if($(document).height() - ($(window).height() + $(window).scrollTop()) < 500) {
            if(!isLoading) {
                isLoading = true;
                console.log("Load them data");
			    const keyword = $("#keyword").val();
                loadData(keyword);
            }
		}
	});
});

function loadData(keyword) {
	console.log(nextPageToken);
	$.ajax({
		url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw${nextPageToken ? '&pageToken='+nextPageToken : ''}`,
		type: "GET",
		success: function(data) {
			if(data.nextPageToken) nextPageToken = data.nextPageToken
			else nextPageToken = null;

			const items = data.items;
			let listElem = items.map(item => `
				<a class="result col-md-12" href="https://www.youtube.com/watch?v=${item.id.videoId}?autoplay=true" target="_blank">
					<img src="${item.snippet.thumbnails.high.url}" alt="">
					<div class="video_info">
						<h2 class="title">${item.snippet.title}</h2>
						<p class="description">${item.snippet.description}</p>
						<span>View >></span>
					</div>
				</a>
			`);
            $("#result-list").append(listElem);
            isLoading = false;
		}
	});
}