var KEY_ENTER = 13;
var KEY_SPACE = 32;
var KEY_LEFT  = 37;
var KEY_UP    = 38;
var KEY_RIGHT = 39;
var KEY_DOWN  = 40;

$(document).ready(function() {

	$('div.toolbar button').mousedown(function(event) {

		var ariaControls = '#' + $(this).attr('aria-controls');
		var button = $(this).attr('aria-label');

		// remove "_label" from the button string
		button = button.substr(0, button.length - 6);

		// trigger the blur event to reset the button images to the unfocused state.
		// this is necessary because blur is not triggered for li elements when using the mouse
		$('ul.toolbar button').trigger('blur');

		$(this).siblings().attr('tabindex', "-1");
		$(this).attr('tabindex', "0");

		switch(button) {
			case 'bold': {
				$(ariaControls).toggleClass(button);

				if ($(ariaControls).hasClass(button) == true) {
					$(this).children('img').attr('src', "http://www.oaa-accessibility.org/media/examples/images/button-" + button + "Pressed-focus.png");
				}
				else
				{
					$(this).children('img').attr('src', "http://www.oaa-accessibility.org/media/examples/images/button-" + button + "-focus.png");
				}
				break;
			}
		} // end switch

		if ($(this).hasClass('toggleButton') == true) {

			// This is a toggle button: toggle aria-pressed state
			togglePressed(this);
		}
		else if ($(this).hasClass('radioButton') == false) {

			// This is a momentary pushbutton: Set aria-pressed to true
			$(this).attr('aria-pressed', 'true');
		}

		// Give the current button focus
		$(this).focus();

		event.stopPropagation();
		return false;
	}); // end button click handler

	// bind a mouseup handler to the buttons to enable momentary pushbuttons
	// to return to unpressed state and toggle buttons to remain pressed
	// 
	$('div.toolbar button').mouseup(function(event) {

		if ($(this).hasClass('toggleButton') == false && $(this).hasClass('radioButton') == false) {

			// Set aria-pressed to false
			$(this).attr('aria-pressed', 'false');

			// change button image to reflect unpressed state
			switch ($(this).attr('aria-labelledby')) {
				case 'bigger_label': {
					$(this).children('img').attr('src', "http://www.oaa-accessibility.org/media/examples/images/button-bigger-focus.png");
					break;
				}
				case 'smaller_label': {
					$(this).children('img').attr('src', "http://www.oaa-accessibility.org/media/examples/images/button-smaller-focus.png");
					break;
				}
			} // end switch
		}

		event.stopPropagation();
		return false;
	}); // end mouseup handler

	 // keypress handler
	 //
	 // The Opera browser performs some window commands from the keypress event,
	 // not keydown like Firefox, Safari, and IE. This event handler consumes
	 // keypresses for relevant keys so that Opera behaves when the user is
	 // manipulating the buttons with the keyboard.
	 //
	$('div.toolbar button').keypress(function(event) {
		switch (event.keyCode) {
			case KEY_UP:
			case KEY_DOWN:
			case KEY_ENTER:
			case KEY_SPACE: {
				event.stopPropagation;
				return false;
				break;
			} // end case
		} //end switch

		return true;
	}); //end keypress event

	$('div.toolbar button').keydown(function(event) {

		var ariaControls = '#' + $(this).attr('aria-controls');

		$(this).siblings().attr('tabindex', "-1");
		$(this).attr('tabindex', "0");


		switch (event.keyCode) {
			case KEY_UP:
			case KEY_LEFT: {
				selectedButton = $(this).prev();
				if (!$(selectedButton).length) {
					selectedButton = $(this).parent().children('button:last');
				}

				// Blur the other buttons in the toolbar
				$(selectedButton).siblings().trigger('blur');

				// Set focus to the selected button
				$(selectedButton).focus();

				event.stopPropagation();
				return false;

			} // end case
			case KEY_DOWN:
			case KEY_RIGHT: {
				selectedButton = $(this).next();
				if (!$(selectedButton).length) {
					selectedButton = $(this).parent().children('button:first');
				}

				// Blur the other buttons in the toolbar
				$(selectedButton).siblings().trigger('blur');

				// Set focus to the selected button
				$(selectedButton).focus();

				event.stopPropagation();
				return false;
				
			} // end case
			case KEY_ENTER:
			case KEY_SPACE: {
				var button = $(this).attr('aria-label');

				// remove "_label" from the button string
				button = button.substr(0, button.length - 6);

					switch(button) {
					case 'bold': {
						$(ariaControls).toggleClass(button);
		
						if ($(ariaControls).hasClass(button) == true) {
							$(this).children('img').attr('src', "http://www.oaa-accessibility.org/media/examples/images/button-" + button + "Pressed-focus.png");
						}
						else
						{
							$(this).children('img').attr('src', "http://www.oaa-accessibility.org/media/examples/images/button-" + button + "-focus.png");
						}
						break;
					}
				} // end switch	

				if ($(this).hasClass('toggleButton') == true) {

						// This is a toggle button: toggle aria-pressed state
						togglePressed(this);
				}
				else if ($(this).hasClass('radioButton') == false) {
						// This is a momentary pushbutton: Set aria-pressed to true
						$(this).attr('aria-pressed', 'true');
				}

				event.stopPropagation();
				return false;

			} // end case
			
		} // end switch

		return true;
	}); // end button click handler

	// bind a keyup handler to the buttons to enable momentary pushbuttons
	// to return to unpressed state and toggle buttons to remain pressed
	// 
	$('div.toolbar button').keyup(function(event) {
		
		var id = this;
		var selectedButton;

		switch (event.keyCode) {
			case KEY_ENTER:
			case KEY_SPACE: {
				if ($(this).hasClass('toggleButton') == false && $(this).hasClass('radioButton') == false) {
				
					// set aria-pressed to false
					$(id).attr('aria-pressed', 'false');

					// change button image to reflect unpressed state
					switch ($(this).attr('aria-label')) {
						case 'bigger_label': {
							$(this).children('img').attr('src', "http://www.oaa-accessibility.org/media/examples/images/button-bigger-focus.png");
							break;
						}
						case 'smaller_label': {
							$(this).children('img').attr('src', "http://www.oaa-accessibility.org/media/examples/images/button-smaller-focus.png");
							break;
						}
					} // end switch
				}

				event.stopPropagation();
				return false;

			} // end case
		} // end switch

		return true;
	}); // end mouseup handler

	// bind a focus handler to set button image to show focus
	// 
	$('div.toolbar button').focus(function(event) {

		var pressed = "Pressed";
		var button = $(this).attr('aria-label');

		// Remove "_label" from the button string
		button = button.substr(0, button.length - 6);

		// If aria-pressed is false, set pressed to be an empty string
		if ($(this).attr('aria-pressed') == 'false') {
			pressed = '';
		}

		$(this).children('img').attr('src', "http://www.oaa-accessibility.org/media/examples/images/button-" + button + pressed + "-focus.png");
		
	}); // end focus handler

	// bind a blur handler to set button image to show focus
	// 
	$('div.toolbar button').blur(function(event) {

		var pressed = "Pressed";
		var button = $(this).attr('aria-label');

		// Remove "_label" from the button string
		button = button.substr(0, button.length - 6);

		// If aria-pressed is false, set pressed to be an empty string
		if ($(this).attr('aria-pressed') == 'false') {
			pressed = '';
		}

		$(this).children('img').attr('src', "http://www.oaa-accessibility.org/media/examples/images/button-" + button + pressed + ".png");

	}); // end blur handler

	/**
	 * togglePressed() toggles the aria-pressed atribute between true or false
	 *
	 * @param ( id object) button to be operated on
	 *
	 * @return N/A
	 */
	function togglePressed(id) {
	
		// reverse the aria-pressed state
		if ($(id).attr('aria-pressed') == 'true') {
			$(id).attr('aria-pressed', 'false');
		}
		else {
			$(id).attr('aria-pressed', 'true');
		}
	}

}); // end ready
