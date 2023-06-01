function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
  
    var result;
  
    if (inputUnit === outputUnit) {
      result = inputValue;
    } else if (inputUnit === "m") {
      result = convertFromMeter(inputValue, outputUnit);
    } else if (outputUnit === "m") {
      result = convertToMeter(inputValue, inputUnit);
    } else {
      var meters = convertToMeter(inputValue, inputUnit);
      result = convertFromMeter(meters, outputUnit);
    }
  
    document.getElementById("outputValue").value = result;
  }
  
  function convertToMeter(value, unit) {
    switch (unit) {
      case "km":
        return value * 1000;
      case "cm":
        return value / 100;
      case "mm":
        return value / 1000;
      case "nm":
        return value / 1e+9;
      case "mile":
        return value * 1609.34;
      case "yard":
        return value * 0.9144;
      case "foot":
        return value * 0.3048;
      case "inch":
        return value * 0.0254;
      case "lightyear":
        return value * 9.461e+15;
      default:
        return value;
    }
  }
  
  function convertFromMeter(value, unit) {
    switch (unit) {
      case "km":
        return value / 1000;
      case "cm":
        return value * 100;
      case "mm":
        return value * 1000;
      case "nm":
        return value * 1e+9;
      case "mile":
        return value / 1609.34;
      case "yard":
        return value / 0.9144;
      case "foot":
        return value / 0.3048;
      case "inch":
        return value / 0.0254;
      case "lightyear":
        return value / 9.461e+15;
      default:
        return value;
    }
  }

  //temp
  function tconvert() {
    var inputValue = parseFloat(document.getElementById("tinputValue").value);
    var inputUnit = document.getElementById("tinputUnit").value;
    var outputUnit = document.getElementById("toutputUnit").value;
  
    var result;
  
    if (inputUnit === outputUnit) {
      result = inputValue;
    } else if (inputUnit === "C") {
      result = convertFromCelsius(inputValue, outputUnit);
    } else if (inputUnit === "K") {
      result = convertFromKelvin(inputValue, outputUnit);
    } else if (inputUnit === "F") {
      result = convertFromFahrenheit(inputValue, outputUnit);
    }
  
    document.getElementById("toutputValue").value = result;
  }
  
  function convertFromCelsius(value, unit) {
    switch (unit) {
      case "K":
        return value + 273.15;
      case "F":
        return (value * 9 / 5) + 32;
      default:
        return value;
    }
  }
  
  function convertFromKelvin(value, unit) {
    switch (unit) {
      case "C":
        return value - 273.15;
      case "F":
        return (value - 273.15) * 9 / 5 + 32;
      default:
        return value;
    }
  }
  
  function convertFromFahrenheit(value, unit) {
    switch (unit) {
      case "C":
        return (value - 32) * 5 / 9;
      case "K":
        return (value - 32) * 5 / 9 + 273.15;
      default:
        return value;
    }
  }
    
//area

