function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {  // если убрать else код не изменится
      return confirm('А родители разрешили?');
    }
  }
  
  let age = prompt('Сколько вам лет?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Доступ получен' );
  } else {
    alert( 'Доступ закрыт' );
  }