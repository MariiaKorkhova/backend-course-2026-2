const date = "20231001";
const time_period = "q";

const var6URL = new URL("NBUStatService/v1/statdirectory/basindbank", "https://bank.gov.ua/");

var6URL.searchParams.append('date', date);
var6URL.searchParams.append('period', time_period);
var6URL.searchParams.append('json', '');

console.log(var6URL.toString());