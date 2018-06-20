
$('.saiba').hover(
  function(){ $(this).addClass('animated infinite pulse') },
  function(){ $(this).removeClass('animated infinite pulse') }
);
$('.fa-arrow-alt-circle-down').hover(
  function(){ $(this).addClass('animated infinite shake') },
  function(){ $(this).removeClass('animated infinite shake') }
);

$('.opacity').hover(
  function(){ $(this).addClass('opacity-1') },
  function(){ $(this).removeClass('opacity-1') }
);
$('.item-1').hover(
  function(){ $('.item-1 .some').addClass('opacity') },
  function(){ $('.item-1 .some').removeClass('opacity') }
);
$('.item-2').hover(
  function(){ $('.item-2 .some').addClass('opacity') },
  function(){ $('.item-2 .some').removeClass('opacity') }
);
$('.item-3').hover(
  function(){ $('.item-3 .some').addClass('opacity') },
  function(){ $('.item-3 .some').removeClass('opacity') }
);
$('.item-4').hover(
  function(){ $('.item-4 .some').addClass('opacity') },
  function(){ $('.item-4 .some').removeClass('opacity') }
);


$('.nav-link, .btani').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});


new WOW().init();
