$(function() {
    // Apply Bootstrap CSS styles to plain rendered markdown
    $('.md-content table').addClass('table');
    $('.md-content img').addClass('img-fluid');
    $('.md-content img').addClass('shadow');
    $('.md-content img').addClass('my-4');
    $('.md-content blockquote').addClass('blockquote');
});

$(function() {
  var tutorials = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title', 'summary'),
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
      if (result.level == filter || filter == 'All Categories') {
        filteredResults.push(result);
      }
    }
    showResults(filteredResults);
  }

  function showResults(results) {
    var tutorialList = $('#tutorial-list');
    if(results.length) {
      var result = '';
      $.each(results, function(i, tutorial) {
        result += '<div class="card-container col-md-6 col-lg-4 m-lg-0 py-3">';
        result += '  <a class="card-tut-link" href="' + tutorial.url + '">';
        result += '    <div class="card shadow h-100">';
        result += '      <div class="card-header text-light bg-dark">';
        result += '        <div class="card-category">';
        result += '          <small class="title text-uppercase">' + tutorial.level + '</small>';
        if (tutorial.level == 'Series') {
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
    else {
      var noResults = '<div class="card-container col-sm-12 col-md-8 offset-md-2 mb-5">';
          noResults += '  <div class="card shadow p-5 text-center">';
          noResults += '    <h3>No Matches</h3>';
          noResults += '    <p>Can\'t find what you\'re looking for? Make a suggestion or ask our support team for help by submitting a <a href="https://support.ehelp.edu.au/support/tickets/new">support ticket</a>.</p>';
          noResults += '  </div>';
          noResults += '</div>';
      tutorialList.html(noResults);
    }
  }

});

$(function() {
  // Check if user has reached the final page of a tutorial
  if($("#tutorial-page").hasClass("last-page")) {
    var completedTutorial;
    if($("#tutorial-page").attr("data-tut-name")) {
      const tutNameAttr = "data-tut-name";
      tutorialLabel = $("#tutorial-page").attr(tutNameAttr);
      storeCompleted(tutorialLabel);
    }
  }
  
  if($(".series-tutorial").length && localStorage.completedTutorials) {
    // If the current page has the .series-tutorial elements 
    // and localStorage.completedTutorials exists, 
    // show completed status
    showCompletedStatus();
  }
});

function storeCompleted(completedTutorial) {
  //console.log(completedTutorial);
  if(localStorage.completedTutorials) {
    //console.log("Has local storage object");
    var completedTutorialsArr = JSON.parse(localStorage.getItem("completedTutorials"));
    
    // Is the completed tutorial label in stored list of completed tutorials?
    if($.inArray(completedTutorial, completedTutorialsArr) == -1) {
      // It's not found so let's update the stored list
      completedTutorialsArr.push(completedTutorial);
      localStorage.completedTutorials = JSON.stringify(completedTutorialsArr);
    }
  } else {
    //console.log("No local storage object");
    var completedTutorialsArr = [completedTutorial];
    localStorage.setItem("completedTutorials", JSON.stringify(completedTutorialsArr));
  }
}

function showCompletedStatus() {
  $(".series-tutorial").each(function() {
    var tutorialLabel = $(this).attr('id');
    
    var completedTutorialsArr = JSON.parse(localStorage.getItem("completedTutorials"));
    if($.inArray(tutorialLabel, completedTutorialsArr) != -1) {
      console.log("Completed " + tutorialLabel);
      $(this).addClass("completed");
      $(this).append("<span class='tut-complete'></span>")
    }
  });
}