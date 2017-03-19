$(function(){

  let bioHeader = 'How did I get here?';
  let skillsHeader = 'Life in Motion';
  let projectsHeader = 'All Together Now';
  let currentHeader = 'Surfacing the Depths';
  let artworkHeader = 'Imagine That';
  let contactHeader = 'Let\'s do this';

  let bioText = 'bio text';
  let skillsText = 'skills text';
  let projectsText = 'projects text';
  let currentText = 'current text';
  let artworkText = 'artwork text';
  let contactText = 'contact text';


  let loadSection = function(e){

  e.preventDefault();

  let section = $(this).text();

  $('#mural').attr('src', 'images/' + section + '.png'); //set the mural

  let headerText = function() {
    if(section === 'bio') {
      return bioHeader;
    } else if (section === 'skills') {
      return skillsHeader;
    } else if (section === 'projects') {
      return projectsHeader;
    } else if (section === 'current') {
      return currentHeader;
    } else if (section === 'artwork') {
      return artworkHeader;
    } else if(section === 'contact') {
      return contactHeader;
    }
  };

  headerText();

  let copyText = function() {
    if(section === 'bio') {
      return bioText;
    } else if (section === 'skills') {
      return skillsText;
    } else if (section === 'projects') {
      return projectsText;
    } else if (section === 'current') {
      return currentText;
    } else if (section === 'artwork') {
      return artworkText;
    } else if(section === 'contact') {
      return contactText;
    }
  };

  copyText();

  $('#header').text(headerText); // set the section title

  $('#copy').text(copyText); // set the section copy

      // var copy = ['<li>',
      //                    '<div class="row reg-post">',
      //                     '<div class="col-md-1">',
      //                        '<h5>' , childScore , '</h5>',
      //                      '</div>',
      //                      '<div class="col-md-3">',
      //                        '<img src="' , emptyImage ? 'img/Reddit.png' : childImage ,'"/>',
      //                      '</div>',
      //                      '<div class ="col-md-7">',
      //                      '<h5>',
      //                      '<a href="' , childUrl, '">', childTitle, '</a>',
      //                      '</h5>',
      //                      '</div>',
      //                    '</div>',
      //                  '</li>'
      //                 ].join('');
      //  $('#content').append(copy);


  };//end loadSection function

  //click event handlers
  //$('#home').on('click', loadHome);
  $('#bio').on('click', loadSection);
  $('#skills').on('click', loadSection);
  $('#projects').on('click', loadSection);
  $('#current').on('click', loadSection);
  $('#artwork').on('click', loadSection);
  $('#contact').on('click', loadSection);

}); // end doc ready
