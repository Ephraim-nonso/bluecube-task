import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const GetImages = () => {
  const clientID = "V-oZ88Q9oM3CTIYxcKvKkQ4VTpGcEWXRXA8WR_umzA8";
  const [results, setResults] = useState([]);

  //   UseEffect to get and moderate the consumption of the Unsplash API
  useEffect(() => {
    const url = `https://api.unsplash.com/photos/?client_id=${clientID}`;

    axios
      .get(url)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => setResults([]));
  }, []);

  //   Mapping through the results from the API in order to easily render it.

  const filterResult = JSON.parse(localStorage.getItem("filterData"));
  console.log(filterResult);

  const getResult = filterResult.length > 0 ? filterResult : results;

  const displayImages = getResult.map((result) => (
    <div
      key={result.id}
      className="img-card"
      style={{ backgroundImage: `url(${result.urls.small})` }}
    >
      <div className="details">
        <div className="detail-more">
          <h1>{result.user.first_name}</h1>
          <div className="flex-div">
            <div className="location">
              <FontAwesomeIcon icon={faLocationArrow} />
            </div>

            <div>
              {result.user.location ? (
                <p> {result.user.location} </p>
              ) : (
                <p> No location provided.</p>
              )}
            </div>
          </div>

          <div className="btns">
            <div className="btn ">
              <FontAwesomeIcon icon={faSave} />
            </div>
            <div className="btn blue-btn">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return <div className="grid-image">{displayImages}</div>;
};

export default GetImages;
