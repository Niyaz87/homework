let login = prompt("Введите логин:", '');

	 if (login === 'Админ') {

  	 	let pass = prompt('Введите пароль:', '');

  	 	if (pass === 'Я главный') {
    	 	alert( 'Здравствуйте!' );
  	 	} else if (pass !== 'Я главный') {
    	 	alert( 'Неверный пароль' );
  	 	}

	 } else if (login === '' || login === null) {
  	 alert( 'Отменено' );
	 } else {
  	 alert( "Я вас не знаю" );
	 }