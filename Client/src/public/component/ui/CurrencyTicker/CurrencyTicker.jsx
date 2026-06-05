import React, { useEffect, useState } from "react";
import "./CurrencyTicker.css";

const CurrencyTicker = () => {

  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {

    const fetchRates = async () => {

      try {

        const res = await fetch(
          "https://open.er-api.com/v6/latest/INR"
        );

        const data = await res.json();

        const currencyData = [

          {
            code: "USD",
            flag: "🇺🇸",
            value: (1 / data.rates.USD).toFixed(2),
          },

          {
            code: "GBP",
            flag: "🇬🇧",
            value: (1 / data.rates.GBP).toFixed(2),
          },

          {
            code: "EUR",
            flag: "🇪🇺",
            value: (1 / data.rates.EUR).toFixed(2),
          },

          {
            code: "AUD",
            flag: "🇦🇺",
            value: (1 / data.rates.AUD).toFixed(2),
          },

          {
            code: "CAD",
            flag: "🇨🇦",
            value: (1 / data.rates.CAD).toFixed(2),
          },

          {
            code: "AED",
            flag: "🇦🇪",
            value: (1 / data.rates.AED).toFixed(2),
          },

          {
            code: "SGD",
            flag: "🇸🇬",
            value: (1 / data.rates.SGD).toFixed(2),
          },

          {
            code: "NZD",
            flag: "🇳🇿",
            value: (1 / data.rates.NZD).toFixed(2),
          },

        ];

        setCurrencies(currencyData);

      }

      catch (error) {

        console.log(error);

      }

    };

    fetchRates();

  }, []);

  return (

    <div className="currency-ticker">

      <div className="ticker-track">

        {[...currencies, ...currencies].map(
          (item, index) => (

            <div
              key={index}
              className="ticker-item"
            >

              <span className="ticker-flag">
                {item.flag}
              </span>

              <p>
                1 {item.code} =
                <strong>
                  ₹{item.value}
                </strong>
              </p>

            </div>

          )
        )}

      </div>

    </div>

  );

};

export default CurrencyTicker;