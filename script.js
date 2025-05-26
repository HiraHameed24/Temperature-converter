 function convertTemp() {
      const degrees = parseFloat(document.getElementById("degrees").value);
      const type = document.getElementById("type").value;
      const resultDiv = document.getElementById("result");

      if (isNaN(degrees)) {
        resultDiv.textContent = "Please enter a valid number.";
        return;
      }

      let result = "";

      if (type === "fahrenheit") {
        const c = (degrees - 32) * 5/9;
        result = `${c.toFixed(4)} °C`;
      } else if (type === "celsius") {
        const f = (degrees * 9/5) + 32;
        result = `${f.toFixed(4)} °F`;
      } else if (type === "kelvin") {
        const c = degrees - 273.15;
        result = `${c.toFixed(4)} °C`;
      }

      resultDiv.textContent = result;
    }