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
    prefetch: baseurl + '/search.json?q=' + Date.now(), /* remove Date for production caching */
  });

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
    var filteredResults = [];
    for (i in results) {
      var result = results[i];
      if (result.category == filter || filter == 'All Topics') {
        filteredResults.push(result);
      }
    }
    showResults(filteredResults);
  }

  function showResults(results) {
    var tutorialList = $('#tutorial-list');
    tutorialList.html('');
    var result = '';
    $.each(results, function(i, tutorial) {
      result += '<div class="card-container col-md-6 col-lg-4 m-lg-0 py-3">';
      result += '  <a href="' + tutorial.url + '">';
      result += '    <div class="card shadow h-100">';
      result += '      <div class="card-header text-light bg-dark">';
      result += '        <div class="card-category">';
      result += '          <small class="title text-uppercase">' + tutorial.category + '</small>';
      if (tutorial.category == 'Series') {
        result += '            <img src="' + baseurl + '/assets/images/series-badge.svg" class="series float-right" alt="Nectar Series">';
      }
      result += '        </div>';
      result += '        <h5 class="card-title mb-0">' + tutorial.title + '</h5>';
      result += '      </div>';
      result += '      <div class="card-body">';
      result += '        <small class="text-muted">' + tutorial.published + '</small>';
      result += '        <p class="card-text py-2">' + tutorial.summary + '</p>';
      result += '      </div>';
      result += '      <div class="card-footer">';
      result += '        <div class="row no-gutters">';
      result += '          <div class="col-xs-auto">';
      result += '            <small class="text-muted">Difficulty: </small>';
      result += '            <span class="difficulty-indicator difficulty-indicator-' + tutorial.difficulty + '">';
      result += '              ' + tutorial.difficulty + ' out of 5';
      result += '            </span>';
      result += '          </div>';
      result += '          <div class="col text-right">';
      result += '            <small class="text-muted">Duration: ' + tutorial.duration + '</small>';
      result += '          </div>';
      result += '        </div>';
      result += '      </div>';
      result += '    </div>';
      result += '  </a>';
      result += '</div>';
    });
    tutorialList.html(result);
  }

});
