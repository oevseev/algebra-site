;
(function () {
  captions = [
    "<s>пригодится, если доживем</s> уже дожили",
    "избавленный от недостатков в виде замечательного почерка Александра Ивановича",
    "высоко оцененный критиками мировой бестселлер",
    "с р∀зр∃ш∃ния н∃б∃с",
    // "ради этого конспекта мне пришлось перечитать TeXbook Кнута",
    "видел бы его сам Александр Иванович",
    // "жизнь вымрет быстрее, чем появится следующее обновление конспекта",
    // "the slowest updating summary ever",
    "на <s>коллоквиуме</s> экзамене всем крышка (на самом деле нет)",
    "<s>colloquium</s> exam is coming",
    "полная опечаток писанина",
    "сейчас бы в 2k17 сдавать экзамен по АТЧ"
  ];

  function setCaption(caption) {
    document.getElementById('content-caption').innerHTML = "(" + caption + ")";
  }

  function setRandomCaption() {
    var caption = captions[Math.floor(Math.random() * captions.length)];
    setCaption(caption);
  }

  function initialize() {
    setRandomCaption();
  }

  window.onload = initialize;
})();
