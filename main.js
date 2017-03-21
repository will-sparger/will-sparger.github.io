$(function(){

  let homeHeader = 'Will Sparger';
  let bioHeader = 'Moving in Place';
  let skillsHeader = 'Life in Motion';
  let projectsHeader = 'All Together Now';
  let currentHeader = 'Surfacing the Depths';
  let artworkHeader = 'Imagine That (coming soon)';
  let contactHeader = 'Let\'s do something amazing';

  let homeText = 'I create in a middle ground between design and development. I perceive patterns that allow me to uniquely solve problems and create simple, beautiful experiences. Although highly visual and creative, I\'m also analytical and detail-oriented which empowers me to think comprehensively in order to effectively implement complex ideas in novel ways. I’m actively seeking to join a team of passionate builders focused on creating innovative web content. If you’re seeking a front end engineer, UI developer, UX/Dev hybrid or a product minded developer with a high design acumen I’d love to chat!'
  let bioText = 'After four and a half years at Apple I had reached a personal turning point. I knew I was not content professionally but I was not sure how to take the next step.  After doing some exploration with HTML and CSS I saw a way forward in web development. I left Apple in September of 2016 and diligently began studying as much as possible. I quickly realized it is no small feat to strike out on your own and enter the industry. Knowing my time was limited, I decided to take the bootcamp route and landed on General Assembly. During the twelve week cohort I learned a great deal but what stands out most is the perspective I was able to achieve. I now know what matters to me in development and what I need to do to grow in the right ways moving forward. I am incredibly grateful to the entire team at GA for helping me pursue my passions as a creative, thoughtful problem solver.';
  let skillsText = 'skills text';
  let projectsText = 'projects text';
  let currentText = 'current text';
  let artworkText = 'For the last couple of years I have been making digital “paintings” as a creative outlet. Initially, I cut my teeth using Keynote to create patterns and abstract kaleidoscopic scenes and eventually built off of these explorations to create new pieces. As I grew as an artist I slowly dabbled with apps on my phone and have mostly created my subsequent works that way. I love the immediate, tactile quality of working with my hands on touch screens and also how simple the interfaces often are versus a desktop program such as Illustrator or Affinity. I suspect part of this inclination lies in my fascination and admiration of painters. My whole life I’ve always been taken with how painters can conjure worlds seemingly out of nothing and hope I can achieve a similar effect in my software someday. Stay tuned for a sampling of my work.';
  let contactText = 'contact text';



  let loadSection = function(e){

  e.preventDefault();

  let section = $(this).text();

  let activeClassVerification = function() {
    $('#navigation').each(function (index, element) {
      if($(element).hasClass('active')) {
        // $(element).removeClass('active')
        console.log('Removed!');
      }
    })
  };

  $('#mural').attr('src', 'images/' + section + '.png'); //set the mural image
  //activeClassVerification();



  let headerText = function() { // determine the title
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

  let copyText = function() { // determine the copy
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

  $('#header').text(headerText); // set the content title

  $('#copy').text(copyText); // set the content copy

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
  $('#home').on('click', loadSection);
  $('#bio').on('click', loadSection);
  $('#skills').on('click', loadSection);
  $('#projects').on('click', loadSection);
  $('#current').on('click', loadSection);
  $('#artwork').on('click', loadSection);
  $('#contact').on('click', loadSection);

}); // end doc ready
