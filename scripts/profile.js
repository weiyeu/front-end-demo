$(function(){
	/* configurations */
	// boxWidth in px
	var jcropHolderWidth = 500;
	var setSelectArr = [150,100,350,300];
	// profileImg instance
	var profileImg = $('#profileImg');
	// previewImg instance
	var previewImg = $('.previewContainer img');
	// previewContainer instance
	var previewContainer = $('.previewContainer');
	// get previewContainer width and height
	var preivewContainerWidth = previewContainer.width();
	var preivewContainerHeight = previewContainer.height();

	// set profileImg to Jcrop
	profileImg.Jcrop({
		aspectRatio : 1,
		boxWidth : jcropHolderWidth,
		keySupport : false,
		scaledSize : true,
		setSelect : setSelectArr,
		onChange : preview,
		onSelect : preview,
	});

	// jcrop-holder instance
	var jcropHolder = $('.jcrop-holder');

	// set Jcrop align horizontal middle
	jcropHolder.css({
		'margin' : 'auto',
	});

	// privew callback funtion
	function preview(selection){
		var scaleX = preivewContainerWidth / (selection.w || 1);
		var scaleY = preivewContainerHeight / (selection.h || 1);
		previewImg.each(function(){
			$(this).css({
				'width' : Math.round(scaleX * jcropHolderWidth) + 'px',
			// 'height' : Math.round(scaleY * jcropHolder.height()) + 'px',
			'margin-left' : '-' + Math.round(scaleX * selection.x) + 'px',
			'margin-top' : '-' + Math.round(scaleY * selection.y) + 'px',
		});
		});
	}

	/** upload image for preview**/
	$('#uploadImg').change(function(){
		var fileHandle = this.files[0];
		var reader = new FileReader();
		reader.onload = function(e){
			// set previewImg to uploaded img
			previewImg.each(function(){
				$(this).attr('src',e.target.result);
			});
			// refresh Jcrop
			profileImg.data('Jcrop').setImage(e.target.result);
		};
		reader.readAsDataURL(fileHandle);
	});

	// event handler
	// $("button[data-toggle='modal']").click(function(){
	// 	profileImg.data('Jcrop').setSelect(setSelectArr);
	// });

});
