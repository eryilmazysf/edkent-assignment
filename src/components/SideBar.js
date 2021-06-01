import React from "react";
import "./SideBar.css";
import EventNoteIcon from "@material-ui/icons/EventNote";

function SideBar() {
  return (
    <div>
      <h2 className="logo">LOGO</h2>
      <hr />
      <h5>Heading 1</h5>
      <ul>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} />
            <span>Menu Option 1</span>
          </button>
        </li>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} />
            <span>Menu Option 2</span>
          </button>
        </li>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} />
            <span>Menu Option 3</span>
          </button>
        </li>
      </ul>
      <h5>Heading 2</h5>
      <ul>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} />
            <span>Menu Option 4</span>
          </button>
        </li>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} />
            <span>Menu Option 5</span>
          </button>
        </li>
      </ul>
      <h5>Heading 3</h5>
      <ul>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} />
            <span>Menu Option 6</span>
          </button>
        </li>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} />
            <span>Menu Option 7</span>
          </button>
        </li>
      </ul>
      <h5>Heading 4</h5>
      <ul>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} />
            <span>Menu Option 8</span>
          </button>
        </li>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} />
            <span>Menu Option 9</span>
          </button>
        </li>
      </ul>
      <button className="logout">
        <EventNoteIcon style={{ color: "gray" }} />
        <span>Logout</span>
      </button>
    </div>
  );
}

export default SideBar;
