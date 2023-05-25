import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((response) => setCountries(response.data));
  });
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <div className="container content">
        {countries.map((country) => (
          <div key={country.name}>
            <div
              class="card mt-2"
              style={{ width: "25rem", backgroundColor: "gray" }}
            >
              <img
                class="card-img-top"
                src={country.flag}
                alt="Card image cap"
              />
              <div class="card-body">
                <p class="card-text">
                  Country name :{country.name}
                  <br />
                  Region : {country.region}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
