function checkAge(age) { 
    return (age > 18) ? true : confirm('Родители разрешили?');
}
checkAge(20)

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }