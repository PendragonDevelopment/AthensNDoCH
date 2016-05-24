/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

import './jquery.fittext';
import '../../node_modules/scrollspy/jquery.scrollspy';
import {affix} from '../../node_modules/bootstrap/dist/js/bootstrap.min';
import '../../node_modules/wowjs/dist/wow.min';
import './jquery.easing.min';

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Fit Text Plugin for Main Header
$("h1").fitText(
    1.2, {
        minFontSize: '35px',
        maxFontSize: '65px'
    }
);

// Offset for Main Navigation
$('#mainNav').affix({
    offset: {
        top: 100
    }
});

// Initialize WOW.js Scrolling Animations
new WOW().init();