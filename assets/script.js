$(document).ready(function() {
    // global vars here 
    var searchBtnEl = $("#searchBtn");
    
    var lat;
    var long;

    function displayHistory() {
        for (var i = 0; i < localStorage.length; i++) {
          var key = localStorage.key(i);
          var data = JSON.parse(localStorage.getItem(key));
          
          (function(key) { // Create a closure for each iteration
            var newEl = $("<button>");
            
            newEl.text(key);
            newEl.attr("class", "historyBtn");
            $("#history").append(newEl);
            newEl.on("click", async function() {
              $("#genCards").html("");
              console.log("tester");
              var latitude = await getLat(key);
              var longitude = await getLon(key);
              console.log("tester");
              renderMain(key, latitude, longitude);
            });
          })(key); // Pass 'key' as an argument to the IIFE
        }
      }

    function getLat(name) {
        return new Promise((resolve, reject) => {
          var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + name + "&limit=5&appid=87e016e5e89b444a3ab62dbf9f034527";
          fetch(url)
            .then(function(response) {
              return response.json();
            })
            .then(function(data) {
              var lat = data[0].lat;
              resolve(lat);
            })
            .catch(function(error) {
              reject(error);
            });
        });
    }

    function getLon(name) {
        return new Promise((resolve, reject) => {
          var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + name + "&limit=5&appid=87e016e5e89b444a3ab62dbf9f034527";
          fetch(url)
            .then(function(response) {
              return response.json();
            })
            .then(function(data) {
              var lon = data[0].lon;
              resolve(lon);
            })
            .catch(function(error) {
              reject(error);
            });
        });
    }

    function renderSearch(name, latitude, longitude){
        if (name === ""){
            return;
        }
        else {
            var newEl = $("<button>");
            newEl.text(name);
            newEl.attr("class", "historyBtn");
            $("#history").append(newEl);
            newEl.on("click", function(){
              $("#genCards").html("");
              renderMain(name, latitude, longitude);
            });
    
        }
        localStorage.setItem(name, JSON.stringify({lat: latitude, lon: longitude}));
    }

    function renderMain(name, latitude, longitude){
        $("#main h2").text(name);
    
        var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=87e016e5e89b444a3ab62dbf9f034527&units=imperial";
        
        fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function (data){
                var dateEl = dayjs().format('MM/DD/YY');
                $("#main h2").text(name + " " + dateEl);
                var imgUrl = "https://openweathermap.org/img/wn/" + data.weather[0].icon +".png";
                var image = $('<img>').attr('src', imgUrl).attr('alt', 'Weather Icon');
                $('#main h4').first().empty();
                $('#main h4').first().append(image);
  
                $("#main h4").eq(1).text("Temp: "+ data.main.temp + " °f");
                $("#main h4").eq(2).text("Wind: "+ data.wind.speed + " mph");
                $("#main h4").eq(3).text("Humidity: "+ data.main.humidity + " %");
                renderFiveDay(name, latitude, longitude);
            });
    }

    function renderFiveDay(name, latitude, longitude){
        var timeNum = 7;
        $("#genCards").empty();
        var url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=9bce6875713db412816a04531af13ead&units=imperial";
        fetch(url)
          .then(function (response){
            return response.json();
          })
          .then(function (data){
            var dateEl = dayjs().format('MM/DD/YY');
            $("#main h2").text(name + " " + dateEl);
            var imgUrl = "https://openweathermap.org/img/wn/" + data.weather[0].icon +".png";
            var image = $('<img>').attr('src', imgUrl).attr('alt', 'Weather Icon');
            $('#main h4').first().empty();
            $('#main h4').first().append(image);

            $("#main h4").eq(1).text("Temp: "+ data.main.temp + " °f");
            $("#main h4").eq(2).text("Wind: "+ data.wind.speed + " mph");
            $("#main h4").eq(3).text("Humidity: "+ data.main.humidity + " %");
            renderFiveDay(name, latitude, longitude);
        });
    }   

    searchBtnEl.on("click", async function() {
        var inputCity = $("#inputCity").val();
        var lat = await getLat(inputCity);
        var lon = await getLon(inputCity);
        renderSearch(inputCity, lat, lon);
        renderMain(inputCity, lat, lon);
      });
      function init(){
        displayHistory(); //displays history from local storage and appends to display div
      }
      init();

});