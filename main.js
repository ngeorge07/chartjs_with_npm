import "./style.css";
import Chart from "chart.js/auto";

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    datasets: [
      {
        label: "Los Angeles Lakers",
        data: [21, 17, 26, 35, 37, 52, 42],
        backgroundColor: "rgba(85, 37, 130, 0.5)",
        borderColor: "rgb(85, 37, 130)",
      },

      {
        label: "Houston Rockets",
        data: [56, 41, 55, 65, 53, 44, 17],
        backgroundColor: "rgba(206, 17, 65, 0.5)",
        borderColor: "rgb(206, 17, 65)",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Games won during the regular season by years",
        font: {
          size: 20,
        },
        padding: {
          bottom: 20,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 5,
      },
      point: {
        pointBorderWidth: 5,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 82,
      },
    },
  },
});
