setTimeout(function() {
				var tab = document.getElementsByClassName("tab");

					function removeClass() {
						for (var j = 0; j < tab.length; j++) {
							tab[j].classList.remove('active');
						};
					}

					for (var i = 0; i < tab.length; i++) {
							tab[i].onclick = function() {
								removeClass();
								this.classList.add('active');
						}
					}

				//////////////Jquery implementation

				// var tab = $('.tab');
				// 	tab.on('click', function() {
				// 		tab.removeClass('active');
				// 		$(this).addClass('active');
				// 	})
					
			}, 0);