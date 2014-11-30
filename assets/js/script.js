$(document).ready(function() {
	$('.nav-bar').click(function() {
		parentContainer = $(this).parent();
		parentText = parentContainer.attr('id').split('-')[2];
		if (parentText == 'home') {
			if (parentContainer.hasClass('pageActive')) {
			} else {
				if ($('#page-container-edu').hasClass('pageActive') || ($('#page-container-skills').hasClass('pageActive'))) {
					edu = $('#page-container-edu');

					edu.addClass('page-edu-inactive');
					edu.removeClass('page-edu-active');
					edu.removeClass('pageActive');
				}
				if ($('#page-container-skills').hasClass('pageActive')) {
					skills = $('#page-container-skills');
					skills.addClass('page-skills-inactive');
					skills.removeClass('page-skills-active');
					skills.removeClass('pageActive');	
				}
			}


		} else if (parentText == 'edu') {
			if (parentContainer.hasClass('pageActive')) {
				parentContainer.addClass('page-edu-inactive');
				parentContainer.removeClass('page-edu-active');
				parentContainer.removeClass('pageActive');
				$('#page-container-home').removeClass('pageActive');


			} else {
				skills = $('#page-container-skills');
				if (skills.hasClass('pageActive')) {
					skills.removeClass('pageActive');
					skills.addClass('page-skills-inactive');
					skills.removeClass('page-skills-active');
				} else {
					parentContainer.addClass('page-edu-active');
					parentContainer.removeClass('page-edu-inactive');
				}
				parentContainer.addClass('pageActive');
			}
			
		} else {
			$('#page-container-edu').removeClass('pageActive');
			if (parentContainer.hasClass('pageActive')) {
				parentContainer.addClass('page-skills-inactive');
				parentContainer.removeClass('page-skills-active');
				parentContainer.removeClass('pageActive');
				$('#page-container-edu').addClass('pageActive');

			} else {

				parentContainer.addClass('page-skills-active');
				parentContainer.removeClass('page-skills-inactive');
				parentContainer.addClass('pageActive');
				$('#page-container-edu').removeClass('pageActive');


				edu = $('#page-container-edu');

				if (parseInt(edu.css('top').replace("px", "")) > 200){
					edu = $('#page-container-edu');
					edu.addClass('page-edu-active');
					edu.removeClass('page-edu-inactive');
				}
			}
		}

	});

	$('.class').hover(function() {
		$(this).next('.class').show();
	}, function() {
		$(this).next('.class').hide();
		
	 });

});
