import { useState, useEffect } from "react";

const Api = () => {
  const [apiResult, setApiResult] = useState([]);

  useEffect(() => {
    fetch("https://mirkodeglinnocentiback.netsons.org/public/api/test")
      .then((response) => response.json())
      .then((data) => setApiResult(data.result));
  }, []);

  return (
    <section className="text-color-light text-center py-7">
      <div className="container">
        <h3>Api</h3>
        <ul>
          {apiResult.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Api;
