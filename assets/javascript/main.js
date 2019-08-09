$(function() {
    // Apply Bootstrap CSS styles to plain rendered markdown
    $('.md-content table').addClass('table');
    $('.md-content img').addClass('img-fluid');
    $('.md-content img').addClass('shadow');
    
	$('.md-content blockquote').addClass('blockquote');
});

$(function() {
  var tutorials = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: baseurl + '/search.json',
	cache: false, /* remove for production */
  });

  // Initialise
  searchResults();

  $('.search-filter-menu a').click(function(){
    $('#search-filter-button').text($(this).text());
	searchResults();
  });

  $('#search-input').on('keyup keypress blur change', function() {
    var clear = $('#search-clear');
    if ($(this).val() === '') {
      clear.hide();
	} else {
      clear.show();
	}
    searchResults();
  });

  $('#search-filter').on('change', function() {
    searchResults();
  });

  $('#search-clear').click(function(){
    $('#search-input').val('');
    $(this).hide();
    searchResults();
  });

  function searchResults() {
    var search = $('#search-input').val();
    if (search === '') {
      filterResults(tutorials.index.datums);
    } else {
      tutorials.search(search, filterResults, filterResults);
    }
  }

  function filterResults(results) {
	var filter = $('#search-filter-button').text();
	console.log('Filtering by: ' + filter);

	var filteredResults = [];
	for (i in results) {
	  var result = results[i];
	  if (result.categories == filter || filter == 'All Topics') {
        filteredResults.push(result);
	  }
	}
    showResults(filteredResults);
  }

  function showResults(results) {
    var tutorialList = $('#tutorial-list');
    tutorialList.html('');
    $.each(results, function(i, result) {
      tutorialList.append('\
        <div class="card-container col-md-6 col-lg-4 mb-6 m-lg-0 py-3">\
          <a href="'+result.url+'">\
            <div class="card shadow h-100">\
              <div class="card-header text-light bg-dark">\
                '+result.categories+'\
                <h5 class="card-title">'+result.title+'</h5>\
              </div>\
              <div class="card-body">\
                <small class="text-muted">'+result.published+'</small>\
                <p class="card-text">'+result.summary+'</p>\
              </div>\
              <div class="card-footer">\
                <div class="row">\
                  <div class="col">\
                    <small class="text-muted">Difficulty: </small>\
					<span class="difficulty-indicator difficulty-indicator-'+result.difficulty+'">\
					  '+result.difficulty+' out of 5\
					</span>\
                  </div>\
                  <div class="col">\
                    <small class="text-muted">Duration: '+result.duration+'</small>\
                  </div>\
                </div> \
              </div>\
            </div>\
          </a>\
        </div>');
    });
  }
});
