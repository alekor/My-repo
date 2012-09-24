$(document).ready(function () 
{

	$(".prev-descr a").mouseenter(function()
	{

		$(this).siblings(".item-prev").addClass("h-background");

	});

	$(".prev-descr a").mouseleave(function()
	{

		$(".item-prev").removeClass("h-background");

	});

})
