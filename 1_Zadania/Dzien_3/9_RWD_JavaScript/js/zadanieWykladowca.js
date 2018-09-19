console.log('podpięty');

const buttonElement = document.querySelector('#menu-trigger'),
	menuElement = document.querySelector('.menu');

buttonElement.addEventListener('click', function(){
	menuElement.classList.toggle('hidden');
});

const mobile = window.matchMedia("screen and (min-width: 768px)")
	mobile.addListener( function(mobile) {
	  if (mobile.matches) {
		buttonElement.classList.add('hidden');
		menuElement.classList.remove('hidden');
	  } else  {
		buttonElement.classList.remove('hidden');
	  }
});

