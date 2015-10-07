;
(function () {
  captions = [
    "пригодится, если доживем",
    "избавленный от недостатков в виде замечательного почерка Александра Ивановича",
    "высоко оцененный критиками мировой бестселлер",
    "с р∀зр∃ш∃ния н∃б∃с",
    "ради этого конспекта мне пришлось перечитать TeXbook Кнута",
    "видел бы его сам Александр Иванович",
    "жизнь вымрет быстрее, чем появится следующее обновление конспекта",
    "the slowest updating summary ever",
    "на коллоквиуме всем крышка",
    "colloquium is coming"
  ];

  function loadJSON(url, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
        var JSONObject = JSON.parse(request.responseText);
        callback(JSONObject);
      }
    };

    request.open('GET', url, true);
    request.send();
  }

  function setCaption(caption) {
    document.getElementById('content-caption').innerHTML = "(" + caption + ")";
  }

  function setRandomCaption() {
    var caption = captions[Math.floor(Math.random() * captions.length)];
    setCaption(caption);
  }

  function loadData(data) {
    //var date = new Date(data.lastUpdate);
    //var dateString = "(обновлено " + date.toLocaleString() + ")";

    //document.getElementById('content-date').innerHTML = dateString;
    document.getElementById('content-link').setAttribute('href', data.contentLink);
    document.getElementById('content-summary').innerHTML = data.summary;
  }

  function initialize() {
    setRandomCaption();
    loadJSON('data/summary.json', loadData);
  }

  window.onload = initialize;
})();