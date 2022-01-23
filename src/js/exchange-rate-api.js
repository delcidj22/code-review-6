export default class CurrencyExchange {
  static getExchange(country, amount) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const searchURL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${country}/${amount}`;
      request.onload= function() {
        if (this.status === 200) { 
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", searchURL, true);
      request.send();
    });
  }
}


