import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) //converting fetched response to json
      .then((res) => setData(res[currency])); //this is for holding response and I am using useState in order to control changes in UI
    console.log(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
