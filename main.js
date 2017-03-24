$(function(){

  // let mobileNav = [ '<ul id="list" class="nav-options">', '<li>',
  //                 '<a href="#" id="menu-button" class="burger" title="Click for Navigation Options">',
  //                 '&#9776;', '</a>', '</li>', '<li>', '<a href="#" id="home"  title="Home">',
  //                 'home', '</a>', '</li>', '<li>', '<a href="#" id="bio"  title="How I got here">',
  //                 'bio', '</a>', '</li>', '<li>', '<a href="#" id="skills" title="What I can do">',
  //                 'skills', '</a>', '</li>', '<li>', '<a href="#" id="projects" title="Projects at GA">',
  //                 'projects', '</a>', '</li>', '<li>', '<a href="#" id="current" title="What I\'m working on">',
  //                 'current', '</a>', '</li>', '<li>', '<a href="#" id="artwork" title="Samples of my digital art">',
  //                 'artwork', '</a>', '</li>', '<li>', '<a href="#" id="contact" title="Let\'s collaborate!">',
  //                 'contact', '</a>', '</li>', '</ul>'].join();
  let homeHeader = 'Will Sparger';
    let homeParagraphOne = 'I create in a middle ground between design and development. I perceive patterns that allow me to uniquely solve problems and create simple, beautiful experiences. Although highly visual and creative, I\'m also analytical and detail-oriented which empowers me to think comprehensively in order to effectively implement complex ideas in novel ways. I’m actively seeking to join a team of passionate builders focused on creating innovative web content and services.';
      let homeParagraphTwo = 'If you’re seeking a front end engineer, UI developer, UX/Dev hybrid or a product minded developer with a high design acumen I’d love to chat!';
  let homeContent = ['<p>', homeParagraphOne, '</p>', '<p>', homeParagraphTwo, '</p>'].join('');

  let bioHeader = 'A New Start';
    let bioTestimonial = ['<p class="quote">','Will is an exceptional sort of developer. I\'ve never seen any student so interested in the process of planning an application. He\'s definitely a "measure twice, cut once" type of person, which I think is refreshing in development. He has a strong interest in both the UX and actual coding, which makes him extremely valuable in companies that desire someone knowledgeable in both. I think he has a bright future in not just development but possibly product management as well.', '</p>', '<br>', '<p class="source">', '- Mike Dang, General Assembly Instructor', '</p>', '<hr>'].join('');
      let bioParagraphOne = 'After four and a half years at Apple I had reached a personal turning point. I knew I was not content professionally but I was not sure how to take the next step.  After doing some exploration with HTML and CSS I saw a way forward in web development. I left Apple in September of 2016 and diligently began studying as much as possible.';
        let bioParagraphTwo = 'I quickly realized it is no small feat to strike out on your own and enter the industry. Knowing my time was limited, I decided to take the bootcamp route and landed on General Assembly. During the twelve week cohort I learned a great deal but what stands out most is the perspective I was able to gain. I now know what matters to me in development and what I need to focus on moving forward. I am incredibly grateful to the entire team at GA for helping me pursue my passions as a creative, thoughtful problem solver.'
  let bioContent = [bioTestimonial, '<p>', bioParagraphOne , '</p>', '<p>', bioParagraphTwo, '</p>'].join('');

  let skillsHeader = 'Brain Power';
    let skillsTestimonial = ['<p class="quote">','Will\’s ability to communicate complex topics is unbelievably clear and concise. If anyone can laser target the topic at hand, it\'s Will. Down the road, it\'s a no brainer that he will be in a position of leadership because of his natural intelligence and ability to communicate. When Will would work with his fellow students, he naturally took the role of the group leader, and as a result, his incredible ability to plan before aimlessly jumping into execution, combined with the communication of those plans made not only himself, but the other developers on his team able to produce work that was at much higher quality than if they were to just jump in. I would recommend will for a company that wants a long term employee, someone that they can take and grow internally, with the eventual goal of senior developer. A team that has Will is bound to be a successful one.', '</p>', '<br>', '<p class="source">', '- Dirk Dunn, General Assembly Instructor', '</p>', '<hr>'].join('');
      let skillHeaderOne = 'General';
      let skillShorthandOne = ['<strong>', 'tldr; ', 'I\’m a creative, meticulous and methodical developer that loves the process of creating products. And I\'m a humanist goofball.', '</strong>'].join('');
      let skillParagraphOne = 'I have the mind of a product manager and the skills of a developer/designer. When starting a development project I think in terms of what the experience should be and drill down from there. Unlike a lot of new developers I don\’t jump into code without a clear sense of what I\’m trying to accomplish from the product/design perspective. This often means I take more time on the front end of a project getting all the ducks in a row but this has always been worth the blood, sweat and tears once I\’m ready to code out the app. You can\’t fake thoughtfulness.';
        let skillHeaderTwo = 'Development';

        let skillListTwo = ['<p class = "skills">', '<strong>', 'Languages: ', '</strong>', 'HTML  |  CSS  |  Javascript', '<br>', '<strong>', 'Libraries/Tools: ','</strong>', 'Bootstrap  |  jQuery  |  React  |  Node  |  Express  |  Mongoose', '<br>', '<strong>', 'Data: ', '</strong>', 'Mongoose  |  MongoDB  |  Firebase', '</p>'].join('');

        let skillShorthandTwo = ['<strong>', 'tldr; ', 'Vanilla Javascript or jQuery will do most of the time but for larger, data driven applications React is the jam. I prefer functional programming over OO programming.', '</strong>'].join('');
        let skillParagraphTwo = 'I love working with vanilla JS and jQuery and think it\’s always important to have a good understanding of the fundamentals regardless of available libraries/frameworks. React was my favorite topic covered at GA and I\’m continually building my conceptual understanding of what it can do and best practices for utilization. I\’m a big fan of the relatively recent trend of functional programming in Javascript and it goes hand in hand with working in React. Another area I\’m excited to learn more in the near term is animation. I\’m obsessed with creating fluid, holistic experiences and see animation as a key perceptual factor in making this happen.';
          let skillHeaderThree = 'Design';

          let skillListThree = ['<p class = "skills">', '<strong>', 'Tools: ', '</strong>', 'Sketch  |  Affinity Designer  |  Pixelmator  |  Gimp  |  Keynote', '<br>', '<strong>', 'Books: ','</strong>', 'The Design of Everyday Things  |  Lean UX  |  Designing for Emotion', '</p>'].join('');

          let skillShorthandThree = ['<strong>', 'tldr; ', 'I\’ve self-studied design paradigms for several years and am keenly aware of how important UX is to the success of an app.', '</strong>'].join('');
          let skillParagraphThree = 'I\’ve been independently studying graphic design, web design and user experience design for the last few years. One of the last projects I worked on at Apple was a branding campaign for my organization\’s innovation forum. It gave me the opportunity to design 4 different promotional posters for the event which were proudly displayed throughout the office leading up to the forum. I have experience with Sketch and am continually improving my skill with it. I recently acquired Affinity Designer Pro as a more robust asset creator versus other options I have used in the past. I\’m continually surprised how much can be done in Keynote (like the murals in this site!).';
            let skillHeaderFour = 'Art';

            let skillListFour = ['<p class = "skills">', '<strong>', 'Tools: ', '</strong>', 'iColorama  |  Glitché  |  Brushstroke  |  Decim8  |  RollWorld  | Dreamscope', '<br>', '<strong>', 'Inspiration: ','</strong>', 'M.C. Escher  |  Frida Kahlo  |  Keith Haring  |  Gustav Klimt  | Stevon Lucero', '</p>'].join('');

            let skillShorthandFour = ['<strong>', 'tldr; ', 'I\’m a highly creative digital craftsman that finds unique ways to bring captivating worlds to life.', '</strong>'].join('');
            let skillParagraphFour = 'I\’ve been making digital art primarily on my phone for the last couple of years as an expressive outlet. I approach art from an evolutionary perspective and love to discover new things as I morph, fracture and reconstruct previous works. One of the unexpected benefits of this approach is how well it prepared me to think in development terms since I\’ve used so many applications over the years and understand what makes a fluid experience and what makes a cumbersome one.';
  let skillsContent = [skillsTestimonial, '<h3 class="subheader">', skillHeaderOne, '</h3>', '<p>', skillShorthandOne, '</p>', '<p class ="subparagraph">', skillParagraphOne, '</p>', '<h3 class="subheader">', skillHeaderTwo, '</h3>', skillListTwo, '<p>', skillShorthandTwo, '</p>', '<p class ="subparagraph">', skillParagraphTwo, '</p>', '<h3 class="subheader">', skillHeaderThree, '</h3>', skillListThree, '<p>', skillShorthandThree, '</p>', '<p class ="skill-paragraph">', skillParagraphThree, '</p>', '<h3 class="subheader">', skillHeaderFour, '</h3>', skillListFour, '<p>', skillShorthandFour, '</p>', '<p class ="skill-paragraph">', skillParagraphFour, '</p>'].join('');

  let projectsHeader = 'All Together Now';
    let projectsTestimonial = ['<p class="quote">','Will combines careful planning with brilliant execution. I had the pleasure of working with him and can confidently say whether he is working as the product manager, designer, or fellow developer, he brings a terrific work ethic, strong communication, and integrity. I cannot recommend him highly enough.', '</p>', '<br>', '<p class="source">', '- Gina Fitzgerald, Muttmatch Team', '</p>', '<hr>'].join('');
      let projectOneHeader = ['<div class="header-container">', '<img class="project-icon" src="images/muttmatch-icon.png" alt="Muttmatch Icon"/>', '<a href="https://will-sparger.github.io/muttmatch_frontend/" target="_blank">', '<h3 class="project-header first">', 'Muttmatch >', '</h3>','</a>', '</div>'].join('');
      let projectOneTech = ['<p>', '<strong>', 'Technologies: ', '</strong>',' jQuery  |  Node  |  Express  |  Bootstrap  |  Mongoose  |  MongoDB', '</p>'].join('');
      let projectOneParagraph = 'This was the first development project we worked on at General Assembly. It was a collaboration between 2 UX students and three dev students (including myself). The goal of the project was to take the design mockups and assets from the UX folks and build out the site with as much fidelity as possible in a week’s time. I primarily worked on the CSS side of things in this project and am happy how we were able to vivify the UX team\’s vision for the app considering we all felt like our hair was on fire that week.';
        let projectTwoHeader = ['<div class="header-container">', '<img class="project-icon" src="images/gistalt-icon.png" alt="gistAlt Icon"/>', '<a href="https://gistalt-96586.firebaseapp.com" target="_blank">', '<h3 class="project-header second">', 'gistAlt >', '</h3>', '</a>', '</div>'].join('');
        let projectTwoTech = ['<p>', '<strong>', 'Technologies: ', '</strong>',' React  |  Flexbox  |  Firebase', '</p>'].join('');
        let projectTwoParagraph = 'gistAlt was the second group project at GA but this time the team only consisted of 4 dev students. We were tasked with coming up with an idea for an app, identifying the MVP and executing it within a week\’s time. This project is special to me as the team ended up going with my idea and I subsequently served as the project lead and head designer. gistAlt ostensibly is a notes app for new development students to more easily organize new information as they come across it. However, the kernel of the idea was really the beginning of what I would explore further in the final project, Compose.';
          let projectThreeHeader = ['<div class="header-container">', '<img class="project-icon" src="images/compose-icon.png" alt="Compose Icon"/>', '<h3 class="project-header third">', 'Compose', '</h3>', '</div>'].join('');
          let projectThreeTech = ['<ul class = "project-tech">', '<li>', 'Scrum of One', '</li>'].join('');
          let projectThreeParagraph = ['<p class="skill-paragraph">', 'I took the final individual project week at GA as an opportunity to plan out where I wanted to take the concept laid out in gistAlt. I was tremendously proud of what the team accomplished in terms of polish and functionality but knew there was much more I wanted to do with the app. The main issue was the overall lack of flexibility in note creation and utilization. When gistAlt was forming in my mind it was spurred on by the thought “Google is great for getting information, but what do you then do with it?”. I\’ve got hundreds of development and design related bookmarks but I\’m not able to use that information at will with ease. This ambition drove me in leading the gistAlt team and served as my guiding light in thinking through what Compose should be. Check out the ', '<strong>', 'current', '</strong>', ' section for more specific information on what conclusions I came to and what I\’m thinking through now.', '</p>'].join('');
  let projectsContent = [projectsTestimonial,  projectOneHeader, projectOneTech, '<p class="skill-paragraph">', projectOneParagraph, '</p>', '<h3>', projectTwoHeader, '</h3>', projectTwoTech, '<p class="skill-paragraph">', projectTwoParagraph, '</p>', '<h3>', projectThreeHeader, '</h3>', projectThreeParagraph].join('');

  let currentHeader = 'Surfacing the Depths';
    let currentHeaderOne = 'the problem is the answer';
    let currentShorthand = ['<strong>', 'tldr; ', 'Compose will improve gistAlt by orienting note creation around the purpose of the note and by allowing the creation of Decks. Each card in the Deck is represented in the UI by an isometric cube and the linking of these cubes together will build unique figures which visualize the information contained in the Deck\'s notes.', '</strong>'].join('');
    let currentParagraphOne = 'Since graduating from GA I\’ve been refining my thinking on exactly what input is minimally needed for a user to get maximal output (i.e. usage) out of a note. While planning during final project week I studied all sorts of topics such as the history of computer science, memorization techniques, spatial reasoning, impossible figures and adult learning. The last item brought me across the life and work of Malcom Knowles; a prominent adult psychologist of the 20th century. A key tenet he advocated was that adults, unlike children, always approach learning something from the perspective of solving a problem. It was then that I realized I needed to think differently about how the user creates a note and how the note will be used later on if Compose was to be a meaningful evolution of gistAlt.';
      let currentParagraphTwo = 'With gistAlt I was approaching the note design and data schema from the perspective of the content rather than the user\’s reason for creating it to begin with. I then began ideating in terms of how the note design could be altered to more directly speak to the problem which inspired its creation. This would allow the user to have more specificity in organizing notes and more flexibility in setting up individual notes. The gist of the change in Compose was that notes were created based on the purpose of the note rather than the content. So, notes are created based on whether the user wants to use the information later on as a reference for understanding, a flag for something unknown or confusing, a simple recording in the moment (i.e. a general note), a code snippet for usage in projects or a place to house reference information (i.e. contact information, url\’s etc.).';
      let currentHeaderTwo = 'locally rational, globally paradoxical';
      let currentParagraphThree = 'Changing the design in this manner then got me thinking about how the user would now interact with their collection of notes in more intuitive, powerful ways. This is how I eventually got to the Compose name change. I decided that notes would be color coded based on card type (detailed above) and that in the dashboard view each note would be represented by a colored isometric cube. The user would have the option to create “decks” from any cards in their collection which would then be represented in the UI as impossible figures built out of the cubes on the selected cards. The point of this additional functionality was to allow the user to perceptually manipulate all the data in the UI so that cognitive load is minimal and energy can be spent processing the information in the notes when it\’s the right time. Since this iteration of the app involved greater composition flexibility in creating notes as well as in linking and structuring them I decided to call the evolution Compose.';
          let currentHeaderThree = 'hello, Ted';
          let currentParagraphFour = 'Since graduating I have been heavily researching and thinking through the right way to build out these ideas. Enter Ted Nelson, a seminal figure in the computer science world who not many folks are familiar with. Without getting too verbose, Ted\’s ideas about how the web should work (dating back to the 1960s) closely mirror the goals I’m going for in gistAlt and Compose. In short, web content should not be siloed in hierarchical data structures and presented in paper-like ways. It should be connected in as many dimensions as required by the user and displayed in such a way that the user sees the connections and can freely move through them in a three-dimensional manner. This is what I was striving towards, if dimly, in my impossible figure Deck design in Compose.';
            let currentQuote = ['<p class="quote">','We greatly need a general structure to represent all forms of interconnection and structure, and changes in both content and structure; and to visualize and re-use variants and alternatives, comparing them in context in order to understand and choose.', '</p>', '<br>', '<p class="source">', '- Ted Nelson', '</p>'].join('');
              let currentHeaderFour = 'next steps';
              let currentParagraphFive = 'While I explore employment opportunities I intend to continue this exploration with the aim of building out Compose as a React application that helps me organize and leverage information at will in order to learn faster and build projects with greater ease. I’m nerding out hard on researching data schemas to best determine what data should be managed by state and what can live in the database (most likely Firebase in the short term). Eventually I hope to learn animation well enough to have the user see their impossible Deck figure form in front of them as they build it out. They would then be able to fluidly restructure the figure for whatever reason and see the cubes shift and form into the new desired figure.';
                let currentParagraphSix = 'I\’m also thinking through an application I\’m calling Represent which would allow a user to ask how to write something in Javascript and be given the answer in vanilla JS as well as jQuery. Think scouring stack overflow etc. but without all the useless scanning of answers/options. At this early stage in my development career I love to think of projects that will will allow me to learn faster not just from the building of the app but from its usage as well. Stay tuned!';
  let currentContent = ['<p>', currentShorthand, '</p>','<h3 class="subheader">', currentHeaderOne, '</h3>', '<p>', currentParagraphOne, '</p>', '<p>', currentParagraphTwo, '</p>','<h3 class="subheader">', currentHeaderTwo, '</h3>', '<p>', currentParagraphThree, '</p>','<h3 class="subheader">', currentHeaderThree, '</h3>', '<p>', currentParagraphFour, '</p>', currentQuote, '<h3 class="subheader">', currentHeaderFour, '</h3>', '<p>', currentParagraphFive, '</p>', '<p>', currentParagraphSix, '</p>'].join('');

  let artworkHeader = 'Imagine That (coming soon)';
    let artworkParagraphOne = 'For the last couple of years I have been making digital “paintings” as a creative outlet. Initially, I cut my teeth using Keynote to create patterns and abstract kaleidoscopic scenes and eventually built off of these explorations to create new pieces. As I grew as an artist I slowly dabbled with apps on my phone and have mostly created my subsequent works that way. I love the immediate, tactile quality of working with my hands on touch screens and also how simple the interfaces often are versus a desktop program such as Illustrator or Affinity. I suspect part of this inclination lies in my fascination and admiration of painters. My whole life I’ve always been taken with how painters can conjure worlds seemingly out of nothing and hope I can achieve a similar effect in my software someday. Stay tuned for a sampling of my work.';
  let artworkContent = ['<p>', artworkParagraphOne, '</p>'].join('');

  let contactHeader = 'Let\'s do something amazing!';
    let contactParagraphOne = 'If you\’d like to chat about a full-time role or freelance opportunity, request my resume, collaborate on a development project, consult with me about design or inquire about my artwork please don\’t hesitate to either message me on LinkedIn or shoot an email to spargerw@gmail.com. I\’d love to hear from you!';
      let contactQuote = ['<p class="quote">','The key to creativity is an association of remote ideas. By studying multiple subjects in an unpredictable order, you will increase your power to associate ideas. This will immensely improve your creativity.', '</p>', '<br>', '<p class="source">', '- Piotr Wozniak', '</p>'].join('');
  let contactContent = ['<p>', contactParagraphOne, '</p>', contactQuote].join('');










  let resize = $( window ).resize(function() {
    if ($(window).width() < 810) {

    }
  });
  let navLinks = $('#nav-list').find('a')
  let menuAction = function(e) {
    e.preventDefault();
    console.log('clicked!');

    if(navLinks[1].style.display === 'inline') {
      navLinks.each(function () {
        if(this.id === 'menu-button') {
        } else {
          $(this).css('display', 'none')
        }
      })
    }
    $('#nav-list').children().each(function () {
    if(this.id === 'menu-button') {
    } else if(this.style.display === 'none') {
        this.style.display = '';
      } else {
        this.style.display = 'inline';
      }
  });

  }

  let loadSection = function(e){

    e.preventDefault();
    window.scrollTo(0, 0);
    let section = $(this).text();
    console.log(this.style.display);
    if(this.style.display === 'inline') {
      navLinks.each(function () {
        if(this.id === 'menu-button') {
        } else {
          $(this).css('display', 'none')
        }
      })
    }
    $('#mural').attr('src', 'images/' + section + '.png'); //set the mural image

    let header = function() { // determine the header
      if(section === 'home') {
        return homeHeader;
      } else if (section === 'bio') {
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

    header();

    let content = function() { // determine the content
      if(section === 'home') {
        $('#content').html('');
        return $('#content').append(homeContent);
      } else if (section === 'bio') {
        $('#content').html('');
        return $('#content').append(bioContent);
      } else if (section === 'skills') {
        $('#content').html('');
        return $('#content').append(skillsContent);
      } else if (section === 'projects') {
        $('#content').html('');
        return $('#content').append(projectsContent);
      } else if (section === 'current') {
        $('#content').html('');
        return $('#content').append(currentContent);
      } else if (section === 'artwork') {
        $('#content').html('');
        return $('#content').append(artworkContent);
      } else if(section === 'contact') {
        $('#content').html('');
        return $('#content').append(contactContent);
      }
    };
    content();
    $('#header').text(header); // set the content title
    $('#copy').text(content); // set the content copy

  };//end loadSection function

  //click event handlers

  $('#menu-button').on('tap', menuAction)

  $('#home').on('click touchstart', loadSection);
  $('#bio').on('tap', loadSection);
  $('#skills').on('click touchstart', loadSection);
  $('#projects').on('click touchstart', loadSection);
  $('#current').on('click touchstart', loadSection);
  $('#artwork').on('click touchstart', loadSection);
  $('#contact').on('click touchstart', loadSection);


}); // end doc ready
