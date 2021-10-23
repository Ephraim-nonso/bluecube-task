import React from "react";
import TopNavBar from "./TopNavBar";
import ".././styles/navbar/_navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faSprayCan } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faPersonBooth } from "@fortawesome/free-solid-svg-icons";
import { faObjectGroup } from "@fortawesome/free-solid-svg-icons";
import { faShapes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  // const [open, setOpen] = useState(false);
  // const handleClickSidebar = () => {
  //   console.log("yeah");
  //   setOpen(!open);
  // };

  return (
    <nav className="navbar flex">
      <div className="side-bar">
        <div className="logo">
          <FontAwesomeIcon icon={faShapes} />
          <h1>bluecube</h1>
        </div>

        <ul>
          <li className="home">
            <FontAwesomeIcon icon={faHome} /> Home
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            Message
          </li>
          <li className="share">SHARE</li>
          <li>
            <FontAwesomeIcon icon={faChartLine} /> Ranking
          </li>

          <li>
            <FontAwesomeIcon icon={faPowerOff} /> Challenge
          </li>
          <li>
            <FontAwesomeIcon icon={faSprayCan} />
            Party
          </li>
          <li>
            <FontAwesomeIcon icon={faLink} />
            Connect
          </li>
          <li>
            <FontAwesomeIcon icon={faPersonBooth} />
            Parade
          </li>
          <li>
            <FontAwesomeIcon icon={faObjectGroup} />
            Group
          </li>
        </ul>
      </div>

      <TopNavBar />
    </nav>
  );
}

export default Navbar;