function aconvert() {
    var inputValue = parseFloat(document.getElementById("ainputValue").value);
    var inputUnit = document.getElementById("ainputUnit").value;
    var outputUnit = document.getElementById("aoutputUnit").value;
  
    var result;
  
    if (inputUnit === outputUnit) {
      result = inputValue;
    } else if (inputUnit === "sqm") {
      result = convertFromSquareMeter(inputValue, outputUnit);
    } else if (inputUnit === "sqkm") {
      result = convertFromSquareKilometer(inputValue, outputUnit);
    } else if (inputUnit === "sqcm") {
      result = convertFromSquareCentimeter(inputValue, outputUnit);
    } else if (inputUnit === "sqmm") {
      result = convertFromSquareMillimeter(inputValue, outputUnit);
    } else if (inputUnit === "hectare") {
      result = convertFromHectare(inputValue, outputUnit);
    } else if (inputUnit === "sqmile") {
      result = convertFromSquareMile(inputValue, outputUnit);
    } else if (inputUnit === "sqyd") {
      result = convertFromSquareYard(inputValue, outputUnit);
    } else if (inputUnit === "sqft") {
      result = convertFromSquareFoot(inputValue, outputUnit);
    } else if (inputUnit === "sqin") {
      result = convertFromSquareInch(inputValue, outputUnit);
    } else if (inputUnit === "acre") {
      result = convertFromAcre(inputValue, outputUnit);
    }
  
    document.getElementById("aoutputValue").value = result;
  }
  
  function convertFromSquareMeter(value, unit) {
    switch (unit) {
      case "sqkm":
        return value / 1000000;
      case "sqcm":
        return value * 10000;
      case "sqmm":
        return value * 1000000;
      case "hectare":
        return value / 10000;
      case "sqmile":
        return value / 2.59e+6;
      case "sqyd":
        return value * 1.196;
      case "sqft":
        return value * 10.764;
      case "sqin":
        return value * 1550.003;
      case "acre":
        return value / 4046.856;
      default:
        return value;
    }
  }
  
  function convertFromSquareKilometer(value, unit) {
    switch (unit) {
      case "sqm":
        return value * 1000000;
      case "sqcm":
        return value * 1e+10;
      case "sqmm":
        return value * 1e+12;
      case "hectare":
        return value * 100;
      case "sqmile":
        return value / 2.59;
      case "sqyd":
        return value * 1.196e+6;
      case "sqft":
        return value * 1.076e+7;
      case "sqin":
        return value * 1.55e+9;
      case "acre":
        return value * 247.105;
      default:
        return value;
    }
  }
  
  function convertFromSquareCentimeter(value, unit) {
    switch (unit) {
      case "sqm":
        return value / 10000;
      case "sqkm":
        return value / 1e+10;
      case "sqmm":
        return value * 100;
      case "hectare":
        return value / 1e+8;
      case "sqmile":
        return value / 2.59e+9;
      case "sqyd":
        return value / 8361.273;
      case "sqft":
        return value / 929.0304;
      case "sqin":
        return value / 6.452;
      case "acre":
        return value / 4.047e+7;
      default:
        return value;
    }
  }
  
  function convertFromSquareMillimeter(value, unit) {
    switch (unit) {
      case "sqm":
        return value / 1e+6;
      case "sqkm":
        return value / 1e+12;
      case "sqcm":
        return value / 100;
      case "hectare":
        return value / 1e+10;
      case "sqmile":
        return value / 2.59e+12;
      case "sqyd":
        return value / 836127.36;
      case "sqft":
        return value / 92903.04;
      case "sqin":
        return value / 645.16;
      case "acre":
        return value / 4.047e+9;
      default:
        return value;
    }
  }
  
  function convertFromHectare(value, unit) {
    switch (unit) {
      case "sqm":
        return value * 10000;
      case "sqkm":
        return value / 100;
      case "sqcm":
        return value * 1e+8;
      case "sqmm":
        return value * 1e+10;
      case "sqmile":
        return value / 259;
      case "sqyd":
        return value * 11959.9;
      case "sqft":
        return value * 107639.1;
      case "sqin":
        return value * 1.55e+7;
      case "acre":
        return value * 2.471;
      default:
        return value;
    }
  }
  
  function convertFromSquareMile(value, unit) {
    switch (unit) {
      case "sqm":
        return value * 2.59e+6;
      case "sqkm":
        return value * 2.59;
      case "sqcm":
        return value * 2.59e+9;
      case "sqmm":
        return value * 2.59e+12;
      case "hectare":
        return value * 259;
      case "sqyd":
        return value * 3.098e+6;
      case "sqft":
        return value * 2.788e+7;
      case "sqin":
        return value * 4.014e+9;
      case "acre":
        return value * 640;
      default:
        return value;
    }
  }
  
  function convertFromSquareYard(value, unit) {
    switch (unit) {
      case "sqm":
        return value / 1.196;
      case "sqkm":
        return value / 1.196e+6;
      case "sqcm":
        return value * 8361.273;
      case "sqmm":
        return value * 836127.36;
      case "hectare":
        return value / 11959.9;
      case "sqmile":
        return value / 3.098e+6;
      case "sqft":
        return value * 9;
      case "sqin":
        return value * 1296;
      case "acre":
        return value / 4840;
      default:
        return value;
    }
  }
  
  function convertFromSquareFoot(value, unit) {
    switch (unit) {
      case "sqm":
        return value / 10.764;
      case "sqkm":
        return value / 1.076e+7;
      case "sqcm":
        return value * 929.0304;
      case "sqmm":
        return value * 92903.04;
      case "hectare":
        return value / 107639.1;
      case "sqmile":
        return value / 2.788e+7;
      case "sqyd":
        return value / 9;
      case "sqin":
        return value * 144;
      case "acre":
        return value / 43560;
      default:
        return value;
    }
  }
  
  function convertFromSquareInch(value, unit) {
    switch (unit) {
      case "sqm":
        return value / 1550.003;
      case "sqkm":
        return value / 1.55e+9;
      case "sqcm":
        return value * 6.452;
      case "sqmm":
        return value * 645.16;
      case "hectare":
        return value / 1.55e+7;
      case "sqmile":
        return value / 4.014e+9;
      case "sqyd":
        return value / 1296;
      case "sqft":
        return value / 144;
      case "acre":
        return value / 6.273e+6;
      default:
        return value;
    }
  }
  
  function convertFromAcre(value, unit) {
    switch (unit) {
      case "sqm":
        return value * 4046.856;
      case "sqkm":
        return value / 247.105;
      case "sqcm":
        return value * 4.047e+7;
      case "sqmm":
        return value * 4.047e+9;
      case "hectare":
        return value * 2.471;
      case "sqmile":
        return value / 640;
      case "sqyd":
        return value * 4840;
      case "sqft":
        return value * 43560;
      case "sqin":
        return value * 6.273e+6;
      default:
        return value;
    }
  }

  
  //volume

  function vconvert() {
    var inputValue = parseFloat(document.getElementById("vinputValue").value);
    var inputUnit = document.getElementById("vinputUnit").value;
    var outputUnit = document.getElementById("voutputUnit").value;
    var result;
  
    if (inputUnit === outputUnit) {
      result = inputValue;
    } else if (inputUnit === "cubicm") {
      result = convertFromCubicMeter(inputValue, outputUnit);
    } else if (inputUnit === "cubickm") {
      result = convertFromCubicKilometer(inputValue, outputUnit);
    } else if (inputUnit === "cubiccm") {
      result = convertFromCubicCentimeter(inputValue, outputUnit);
    } else if (inputUnit === "cubicmm") {
      result = convertFromCubicMillimeter(inputValue, outputUnit);
    } else if (inputUnit === "liter") {
      result = convertFromLiter(inputValue, outputUnit);
    } else if (inputUnit === "ml") {
      result = convertFromMilliliter(inputValue, outputUnit);
    } else if (inputUnit === "usgalon") {
      result = convertFromUSGallon(inputValue, outputUnit);
    } else if (inputUnit === "usquart") {
      result = convertFromUSQuart(inputValue, outputUnit);
    } else if (inputUnit === "uspint") {
      result = convertFromUSPint(inputValue, outputUnit);
    } else if (inputUnit === "uscup") {
      result = convertFromUSCup(inputValue, outputUnit);
    } else if (inputUnit === "usfluidounce") {
      result = convertFromUSFluidOunce(inputValue, outputUnit);
    } else if (inputUnit === "ustablespoon") {
      result = convertFromUSTablespoon(inputValue, outputUnit);
    } else if (inputUnit === "usteaspoon") {
      result = convertFromUSTeaspoon(inputValue, outputUnit);
    } else if (inputUnit === "imperialalon") {
      result = convertFromImperialGallon(inputValue, outputUnit);
    } else if (inputUnit === "imperialquart") {
      result = convertFromImperialQuart(inputValue, outputUnit);
    } else if (inputUnit === "imperialpint") {
      result = convertFromImperialPint(inputValue, outputUnit);
    } else if (inputUnit === "imperialcup") {
      result = convertFromImperialCup(inputValue, outputUnit);
    } else if (inputUnit === "imperialfluidounce") {
      result = convertFromImperialFluidOunce(inputValue, outputUnit);
    } else if (inputUnit === "imperialtablespoon") {
      result = convertFromImperialTablespoon(inputValue, outputUnit);
    } else if (inputUnit === "imperialteaspoon") {
      result = convertFromImperialTeaspoon(inputValue, outputUnit);
    } else if (inputUnit === "cubicmile") {
      result = convertFromCubicMile(inputValue, outputUnit);
    } else if (inputUnit === "cubicyard") {
      result = convertFromCubicYard(inputValue, outputUnit);
    } else if (inputUnit === "cubicft") {
      result = convertFromCubicFoot(inputValue, outputUnit);
    } else if (inputUnit === "cubicinch") {
      result = convertFromCubicInch(inputValue, outputUnit);
    }
  
    document.getElementById("voutputValue").value = result.toFixed(2);
  }
  
  // Conversion functions for volume units
  
  function convertFromCubicMeter(value, unit) {
    switch (unit) {
      case "cubicm":
        return value;
      case "cubickm":
        return value / 1e+9;
      case "cubiccm":
        return value * 1e+6;
      case "cubicmm":
        return value * 1e+9;
      case "liter":
        return value * 1000;
      case "ml":
        return value * 1e+6;
      case "usgalon":
        return value * 264.172;
      case "usquart":
        return value * 1056.688;
      case "uspint":
        return value * 2113.376;
      case "uscup":
        return value * 4226.752;
      case "usfluidounce":
        return value * 33814.023;
      case "ustablespoon":
        return value * 67628.045;
      case "usteaspoon":
        return value * 202884.136;
      case "imperialalon":
        return value * 219.969;
      case "imperialquart":
        return value * 879.877;
      case "imperialpint":
        return value * 1759.754;
      case "imperialcup":
        return value * 3519.509;
      case "imperialfluidounce":
        return value * 35195.089;
      case "imperialtablespoon":
        return value * 56312.142;
      case "imperialteaspoon":
        return value * 168936.426;
      case "cubicmile":
        return value / 4.168e+9;
      case "cubicyard":
        return value * 1.308;
      case "cubicft":
        return value * 35.315;
      case "cubicinch":
        return value * 61023.744;
      default:
        return value;
    }
  }
  
  function convertFromCubicKilometer(value, unit) {
    switch (unit) {
      case "cubicm":
        return value * 1e+9;
      case "cubickm":
        return value;
      case "cubiccm":
        return value * 1e+15;
      case "cubicmm":
        return value * 1e+18;
      case "liter":
        return value * 1e+12;
      case "ml":
        return value * 1e+15;
      case "usgalon":
        return value * 2.642e+8;
      case "usquart":
        return value * 1.057e+9;
      case "uspint":
        return value * 2.113e+9;
      case "uscup":
        return value * 4.227e+9;
      case "usfluidounce":
        return value * 3.381e+10;
      case "ustablespoon":
        return value * 6.763e+10;
      case "usteaspoon":
        return value * 2.028e+11;
      case "imperialalon":
        return value * 2.2e+8;
      case "imperialquart":
        return value * 8.798e+8;
      case "imperialpint":
        return value * 1.76e+9;
      case "imperialcup":
        return value * 3.52e+9;
      case "imperialfluidounce":
        return value * 3.52e+10;
      case "imperialtablespoon":
        return value * 5.631e+10;
      case "imperialteaspoon":
        return value * 1.689e+11;
      case "cubicmile":
        return value / 4.168;
      case "cubicyard":
        return value * 1.308e+9;
      case "cubicft":
        return value * 3.531e+10;
      case "cubicinch":
        return value * 6.102e+13;
      default:
        return value;
    }
  }
  
  function convertFromCubicCentimeter(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 1e+6;
      case "cubickm":
        return value / 1e+15;
      case "cubiccm":
        return value;
      case "cubicmm":
        return value * 1000;
      case "liter":
        return value / 1000;
      case "ml":
        return value;
      case "usgalon":
        return value / 3785.412;
      case "usquart":
        return value / 946.353;
      case "uspint":
        return value / 473.176;
      case "uscup":
        return value / 236.588;
      case "usfluidounce":
        return value / 29.574;
      case "ustablespoon":
        return value / 14.787;
      case "usteaspoon":
        return value / 4.929;
      case "imperialalon":
        return value / 4546.09;
      case "imperialquart":
        return value / 1136.522;
      case "imperialpint":
        return value / 568.261;
      case "imperialcup":
        return value / 284.131;
      case "imperialfluidounce":
        return value / 28.413;
      case "imperialtablespoon":
        return value / 17.758;
      case "imperialteaspoon":
        return value / 5.919;
      case "cubicmile":
        return value / 4.168e+15;
      case "cubicyard":
        return value / 764554.858;
      case "cubicft":
        return value / 28316.847;
      case "cubicinch":
        return value / 16.387;
      default:
        return value;
    }
  }
  
  function convertFromCubicMillimeter(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 1e+9;
      case "cubickm":
        return value / 1e+18;
      case "cubiccm":
        return value / 1000;
      case "cubicmm":
        return value;
      case "liter":
        return value / 1000000;
      case "ml":
        return value / 1000;
      case "usgalon":
        return value / 3.785e+6;
      case "usquart":
        return value / 946.353;
      case "uspint":
        return value / 473.176;
      case "uscup":
        return value / 236.588;
      case "usfluidounce":
        return value / 29.574;
      case "ustablespoon":
        return value / 14.787;
      case "usteaspoon":
        return value / 4.929;
      case "imperialalon":
        return value / 4.546e+6;
      case "imperialquart":
        return value / 1.136e+6;
      case "imperialpint":
        return value / 568.261;
      case "imperialcup":
        return value / 284.131;
      case "imperialfluidounce":
        return value / 28.413;
      case "imperialtablespoon":
        return value / 17.758;
      case "imperialteaspoon":
        return value / 5.919;
      case "cubicmile":
        return value / 4.168e+18;
      case "cubicyard":
        return value / 764554857.984;
      case "cubicft":
        return value / 28316846.592;
      case "cubicinch":
        return value / 16387.064;
      default:
        return value;
    }
  }
  
  function convertFromLiter(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 1000;
      case "cubickm":
        return value / 1e+12;
      case "cubiccm":
        return value * 1000;
      case "cubicmm":
        return value * 1e+6;
      case "liter":
        return value;
      case "ml":
        return value * 1000;
      case "usgalon":
        return value / 3.785;
      case "usquart":
        return value * 1.057;
      case "uspint":
        return value * 2.113;
      case "uscup":
        return value * 4.227;
      case "usfluidounce":
        return value * 33.814;
      case "ustablespoon":
        return value * 67.628;
      case "usteaspoon":
        return value * 202.884;
      case "imperialalon":
        return value / 4.546;
      case "imperialquart":
        return value / 1.137;
      case "imperialpint":
        return value / 0.568;
      case "imperialcup":
        return value / 0.284;
      case "imperialfluidounce":
        return value * 35.195;
      case "imperialtablespoon":
        return value * 56.312;
      case "imperialteaspoon":
        return value * 168.936;
      case "cubicmile":
        return value / 4.168e+9;
      case "cubicyard":
        return value / 0.764;
      case "cubicft":
        return value * 28.317;
      case "cubicinch":
        return value * 61.024;
      default:
        return value;
    }
  }
  
  function convertFromMilliliter(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 1e+6;
      case "cubickm":
        return value / 1e+15;
      case "cubiccm":
        return value / 1;
      case "cubicmm":
        return value * 1000;
      case "liter":
        return value / 1000;
      case "ml":
        return value;
      case "usgalon":
        return value / 3785.412;
      case "usquart":
        return value / 946.353;
      case "uspint":
        return value / 473.176;
      case "uscup":
        return value / 236.588;
      case "usfluidounce":
        return value / 29.574;
      case "ustablespoon":
        return value / 14.787;
      case "usteaspoon":
        return value / 4.929;
      case "imperialalon":
        return value / 4546.09;
      case "imperialquart":
        return value / 1136.522;
      case "imperialpint":
        return value / 568.261;
      case "imperialcup":
        return value / 284.131;
      case "imperialfluidounce":
        return value / 28.413;
      case "imperialtablespoon":
        return value / 17.758;
      case "imperialteaspoon":
        return value / 5.919;
      case "cubicmile":
        return value / 4.168e+15;
      case "cubicyard":
        return value / 764554.858;
      case "cubicft":
        return value / 28316.847;
      case "cubicinch":
        return value / 16.387;
      default:
        return value;
    }
  }
  
  function convertFromUSGallon(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 264.172;
      case "cubickm":
        return value / 2.642e+8;
      case "cubiccm":
        return value * 3785.412;
      case "cubicmm":
        return value * 3.785e+6;
      case "liter":
        return value * 3.785;
      case "ml":
        return value * 3785.412;
      case "usgalon":
        return value;
      case "usquart":
        return value * 4;
      case "uspint":
        return value * 8;
      case "uscup":
        return value * 16;
      case "usfluidounce":
        return value * 128;
      case "ustablespoon":
        return value * 256;
      case "usteaspoon":
        return value * 768;
      case "imperialalon":
        return value / 1.201;
      case "imperialquart":
        return value * 0.832674;
      case "imperialpint":
        return value * 1.665349;
      case "imperialcup":
        return value * 3.330698;
      case "imperialfluidounce":
        return value * 133.227;
      case "imperialtablespoon":
        return value * 213.163;
      case "imperialteaspoon":
        return value * 639.489;
      case "cubicmile":
        return value / 1.101e+12;
      case "cubicyard":
        return value * 201.974;
      case "cubicft":
        return value * 7.481;
      case "cubicinch":
        return value * 231;
      default:
        return value;
    }
  }
  
  function convertFromUSQuart(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 1056.688;
      case "cubickm":
        return value / 1.057e+9;
      case "cubiccm":
        return value * 946.353;
      case "cubicmm":
        return value * 9.464e+5;
      case "liter":
        return value * 0.946;
      case "ml":
        return value * 946.353;
      case "usgalon":
        return value * 0.25;
      case "usquart":
        return value;
      case "uspint":
        return value * 2;
      case "uscup":
        return value * 4;
      case "usfluidounce":
        return value * 32;
      case "ustablespoon":
        return value * 64;
      case "usteaspoon":
        return value * 192;
      case "imperialalon":
        return value / 4.804;
      case "imperialquart":
        return value * 0.832674;
      case "imperialpint":
        return value * 1.665349;
      case "imperialcup":
        return value * 3.330698;
      case "imperialfluidounce":
        return value * 133.227;
      case "imperialtablespoon":
        return value * 213.163;
      case "imperialteaspoon":
        return value * 639.489;
      case "cubicmile":
        return value / 4.404e+12;
      case "cubicyard":
        return value * 50.994;
      case "cubicft":
        return value * 1.892;
      case "cubicinch":
        return value * 57.75;
      default:
        return value;
    }
  }
  
  function convertFromUSPint(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 2113.376;
      case "cubickm":
        return value / 2.113e+9;
      case "cubiccm":
        return value * 473.176;
      case "cubicmm":
        return value * 4.732e+5;
      case "liter":
        return value * 0.473;
      case "ml":
        return value * 473.176;
      case "usgalon":
        return value * 0.125;
      case "usquart":
        return value * 0.5;
      case "uspint":
        return value;
      case "uscup":
        return value * 2;
      case "usfluidounce":
        return value * 16;
      case "ustablespoon":
        return value * 32;
      case "usteaspoon":
        return value * 96;
      case "imperialalon":
        return value / 9.608;
      case "imperialquart":
        return value / 2.402;
      case "imperialpint":
        return value * 0.832674;
      case "imperialcup":
        return value * 1.665349;
      case "imperialfluidounce":
        return value * 66.614;
      case "imperialtablespoon":
        return value * 106.582;
      case "imperialteaspoon":
        return value * 319.747;
      case "cubicmile":
        return value / 8.809e+12;
      case "cubicyard":
        return value * 25.497;
      case "cubicft":
        return value * 0.946;
      case "cubicinch":
        return value * 28.875;
      default:
        return value;
    }
  }
  
  function convertFromUSCup(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 4226.752;
      case "cubickm":
        return value / 4.227e+9;
      case "cubiccm":
        return value * 236.588;
      case "cubicmm":
        return value * 2.366e+5;
      case "liter":
        return value * 0.237;
      case "ml":
        return value * 236.588;
      case "usgalon":
        return value * 0.0625;
      case "usquart":
        return value * 0.25;
      case "uspint":
        return value * 0.5;
      case "uscup":
        return value;
      case "usfluidounce":
        return value * 8;
      case "ustablespoon":
        return value * 16;
      case "usteaspoon":
        return value * 48;
      case "imperialalon":
        return value / 19.215;
      case "imperialquart":
        return value / 4.804;
      case "imperialpint":
        return value / 2.402;
      case "imperialcup":
        return value * 0.832674;
      case "imperialfluidounce":
        return value * 33.307;
      case "imperialtablespoon":
        return value * 53.291;
      case "imperialteaspoon":
        return value * 159.873;
      case "cubicmile":
        return value / 1.762e+13;
      case "cubicyard":
        return value * 12.748;
      case "cubicft":
        return value * 0.473;
      case "cubicinch":
        return value * 14.438;
      default:
        return value;
    }
  }
  
  function convertFromUSFluidOunce(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 33814.022;
      case "cubickm":
        return value / 3.381e+10;
      case "cubiccm":
        return value * 29.574;
      case "cubicmm":
        return value * 2.957e+4;
      case "liter":
        return value / 33.814;
      case "ml":
        return value * 29.574;
      case "usgalon":
        return value / 128;
      case "usquart":
        return value / 32;
      case "uspint":
        return value / 16;
      case "uscup":
        return value / 8;
      case "usfluidounce":
        return value;
      case "ustablespoon":
        return value * 1.999;
      case "usteaspoon":
        return value * 6;
      case "imperialalon":
        return value / 153.722;
      case "imperialquart":
        return value / 38.43;
      case "imperialpint":
        return value / 19.215;
      case "imperialcup":
        return value / 9.608;
      case "imperialfluidounce":
        return value / 1.201;
      case "imperialtablespoon":
        return value * 1.921;
      case "imperialteaspoon":
        return value * 5.764;
      case "cubicmile":
        return value / 5.682e+13;
      case "cubicyard":
        return value / 76455.486;
      case "cubicft":
        return value / 2831.685;
      case "cubicinch":
        return value / 1.805;
      default:
        return value;
    }
  }
  
  function convertFromUSTablespoon(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 67628.045;
      case "cubickm":
        return value / 6.763e+10;
      case "cubiccm":
        return value * 14.787;
      case "cubicmm":
        return value * 1.479e+4;
      case "liter":
        return value / 67.628;
      case "ml":
        return value * 14.787;
      case "usgalon":
        return value / 256;
      case "usquart":
        return value / 64;
      case "uspint":
        return value / 32;
      case "uscup":
        return value / 16;
      case "usfluidounce":
        return value / 2;
      case "ustablespoon":
        return value;
      case "usteaspoon":
        return value * 3;
      case "imperialalon":
        return value / 307.443;
      case "imperialquart":
        return value / 76.86;
      case "imperialpint":
        return value / 38.43;
      case "imperialcup":
        return value / 19.215;
      case "imperialfluidounce":
        return value / 2.402;
      case "imperialtablespoon":
        return value / 1.201;
      case "imperialteaspoon":
        return value * 1.921;
      case "cubicmile":
        return value / 1.705e+14;
      case "cubicyard":
        return value / 229562.5;
      case "cubicft":
        return value / 6762.805;
      case "cubicinch":
        return value / 1.108;
      default:
        return value;
    }
  }
  
  function convertFromUSTeaspoon(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 202884.136;
      case "cubickm":
        return value / 2.029e+11;
      case "cubiccm":
        return value * 4.929;
      case "cubicmm":
        return value * 4929.077;
      case "liter":
        return value / 202.884;
      case "ml":
        return value * 4.929;
      case "usgalon":
        return value / 768;
      case "usquart":
        return value / 192;
      case "uspint":
        return value / 96;
      case "uscup":
        return value / 48;
      case "usfluidounce":
        return value / 6;
      case "ustablespoon":
        return value / 3;
      case "usteaspoon":
        return value;
      case "imperialalon":
        return value / 922.329;
      case "imperialquart":
        return value / 230.582;
      case "imperialpint":
        return value / 115.291;
      case "imperialcup":
        return value / 57.646;
      case "imperialfluidounce":
        return value / 5.764;
      case "imperialtablespoon":
        return value / 2.882;
      case "imperialteaspoon":
        return value / 1.201;
      case "cubicmile":
        return value / 5.116e+14;
      case "cubicyard":
        return value / 689407.72;
      case "cubicft":
        return value / 20288.413;
      case "cubicinch":
        return value / 3.325;
      default:
        return value;
    }
  }
  
  function convertFromImperialGallon(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 220.001;
      case "cubickm":
        return value / 2.2e+8;
      case "cubiccm":
        return value * 4546.09;
      case "cubicmm":
        return value * 4.546e+6;
      case "liter":
        return value * 4.546;
      case "ml":
        return value * 4546.09;
      case "usgalon":
        return value * 1.201;
      case "usquart":
        return value * 4.804;
      case "uspint":
        return value * 9.608;
      case "uscup":
        return value * 19.215;
      case "usfluidounce":
        return value * 153.722;
      case "ustablespoon":
        return value * 307.443;
      case "usteaspoon":
        return value * 922.329;
      case "imperialalon":
        return value;
      case "imperialquart":
        return value * 4;
      case "imperialpint":
        return value * 8;
      case "imperialcup":
        return value * 16;
      case "imperialfluidounce":
        return value * 160;
      case "imperialtablespoon":
        return value * 256;
      case "imperialteaspoon":
        return value * 768;
      case "cubicmile":
        return value / 4.546e+12;
      case "cubicyard":
        return value * 167.352;
      case "cubicft":
        return value * 6.228;
      case "cubicinch":
        return value * 277.419;
      default:
        return value;
    }
  }
  
  function convertFromImperialQuart(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 880.001;
      case "cubickm":
        return value / 8.8e+8;
      case "cubiccm":
        return value * 1136.522;
      case "cubicmm":
        return value * 1.137e+6;
      case "liter":
        return value * 1.137;
      case "ml":
        return value * 1136.522;
      case "usgalon":
        return value * 0.250006;
      case "usquart":
        return value;
      case "uspint":
        return value * 2.00006;
      case "uscup":
        return value * 4.00012;
      case "usfluidounce":
        return value * 32.001;
      case "ustablespoon":
        return value * 64.006;
      case "usteaspoon":
        return value * 192.018;
      case "imperialalon":
        return value * 0.250003;
      case "imperialquart":
        return value;
      case "imperialpint":
        return value * 2;
      case "imperialcup":
        return value * 4;
      case "imperialfluidounce":
        return value * 40;
      case "imperialtablespoon":
        return value * 64;
      case "imperialteaspoon":
        return value * 192;
      case "cubicmile":
        return value / 1.138e+12;
      case "cubicyard":
        return value * 41.838;
      case "cubicft":
        return value * 1.557;
      case "cubicinch":
        return value * 69.355;
      default:
        return value;
    }
  }
  
  function convertFromImperialPint(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 1760.003;
      case "cubickm":
        return value / 1.76e+9;
      case "cubiccm":
        return value * 568.261;
      case "cubicmm":
        return value * 568261.25;
      case "liter":
        return value * 0.568;
      case "ml":
        return value * 568.261;
      case "usgalon":
        return value * 0.125;
      case "usquart":
        return value * 0.50004;
      case "uspint":
        return value;
      case "uscup":
        return value * 2.00016;
      case "usfluidounce":
        return value * 16.001;
      case "ustablespoon":
        return value * 32.003;
      case "usteaspoon":
        return value * 96.009;
      case "imperialalon":
        return value * 0.125001;
      case "imperialquart":
        return value * 0.50002;
      case "imperialpint":
        return value;
      case "imperialcup":
        return value * 2;
      case "imperialfluidounce":
        return value * 20;
      case "imperialtablespoon":
        return value * 32;
      case "imperialteaspoon":
        return value * 96;
      case "cubicmile":
        return value / 2.276e+12;
      case "cubicyard":
        return value * 20.919;
      case "cubicft":
        return value * 0.779;
      case "cubicinch":
        return value * 34.677;
      default:
        return value;
    }
  }
  
  function convertFromImperialCup(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 3520.006;
      case "cubickm":
        return value / 3.52e+9;
      case "cubiccm":
        return value * 284.131;
      case "cubicmm":
        return value * 284130.625;
      case "liter":
        return value * 0.284;
      case "ml":
        return value * 284.131;
      case "usgalon":
        return value * 0.0625005;
      case "usquart":
        return value * 0.25002;
      case "uspint":
        return value * 0.50004;
      case "uscup":
        return value;
      case "usfluidounce":
        return value * 8.001;
      case "ustablespoon":
        return value * 16.003;
      case "usteaspoon":
        return value * 48.009;
      case "imperialalon":
        return value * 0.06250025;
      case "imperialquart":
        return value * 0.25001;
      case "imperialpint":
        return value * 0.50002;
      case "imperialcup":
        return value;
      case "imperialfluidounce":
        return value * 10;
      case "imperialtablespoon":
        return value * 16;
      case "imperialteaspoon":
        return value * 48;
      case "cubicmile":
        return value / 4.553e+12;
      case "cubicyard":
        return value * 10.46;
      case "cubicft":
        return value * 0.39;
      case "cubicinch":
        return value * 17.339;
      default:
        return value;
    }
  }
  
  function convertFromImperialFluidOunce(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 35195.008;
      case "cubickm":
        return value / 3.52e+10;
      case "cubiccm":
        return value * 28.413;
      case "cubicmm":
        return value * 28413.063;
      case "liter":
        return value / 35.195;
      case "ml":
        return value * 28.413;
      case "usgalon":
        return value / 133.228;
      case "usquart":
        return value / 33.307;
      case "uspint":
        return value / 16.654;
      case "uscup":
        return value / 8.326;
      case "usfluidounce":
        return value / 1.041;
      case "ustablespoon":
        return value * 1.665;
      case "usteaspoon":
        return value * 4.996;
      case "imperialalon":
        return value / 279.390;
      case "imperialquart":
        return value / 69.848;
      case "imperialpint":
        return value / 34.924;
      case "imperialcup":
        return value / 17.462;
      case "imperialfluidounce":
        return value;
      case "imperialtablespoon":
        return value * 1.6;
      case "imperialteaspoon":
        return value * 4.8;
      case "cubicmile":
        return value / 4.546e+13;
      case "cubicyard":
        return value / 61161.22;
      case "cubicft":
        return value / 1792.654;
      case "cubicinch":
        return value / 1.733;
      default:
        return value;
    }
  }
  
  function convertFromImperialTablespoon(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 21120.016;
      case "cubickm":
        return value / 2.112e+10;
      case "cubiccm":
        return value * 17.758;
      case "cubicmm":
        return value * 17758.855;
      case "liter":
        return value / 56.31;
      case "ml":
        return value * 17.758;
      case "usgalon":
        return value / 256;
      case "usquart":
        return value / 64;
      case "uspint":
        return value / 32;
      case "uscup":
        return value / 16;
      case "usfluidounce":
        return value / 2;
      case "ustablespoon":
        return value / 1.201;
      case "usteaspoon":
        return value * 3;
      case "imperialalon":
        return value / 461.674;
      case "imperialquart":
        return value / 115.418;
      case "imperialpint":
        return value / 57.709;
      case "imperialcup":
        return value / 28.855;
      case "imperialfluidounce":
        return value / 2.866;
      case "imperialtablespoon":
        return value;
      case "imperialteaspoon":
        return value * 3.2;
      case "cubicmile":
        return value / 1.364e+14;
      case "cubicyard":
        return value / 183105.48;
      case "cubicft":
        return value / 6755.829;
      case "cubicinch":
        return value / 1.108;
      default:
        return value;
    }
  }
  
  function convertFromImperialTeaspoon(value, unit) {
    switch (unit) {
      case "cubicm":
        return value / 63360.049;
      case "cubickm":
        return value / 6.336e+10;
      case "cubiccm":
        return value * 5.919;
      case "cubicmm":
        return value * 5919.355;
      case "liter":
        return value / 168936.381;
      case "ml":
        return value * 5.919;
      case "usgalon":
        return value / 768;
      case "usquart":
        return value / 192;
      case "uspint":
        return value / 96;
      case "uscup":
        return value / 48;
      case "usfluidounce":
        return value / 6;
      case "ustablespoon":
        return value / 3;
      case "usteaspoon":
        return value / 1.201;
      case "imperialalon":
        return value / 1533.389;
      case "imperialquart":
        return value / 383.347;
      case "imperialpint":
        return value / 191.672;
      case "imperialcup":
        return value / 95.836;
      case "imperialfluidounce":
        return value / 9.584;
      case "imperialtablespoon":
        return value / 4.792;
      case "imperialteaspoon":
        return value;
      case "cubicmile":
        return value / 4.093e+14;
      case "cubicyard":
        return value / 550816.43;
      case "cubicft":
        return value / 16106.492;
      case "cubicinch":
        return value / 2.665;
      default:
        return value;
    }
  }
  
  function convertFromCubicMile(value, unit) {
    switch (unit) {
      case "cubicm":
        return value * 4.168e+12;
      case "cubickm":
        return value * 4.168e+9;
      case "cubiccm":
        return value * 4.168e+18;
      case "cubicmm":
        return value * 4.168e+21;
      case "liter":
        return value * 4.168e+9;
      case "ml":
        return value * 4.168e+18;
      case "usgalon":
        return value * 1.101e+12;
      case "usquart":
        return value * 4.404e+12;
      case "uspint":
        return value * 8.809e+12;
      case "uscup":
        return value * 1.762e+13;
      case "usfluidounce":
        return value * 1.41e+14;
      case "ustablespoon":
        return value * 2.82e+14;
      case "usteaspoon":
        return value * 8.447e+14;
      case "imperialalon":
        return value * 1.164e+12;
      case "imperialquart":
        return value * 4.655e+12;
      case "imperialpint":
        return value * 9.311e+12;
      case "imperialcup":
        return value * 1.862e+13;
      case "imperialfluidounce":
        return value * 1.49e+14;
      case "imperialtablespoon":
        return value * 2.378e+14;
      case "imperialteaspoon":
        return value * 7.133e+14;
      case "cubicmile":
        return value;
      case "cubicyard":
        return value * 5451776000;
      case "cubicft":
        return value * 2.020e+14;
      case "cubicinch":
        return value * 4.689e+18;
      default:
        return value;
    }
  }
  
  function convertFromCubicYard(value, unit) {
    switch (unit) {
      case "cubicm":
        return value * 0.764554857984;
      case "cubickm":
        return value * 7.645548579837e-7;
      case "cubiccm":
        return value * 764554.857984;
      case "cubicmm":
        return value * 764554857.984;
      case "liter":
        return value * 764.554857984;
      case "ml":
        return value * 764554.857984;
      case "usgalon":
        return value * 201.974025974;
      case "usquart":
        return value * 807.896103896;
      case "uspint":
        return value * 1615.79220788;
      case "uscup":
        return value * 3231.58441577;
      case "usfluidounce":
        return value * 25852.675325;
      case "ustablespoon":
        return value * 51705.3506494;
      case "usteaspoon":
        return value * 155116.051948;
      case "imperialalon":
        return value * 170.341995913;
      case "imperialquart":
        return value * 681.367983651;
      case "imperialpint":
        return value * 1362.7359673;
      case "imperialcup":
        return value * 2725.47193459;
      case "imperialfluidounce":
        return value * 21803.7754767;
      case "imperialtablespoon":
        return value * 34885.2407627;
      case "imperialteaspoon":
        return value * 104655.722288;
      case "cubicmile":
        return value / 5451776000;
      case "cubicyard":
        return value;
      case "cubicft":
        return value * 27;
      case "cubicinch":
        return value * 46656;
      default:
        return value;
    }
  }
  
  function convertFromCubicFt(value, unit) {
    switch (unit) {
      case "cubicm":
        return value * 0.028316846592;
      case "cubickm":
        return value * 2.8316846592e-5;
      case "cubiccm":
        return value * 28316.846592;
      case "cubicmm":
        return value * 28316846.592;
      case "liter":
        return value * 28.316846592;
      case "ml":
        return value * 28316.846592;
      case "usgalon":
        return value * 7.48051948052;
      case "usquart":
        return value * 29.9220779221;
      case "uspint":
        return value * 59.8441558442;
      case "uscup":
        return value * 119.688311688;
      case "usfluidounce":
        return value * 957.506493506;
      case "ustablespoon":
        return value * 1915.01298701;
      case "usteaspoon":
        return value * 5745.03896104;
      case "imperialalon":
        return value * 6.22883545904;
      case "imperialquart":
        return value * 24.9153418362;
      case "imperialpint":
        return value * 49.8306836725;
      case "imperialcup":
        return value * 99.6613673451;
      case "imperialfluidounce":
        return value * 797.290938761;
      case "imperialtablespoon":
        return value * 1275.66550194;
      case "imperialteaspoon":
        return value * 3826.99650583;
      case "cubicmile":
        return value / 1.472e+10;
      case "cubicyard":
        return value / 27;
      case "cubicft":
        return value;
      case "cubicinch":
        return value * 1728;
      default:
        return value;
    }
  }
  
  function convertFromCubicInch(value, unit) {
    switch (unit) {
      case "cubicm":
        return value * 1.6387064e-5;
      case "cubickm":
        return value * 1.6387064e-14;
      case "cubiccm":
        return value * 16.387064;
      case "cubicmm":
        return value * 16387.064;
      case "liter":
        return value * 0.016387064;
      case "ml":
        return value * 16.387064;
      case "usgalon":
        return value * 0.00432900433;
      case "usquart":
        return value * 0.0173160173;
      case "uspint":
        return value * 0.0346320346;
      case "uscup":
        return value * 0.0692640693;
      case "usfluidounce":
        return value * 0.554112554;
      case "ustablespoon":
        return value * 1.10822511;
      case "usteaspoon":
        return value * 3.32467533;
      case "imperialalon":
        return value * 0.00360465014;
      case "imperialquart":
        return value * 0.0144186006;
      case "imperialpint":
        return value * 0.0288372012;
      case "imperialcup":
        return value * 0.0576744025;
      case "imperialfluidounce":
        return value * 0.46139522;
      case "imperialtablespoon":
        return value * 0.737432352;
      case "imperialteaspoon":
        return value * 2.21229706;
      case "cubicmile":
        return value / 9.85e+11;
      case "cubicyard":
        return value / 46656;
      case "cubicft":
        return value / 1728;
      case "cubicinch":
        return value;
      default:
        return value;
    }
  }
  
  const convertVolume = (value, fromUnit, toUnit) => {
    if (fromUnit === toUnit) {
      return value;
    }
  
    switch (fromUnit) {
      case "cubicm":
        return convertFromCubicMeter(value, toUnit);
      case "cubickm":
        return convertFromCubicKilometer(value, toUnit);
      case "cubiccm":
        return convertFromCubicCentimeter(value, toUnit);
      case "cubicmm":
        return convertFromCubicMillimeter(value, toUnit);
      case "liter":
        return convertFromLiter(value, toUnit);
      case "ml":
        return convertFromMilliliter(value, toUnit);
      case "usgalon":
        return convertFromUSGallon(value, toUnit);
      case "usquart":
        return convertFromUSQuart(value, toUnit);
      case "uspint":
        return convertFromUSPint(value, toUnit);
      case "uscup":
        return convertFromUSCup(value, toUnit);
      case "usfluidounce":
        return convertFromUSFluidOunce(value, toUnit);
      case "ustablespoon":
        return convertFromUSTablespoon(value, toUnit);
      case "usteaspoon":
        return convertFromUSTeaspoon(value, toUnit);
      case "imperialalon":
        return convertFromImperialGallon(value, toUnit);
      case "imperialquart":
        return convertFromImperialQuart(value, toUnit);
      case "imperialpint":
        return convertFromImperialPint(value, toUnit);
      case "imperialcup":
        return convertFromImperialCup(value, toUnit);
      case "imperialfluidounce":
        return convertFromImperialFluidOunce(value, toUnit);
      case "imperialtablespoon":
        return convertFromImperialTablespoon(value, toUnit);
      case "imperialteaspoon":
        return convertFromImperialTeaspoon(value, toUnit);
      case "cubicmile":
        return convertFromCubicMile(value, toUnit);
      case "cubicyard":
        return convertFromCubicYard(value, toUnit);
      case "cubicft":
        return convertFromCubicFt(value, toUnit);
      case "cubicinch":
        return convertFromCubicInch(value, toUnit);
      default:
        return value;
    }
  };


