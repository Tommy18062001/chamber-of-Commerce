const d = new Date();

const todayDayNumber = d.getDay();

const theWeekDay = new Array(7);
theWeekDay[0] = "Sunday";
theWeekDay[1] = "Monday";
theWeekDay[2] = "Tuesday";
theWeekDay[3] = "Wednesday";
theWeekDay[4] = "Thursday";
theWeekDay[5] = "Friday";
theWeekDay[6] = "Saturday";

const URL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=fa87a3e2f8852a06dafa05368ef0fa93&units=imperial";

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=-18.1667&lon=49.3833&exclude={part}&appid=fa87a3e2f8852a06dafa05368ef0fa93&units=imperial"

fetch(apiURL) 
    .then((response) => response.json())
    .then((weatherInfo)  => {
        console.log(weatherInfo);

        /* update the current temperature */

        let myList = weatherInfo.daily;

        let forecastDayNumber = todayDayNumber;

        /* update the current information for the weather summary */
        document.getElementById("temp").textContent = weatherInfo.current.temp;
        document.getElementById("feels_like").textContent = weatherInfo.current.feels_like;
        document.getElementById("humidity").textContent = weatherInfo.current.humidity;
        document.getElementById("speed").textContent = weatherInfo.current.wind_speed;
        document.getElementById("description").textContent = weatherInfo.current.weather[0].description;


        for (i = 0; i< myList.length; i ++ ) {

            for (j = 0; i< 3; i ++ ) {
                forecastDayNumber += 1;
                if (forecastDayNumber === 7) {forecastDayNumber = 0};

                // create the day nameme
                let theDayName = document.createElement("h3");
                theDayName.textContent = theWeekDay[forecastDayNumber];
                
                let theTemp = document.createElement("p");
                theTemp.textContent = weatherInfo.daily[i].temp.day + "\xB0F";

                let iconcode = weatherInfo.daily[i].weather[0].icon;
                let iconpath = '//openweathermap.org/img/wn/' + iconcode + '@2x.png';
                let theIcon = document.createElement("img");
                theIcon.src = iconpath;

                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theIcon);
                theDay.appendChild(theTemp);

                // this will automatically add the div to our html page
                document.querySelector(".weather-forecast").appendChild(theDay);
            }
        } // end for
    } )


