let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
    return;
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );