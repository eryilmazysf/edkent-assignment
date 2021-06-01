import React from "react";
import "./SideBar.css";
import EventNoteIcon from "@material-ui/icons/EventNote";

function SideBar() {
  return (
    <div>
      <h2 className="logo">LOGO</h2>
      <hr />
      <h3>Heading 1</h3>
      <ul>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} /> <p>Menu Option 1</p>
          </button>
        </li>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} /> <p>Menu Option 2</p>
          </button>
        </li>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} /> <p>Menu Option 3</p>
          </button>
        </li>
      </ul>
      <h3>Heading 2</h3>
      <ul>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} /> <p>Menu Option 4</p>
          </button>
        </li>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} /> <p>Menu Option 5</p>
          </button>
        </li>
      </ul>
      <h3>Heading 3</h3>
      <ul>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} /> <p>Menu Option 6</p>
          </button>
        </li>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} /> <p>Menu Option 7</p>
          </button>
        </li>
      </ul>
      <h3>Heading 4</h3>
      <ul>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} /> <p>Menu Option 8</p>
          </button>
        </li>
        <li>
          <button className="ListItem">
            <EventNoteIcon style={{ color: "gray" }} /> <p>Menu Option 9</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
