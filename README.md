# bitcoinRate-api
The user will set the currency code(USD, EUR, GBR) as a parameter in the request body. The server returns
* The current Bitcoin rate, in the requested currency
* The lowest Bitcoin rate in the last 30 days, in the requested currency
* The highest Bitcoin rate in the last 30 days, in the requested currency

**API Endpoint Documentation**
----
  Returns json data about bitcoin info.

* **ENDPOINT**

  /getBitcoinInfo

* **Method:**

  `GET`
  
*  **URL Params**
`USD`
*  **URL**

    /getBitcoinInfo?currency=usd
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```yaml
    {
    "date": "2022-03-27",
    "requestedCurrency": "USD",
    "currentBitCoinRate": 44350.51,
    "lowestBitCoinRate": 37721.3933,
    "highestBitCoinRate": 44438.34,
    "interval": "30 Days"
    }
    
*  **URL Params**
`currenncy`=`EUR`

*  **URL**

    /getBitcoinInfo?currency=eur


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```yaml
    {
    "date": "2022-03-27",
    "requestedCurrency": "EUR",
    "currentBitCoinRate": 40375.5512,
    "lowestBitCoinRate": 33824.962,
    "highestBitCoinRate": 40376.6609,
    "interval": "30 Days"
    }
 
 
*  **Invalid URL Params**
`XYZ`

*  **URL**

    /getBitcoinInfo?currency=xyz

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```yaml
    {
    "Message": "Provide a valid currency: USD/EUR/GBP"
    }
* **Error Response:**

    **Content:** `{
    "msg": "Error occured fetching data from coindesk api"
}`


* **Sample Call:**

  ```javascript
    $.ajax({
      url: `http://localhost:8080/getBitcoinInfo?currency=${yourCurrency}`,
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
