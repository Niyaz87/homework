function pow(x,n)  // нет пробела между x и n
{  // скобка на новой строке
  let result=1;   // <- нет пробела до = и после
  for(let i=0;i<n;i++) {result*=x;}   // нет пробелов, result на отдельную строку
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // нет пробелов и точки с запятой
if (n<=0)  // нет пробелов
{   // скобка на новой строке
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else // должна быть на одной строке с закрывающей {
{
  alert(pow(x,n))  // нет пробелов и точки с запятой
}