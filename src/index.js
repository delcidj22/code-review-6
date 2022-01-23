import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'; 
import CurrencyExchange from "./js/exchange-rate-api";

function clearFields() {
  $('#amount').val("");
  $('.showErrors').text("");
  $('.showCurrencyExchange').text("");
  $('.showConversion').text("");
}

$(document).ready(function() {
  $('#currencyConverter').click(function() {
    event.preventDefault;
    let country = $('.countryOptions').val();
    let amount = $('#amount').val(); 
    clearFields();
    let promise = CurrencyExchange.getExchange(country, amount);
    promise.then(function(response) {
      const body = JSON.parse(response); 
      $('.showCurrencyExchange').text(`$${amount} in ${country} will exchange to: ${body.conversion_result}`);
      $('.showConversion').text(`The current conversion rate is: ${body.conversion_rate}`);
    }, function(error) {
      $('.showErrors').text(`There was an error: ${error}`);
    });
  });
});