//weight
function wconvert(){
  var inputValue = parseFloat(document.getElementById("winputValue").value);
  var inputUnit = document.getElementById("winputUnit").value;
  var outputUnit = document.getElementById("woutputUnit").value;

  var result;
  if (inputUnit === outputUnit) {
    result = inputValue;
  } else if (inputUnit === "kg") {
    result = convertFromKilogram(inputValue, outputUnit);
  }  else if (inputUnit === "g") {
    result = convertFromGram(inputValue, outputUnit);
  } else if (inputUnit === "mg") {
    result = convertFromMilligram(inputValue, outputUnit);
  } else if (inputUnit === "metricton") {
    result = convertFromMetricTon(inputValue, outputUnit);
  } else if (inputUnit === "longton") {
    result = convertFromLongTon(inputValue, outputUnit);
  } else if (inputUnit === "shortton") {
    result = convertFromShortTon(inputValue, outputUnit);
  } else if (inputUnit === "pound") {
    result = convertFromPound(inputValue, outputUnit);
  } else if (inputUnit === "ounce") {
    result = convertFromOunce(inputValue, outputUnit);
  } else if (inputUnit === "carrat") {
    result = convertFromCarrat(inputValue, outputUnit);
  } else if (inputUnit === "amu") {
    result = convertFromAMU(inputValue, outputUnit);
  }

  
  document.getElementById("woutputValue").value = result;
};
function convertFromKilogram(value, unit) {
    switch (unit) {
      case "kg":
        return value;
      case "g":
        return value * 1000;
      case "mg":
        return value * 1e+6;
      case "metricton":
        return value * 0.001;
      case "longton":
        return value * 0.000984207;
      case "shortton":
        return value * 0.00110231;
      case "pound":
        return value * 2.20462;
      case "ounce":
        return value * 35.27396;
      case "carrat":
        return value * 5000;
      case "amu":
        return value * 6.02214179e+26;
      default:
        return value;
    }
  }
  
  function convertFromGram(value, unit) {
    switch (unit) {
      case "kg":
        return value * 0.001;
      case "g":
        return value;
      case "mg":
        return value * 1000;
      case "metricton":
        return value * 1e-6;
      case "longton":
        return value * 9.8420652761e-7;
      case "shortton":
        return value * 1.1023113109e-6;
      case "pound":
        return value * 0.00220462;
      case "ounce":
        return value * 0.03527396;
      case "carrat":
        return value * 5;
      case "amu":
        return value * 6.02214179e+23;
      default:
        return value;
    }
  }
  
  function convertFromMilligram(value, unit) {
    switch (unit) {
      case "kg":
        return value * 1e-6;
      case "g":
        return value * 0.001;
      case "mg":
        return value;
      case "metricton":
        return value * 1e-9;
      case "longton":
        return value * 9.8420652761e-10;
      case "shortton":
        return value * 1.1023113109e-9;
      case "pound":
        return value * 2.2046226218e-6;
      case "ounce":
        return value * 3.5273961949e-5;
      case "carrat":
        return value * 0.005;
      case "amu":
        return value * 6.02214179e+20;
      default:
        return value;
    }
  }
  
  function convertFromMetricTon(value, unit) {
    switch (unit) {
      case "kg":
        return value * 1000;
      case "g":
        return value * 1e+6;
      case "mg":
        return value * 1e+9;
      case "metricton":
        return value;
      case "longton":
        return value * 0.984207;
      case "shortton":
        return value * 1.10231;
      case "pound":
        return value * 2204.62;
      case "ounce":
        return value * 35273.96;
      case "carrat":
        return value * 5000000;
      case "amu":
        return value * 6.02214179e+29;
      default:
        return value;
    }
  }
  
  function convertFromLongTon(value, unit) {
    switch (unit) {
      case "kg":
        return value * 1016.0469088;
      case "g":
        return value * 1.0160469088e+6;
      case "mg":
        return value * 1.0160469088e+9;
      case "metricton":
        return value * 1.0160469088;
      case "longton":
        return value;
      case "shortton":
        return value * 1.12;
      case "pound":
        return value * 2240;
      case "ounce":
        return value * 35840;
      case "carrat":
        return value * 5080234.54545;
      case "amu":
        return value * 6.853617353e+29;
      default:
        return value;
    }
  }
  
  function convertFromShortTon(value, unit) {
    switch (unit) {
      case "kg":
        return value * 907.18474;
      case "g":
        return value * 907184.74;
      case "mg":
        return value * 9.0718474e+8;
      case "metricton":
        return value * 0.90718474;
      case "longton":
        return value * 0.892857143;
      case "shortton":
        return value;
      case "pound":
        return value * 2000;
      case "ounce":
        return value * 32000;
      case "carrat":
        return value * 4535923.7;
      case "amu":
        return value * 6.02214179e+29;
      default:
        return value;
    }
  }
  
  function convertFromPound(value, unit) {
    switch (unit) {
      case "kg":
        return value * 0.45359237;
      case "g":
        return value * 453.59237;
      case "mg":
        return value * 453592.37;
      case "metricton":
        return value * 0.00045359237;
      case "longton":
        return value * 0.00044642857;
      case "shortton":
        return value * 0.0005;
      case "pound":
        return value;
      case "ounce":
        return value * 16;
      case "carrat":
        return value * 2267.96185;
      case "amu":
        return value * 2.7315973385e+26;
      default:
        return value;
    }
  }
  
  function convertFromOunce(value, unit) {
    switch (unit) {
      case "kg":
        return value * 0.0283495231;
      case "g":
        return value * 28.3495231;
      case "mg":
        return value * 28349.5231;
      case "metricton":
        return value * 2.83495231e-5;
      case "longton":
        return value * 2.7901785714e-5;
      case "shortton":
        return value * 3.125;
      case "pound":
        return value * 0.0625;
      case "ounce":
        return value;
      case "carrat":
        return value * 141.747615;
      case "amu":
        return value * 1.7072483364e+25;
      default:
        return value;
    }
  }
  
  function convertFromCarrat(value, unit) {
    switch (unit) {
      case "kg":
        return value * 0.0002;
      case "g":
        return value * 0.2;
      case "mg":
        return value * 200;
      case "metricton":
        return value * 2e-7;
      case "longton":
        return value * 1.9684130556e-7;
      case "shortton":
        return value * 2.2046226218e-7;
      case "pound":
        return value * 0.000440924524369;
      case "ounce":
        return value * 0.00705479238992;
      case "carrat":
        return value;
      case "amu":
        return value * 1.2044285379e+22;
      default:
        return value;
    }
  }
  
  function convertFromAMU(value, unit) {
    switch (unit) {
      case "kg":
        return value * 1.660540217e-27;
      case "g":
        return value * 1.660540217e-24;
      case "mg":
        return value * 1.660540217e-21;
      case "metricton":
        return value * 1.660540217e-30;
      case "longton":
        return value * 1.6287851493e-30;
      case "shortton":
        return value * 1.825675969e-30;
      case "pound":
        return value * 3.660861e-27;
      case "ounce":
        return value * 5.85737764e-26;
      case "carrat":
        return value * 8.32236819e-22;
      case "amu":
        return value;
      default:
        return value;
    }
  }
  
  
  
