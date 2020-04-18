function askWeather() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
  request.send();
  request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      const response = JSON.parse(this.responseText);
      document.getElementById('weather-result').innerHTML = response.current_condition.condition;
    };
  };
};

const weatherButton = document.getElementById('ask-weather');
weatherButton.addEventListener('click', askWeather);
