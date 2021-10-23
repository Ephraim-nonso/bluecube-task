import React, { useState } from "react";
import avatar from "../../assets/avatar.jpg";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const TopNavBar = () => {
  const [openNotif, setOpenNotif] = useState(false);
  const [search, setSearch] = useState("");
  const [finds, setFinds] = useState([]);
  const clientID = "V-oZ88Q9oM3CTIYxcKvKkQ4VTpGcEWXRXA8WR_umzA8";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);

    const url = `https://api.unsplash.com/photos?page=1&query=${search}&client_id=${clientID}`;

    axios
      .get(url)
      .then((res) => {
        setFinds(res.data);
      })
      .catch((err) => {
        console.log(err);
        setFinds("No search found");
      });

    localStorage.setItem("filterData", JSON.stringify(finds));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    setOpenNotif(!openNotif);
  };

  return (
    <div className="top-navbar">
      <div className="inward">
        <div className="search-input">
          <div className="search-img">
            <FontAwesomeIcon icon={faSearch} />
          </div>

          <div className="form-div">
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Find Something..."
              />
              <button className="btn">Search</button>
            </form>
          </div>
        </div>

        <div className="bell-avatar">
          <div className="bell">
            <FontAwesomeIcon onClick={handleClick} icon={faBell} />
          </div>
          <div className={openNotif ? "notification" : "hide"}>
            <div className="likes">
              <div className="like">
                <div className="person">
                  <img src={avatar} alt="avatar" />
                  <div className="name-time">
                    <p>Michael liked you!</p>
                    <p>About 25 minutes ago</p>
                  </div>
                </div>
                <FontAwesomeIcon icon={faLink} />
              </div>
              <div className="like">
                <div className="person">
                  <img src={avatar} alt="avatar" />
                  <div className="name-time">
                    <p>Michael liked you!</p>
                    <p>About 25 minutes ago</p>
                  </div>
                </div>
                <FontAwesomeIcon icon={faLink} />
              </div>
              <div className="like">
                <div className="person">
                  <img src={avatar} alt="avatar" />
                  <div className="name-time">
                    <p>Michael liked you!</p>
                    <p>About 25 minutes ago</p>
                  </div>
                </div>
                <FontAwesomeIcon icon={faLink} />
              </div>
            </div>
          </div>
          <div className="avatar">
            <div className="img-active">
              <img src={avatar} alt="avatar" />
              <div className="active"></div>
            </div>

            <div className="profile">
              <p>Abigail</p>
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