//time

function cconvert() {
  const inputValue = parseFloat(document.getElementById("cinputValue").value);
  const inputUnit = document.getElementById("cinputUnit").value;
  const outputUnit = document.getElementById("coutputUnit").value;

  // Perform the conversion
  const convertedValue = convertTime(inputValue, inputUnit, outputUnit);

  // Display the result
  document.getElementById("coutputValue").value = convertedValue;
}

// Conversion function
function convertTime(value, fromUnit, toUnit) {
  const timeInSeconds = convertToSeconds(value, fromUnit);

  // Convert time in seconds to the desired unit
  let convertedTime;
  switch (toUnit) {
    case "sec":
      convertedTime = timeInSeconds;
      break;
    case "millisec":
      convertedTime = timeInSeconds * 1000;
      break;
    case "microsec":
      convertedTime = timeInSeconds * 1000000;
      break;
    case "nanosec":
      convertedTime = timeInSeconds * 1000000000;
      break;
    case "picosec":
      convertedTime = timeInSeconds * 1000000000000;
      break;
    case "min":
      convertedTime = timeInSeconds / 60;
      break;
    case "hr":
      convertedTime = timeInSeconds / 3600;
      break;
    case "day":
      convertedTime = timeInSeconds / 86400;
      break;
    case "week":
      convertedTime = timeInSeconds / 604800;
      break;
    case "mon":
      convertedTime = timeInSeconds / 2592000;
      break;
    case "year":
      convertedTime = timeInSeconds / 31536000;
      break;
    default:
      convertedTime = 0;
      break;
  }

  return convertedTime;
}

// Helper function to convert input time to seconds
function convertToSeconds(value, fromUnit) {
  let timeInSeconds;
  switch (fromUnit) {
    case "sec":
      timeInSeconds = value;
      break;
    case "millisec":
      timeInSeconds = value / 1000;
      break;
    case "microsec":
      timeInSeconds = value / 1000000;
      break;
    case "nanosec":
      timeInSeconds = value / 1000000000;
      break;
    case "picosec":
      timeInSeconds = value / 1000000000000;
      break;
    case "min":
      timeInSeconds = value * 60;
      break;
    case "hr":
      timeInSeconds = value * 3600;
      break;
    case "day":
      timeInSeconds = value * 86400;
      break;
    case "week":
      timeInSeconds = value * 604800;
      break;
    case "mon":
      timeInSeconds = value * 2592000;
      break;
    case "year":
      timeInSeconds = value * 31536000;
      break;
    default:
      timeInSeconds = 0;
      break;
  }

  return timeInSeconds;
}