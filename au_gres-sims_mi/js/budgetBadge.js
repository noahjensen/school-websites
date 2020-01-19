// Define budget badge HTML

//var FB_CSS = "budgetBadge/css/budgetBadge.css";

// Add jQuery
if (typeof jQuery == 'undefined') {
  var FB_JQ = document.createElement('script');
  FB_JQ.src = 'budgetBadge/js/jquery.js';
  FB_JQ.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(FB_JQ);
}

// Check if jQuery's loaded
function FB_wait() {
  if (typeof jQuery == 'undefined') {
    window.setTimeout(FB_wait, 100);
  } else {
    // If jQuery is loaded
    // Make sure body is loaded
    jQuery('document').ready(function() {
      var t = setTimeout("FB_addBudgetBadge()", 0);
    });
  }
} //end FB_wait
FB_wait();

function buildBudgetBadgeHtml(aTransparencyUrl, aTransparencyTarget, aSchoolDataUrl, aSchoolDataTarget) {
  var lTransparencyTarget = '';
  var lSchoolDataTarget = '';

  if (aTransparencyTarget &&
    aTransparencyTarget != null &&
    aTransparencyTarget.length > 0) {
    lTransparencyTarget = ' target = "' + aTransparencyTarget + '"';
  }

  if (aSchoolDataTarget &&
    aSchoolDataTarget != null &&
    aSchoolDataTarget.length > 0) {
    lSchoolDataTarget = ' target = "' + aSchoolDataTarget + '"';
  }

  var budgetBadgeHTML = '<div id="FB_budgetLinkDiv" class="FB_budgetLink_minimized">';
  budgetBadgeHTML += '  <div id="badgeLiner">';
  budgetBadgeHTML += '  	<a id="FB_budgetLink" href="' + aTransparencyUrl + '"' + lTransparencyTarget + ' title="Click to learn more...">';
  budgetBadgeHTML += '    	<span class="button"></span>';
  budgetBadgeHTML += '  	</a>';
  budgetBadgeHTML += '  	<a id="FB_dataLink" href="' + aSchoolDataUrl + '"' + lSchoolDataTarget + ' title="Click to learn more...">';
  budgetBadgeHTML += '    	<span class="button"></span>';
  budgetBadgeHTML += '  	</a>';
  budgetBadgeHTML += '  </div>';
  budgetBadgeHTML += '  <a id="FB_bbCloser"></a>';
  budgetBadgeHTML += '</div>';

  return budgetBadgeHTML;
} //end buildBudgetBadgeHtml

function hideBudgetButton() {
  jQuery('#FB_budgetLinkDiv').removeClass('FB_budgetLink_minimized');
  jQuery('#badgeLiner').animate({
    width: 0,
    height: 0,
    opacity: 0.4
  }, {
    duration: 1000,
    complete: function() {
      jQuery('#badgeLiner').hide();
      jQuery('#FB_budgetLinkDiv').addClass('FB_budgetLink_minimized');
      jQuery.cookie("hideBudgetBadge", "Hidden");
    } // end complete function
  }); // end animate
} //end hideBudgetButton

function showBudgetButton() {
  jQuery('#FB_budgetLinkDiv').removeClass('FB_budgetLink_minimized');
  jQuery('#badgeLiner').width(0).height(0).show().animate({
    width: 150,
    height: 273,
    opacity: 1
  }, {
    duration: 1000,
    complete: function() {
      jQuery.cookie("hideBudgetBadge", null);
    } // end complete function
  }); // end animate
} //end showBudgetButton

// Execute code
function FB_addBudgetBadge() {
  var lTransparencyUrl = '/budgettransparency/';
  var lTransparencyTarget = '';
  var lSchoolDataUrl = 'https://www.mischooldata.org/DistrictSchoolProfiles/ReportCard/Dashboard/Dashboard.aspx';
  var lSchoolDataTarget = '_blank';
  if (typeof budgetBadgeTransparencyUrl !== "undefined" &&
    budgetBadgeTransparencyUrl != null &&
    budgetBadgeTransparencyUrl.length > 0) {
    lTransparencyUrl = budgetBadgeTransparencyUrl;
  }

  if (typeof budgetBadgeTransparencyTarget !== "undefined" &&
    budgetBadgeTransparencyTarget != null &&
    budgetBadgeTransparencyTarget.length > 0) {
    lTransparencyTarget = budgetBadgeTransparencyTarget;
  }

  if (typeof budgetBadgeSchoolDataUrl !== "undefined" &&
    budgetBadgeSchoolDataUrl != null &&
    budgetBadgeSchoolDataUrl.length > 0) {
    lSchoolDataUrl = budgetBadgeSchoolDataUrl;
  }

  if (typeof budgetBadgeSchoolDataTarget !== "undefined" &&
    budgetBadgeSchoolDataTarget != null &&
    budgetBadgeSchoolDataTarget.length > 0) {
    lSchoolDataTarget = budgetBadgeSchoolDataTarget;
  }

  var lAnchor = 'body';
  if (typeof budgetBadgeAnchor !== "undefined" &&
    budgetBadgeAnchor != null &&
    budgetBadgeAnchor.length > 0) {
    lAnchor = budgetBadgeAnchor;
  }

  // Check we're not in the editor
  jQuery(buildBudgetBadgeHtml(lTransparencyUrl, lTransparencyTarget, lSchoolDataUrl, lSchoolDataTarget)).appendTo(lAnchor);
  addCookieFunctions();

  if (typeof budgetBadgePosition !== "undefined" &&
    budgetBadgePosition != null &&
    budgetBadgePosition.length > 0 &&
    budgetBadgePosition === "left") {
    jQuery('#FB_budgetLinkDiv').addClass('left');
  } else {
    jQuery('#FB_budgetLinkDiv').removeClass('left');
  }

  if (jQuery.cookie("hideBudgetBadge") == null &&
    ((typeof defaultBudgetBadgeOpen !== "undefined" &&
      defaultBudgetBadgeOpen != null &&
      defaultBudgetBadgeOpen.length > 0 &&
      defaultBudgetBadgeOpen == "True") || typeof defaultBudgetBadgeOpen === "undefined")) {
    jQuery('#badgeLiner').hide();
    jQuery('#FB_budgetLinkDiv').removeClass('FB_budgetLink_minimized');
    showBudgetButton();
  }

  jQuery('#FB_bbCloser').click(
    function() {
      if (jQuery('#FB_budgetLinkDiv').outerWidth() > 50) {
        hideBudgetButton();
      } // end if
      else {
        showBudgetButton();
      } // end else
    } // end click function
  ); // end click
} //FB_addBudgetBadge



function addCookieFunctions() {
  jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
      // name and value given, set cookie
      options = options || {};
      if (value === null) {
        value = '';
        options.expires = -1;
      } else {
        options.expires = 423;
      }
      var expires = '';
      if (options.expires &&
        (typeof options.expires == 'number' || options.expires.toUTCString)) {
        var date;
        if (typeof options.expires == 'number') {
          date = new Date();
          date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
        } else {
          date = options.expires;
        }
        expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
      }
      // CAUTION: Needed to parenthesize options.path and options.domain
      // in the following expressions, otherwise they evaluate to undefined
      // in the packed version for some reason...
      var path = options.path ? '; path=' + (options.path) : '';
      var domain = options.domain ? '; domain=' + (options.domain) : '';
      var secure = options.secure ? '; secure' : '';
      document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
      // only name given, get cookie
      var cookieValue = null;
      if (document.cookie &&
        document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) == (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        } //endfor
      }
      return cookieValue;
    }
  };
} //end addCookieFunctions
