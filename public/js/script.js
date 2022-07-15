if (window.devicePixelRatio >= 1.2) {
	var elems = document.getElementsByTagName('*');
	for (var i = 0; i < elems.length; i++) {
		var attr = elems[i].getAttribute('data-2x');
		if (attr) {
			elems[i].style.cssText += 'background-image: url(' + attr + ')';
		}
	}
}



/*=============================================================================================*/
/* Ready Function START Here*/
jQuery(document).ready(function () {
	jQuery(".menu-toggler").click(function () {
		jQuery(this).toggleClass("active");
		jQuery(".header-bottom-outer").toggleClass("open");
		jQuery("body").toggleClass("overflow-hidden");
	});
});

jQuery(document).ready(function () {
	jQuery("[data-target-sidebar]").click(function (event) {
		event.preventDefault();
		var dataId = jQuery(this).attr("data-target-sidebar");
		jQuery('#' + dataId).addClass("open");
		jQuery("body").addClass("overflow-hidden");
	});
	jQuery("[data-dismiss-sidebar]").click(function (event) {
		event.preventDefault();
		var dataId = jQuery(this).attr("data-dismiss-sidebar");
		jQuery('#' + dataId).removeClass("open");
		jQuery("body").removeClass("overflow-hidden");
	});

	// ------------  File upload BEGIN ------------
	jQuery('.file_input_tag').on('change', function (event) {
		var files = event.target.files;
		for (var i = 0; i < files.length; i++) {
			var file = files[i];
			jQuery("<div class='file_list'><div class='file-text'>" + file.name + "</div><div class='download_files'><a href='#'></a></div><div class='file_remove' data-id='" + file.name + "' ></div></div>").insertAfter('#file_input');
		}
	});

	//Click to remove item
	jQuery('body').on('click', '.file_remove', function () {
		jQuery(this).parent().remove();
	});
	// ------------ File upload END ------------ 
});
/* Ready Function END Here*/
/*=============================================================================================*/