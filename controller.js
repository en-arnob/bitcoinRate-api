const request = require("request");

exports.apiGetController = (req, res, next) => {
  let currency = req.query.currency.toLowerCase();
  //   console.log(currency);

  let today = new Date();
  let priorDate = new Date(new Date().setDate(today.getDate() - 30));
  let todayFormatted = new Date().toISOString().slice(0, 10);
  let priorDateFormatted = priorDate.toISOString().slice(0, 10);
  //   console.log(priorDateFormatted);
  //   console.log(todayFormatted);

  if (currency === "usd" || currency === "eur" || currency === "gbp") {
    request.get(
      {
        url: `https://api.coindesk.com/v1/bpi/historical/close.json?start=${priorDateFormatted}&end=${todayFormatted}&currency=${currency}`,
        json: true,
      },
      (error, response) => {
        if (error) {
          return res.send({
            msg: "Error occured fetching data from coindesk api",
          });
        }
        let obj = response.body.bpi;
        let rates = Object.values(obj);
        // console.log(rates);
        let maxRate = Math.max(...rates);
        let minRate = Math.min(...rates);
        newObj = {
          date: todayFormatted,
          requestedCurrency: currency.toUpperCase(),
          currentBitCoinRate: obj[Object.keys(obj)[29]],
          lowestBitCoinRate: minRate,
          highestBitCoinRate: maxRate,
          interval: "30 Days",
        };

        // console.log(newObj);
        return res.json(newObj);
      }
    );
  } else {
    res.json({
      Message: "Provide a valid currency: USD/EUR/GBP",
    });
  }
};
