import "./Navbar.css";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import NotificationsIcon from "@material-ui/icons/Notifications";
import InfoIcon from "@material-ui/icons/Info";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";

function NavBar() {
  return (
    <div className="container">
      <div className="menu-container">
        <Menu>
          <MenuButton className="buttons">
            <InfoIcon style={{ color: "#858ecc" }} />
          </MenuButton>
          <MenuList className="menuList">
            <MenuItem className="menuItems" onSelect={() => alert("Menu")}>
              <div className="menuItem">
                <TurnedInIcon style={{ color: "gray" }} /> <p>Menu Option 1</p>
              </div>
            </MenuItem>
            <MenuItem onSelect={() => alert("Menu")}>
              <div className="menuItem">
                <TurnedInIcon style={{ color: "gray" }} /> <p>Menu Option 2</p>
              </div>
            </MenuItem>
            <MenuItem onSelect={() => alert("Menu")}>
              <div className="menuItem">
                <p style={{ color: "blue" }}>RESOURCES</p>
              </div>
            </MenuItem>
            <MenuItem className="menuItems" onSelect={() => alert("Menu")}>
              <div className="menuItem">
                <TurnedInIcon style={{ color: "gray" }} /> <p>Menu Option 3</p>
              </div>
            </MenuItem>
            <MenuItem onSelect={() => alert("Menu")}>
              <div className="menuItem">
                <TurnedInIcon style={{ color: "gray" }} /> <p>Menu Option 4</p>
              </div>
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton className="buttons">
            <NotificationsIcon style={{ color: "#858ecc" }} />
          </MenuButton>
          <MenuList className="menuList">
            <div className="menuItems" onSelect={() => alert("Menu")}>
              <div className="menuItem">
                <PermDeviceInformationIcon style={{ color: "gray" }} />
                <p>
                  Lorem, ipsum dolor sit
                  <br /> amet consectetur <br />
                  adipisicing elit.
                </p>
              </div>
            </div>
            <div className="menuItems" onSelect={() => alert("Menu")}>
              <div className="menuItem">
                <PermDeviceInformationIcon style={{ color: "gray" }} />
                <p>
                  Lorem ipsum dolor sit <br /> amet consectetur <br />{" "}
                  adipisicing elit. <a href="#">Quos</a> est.
                </p>
              </div>
            </div>
            <div onSelect={() => alert("Copy")}>
              <div className="menuItem">
                <PermDeviceInformationIcon style={{ color: "gray" }} />
                <p>
                  Lorem <a href="#">ipsum dolor</a>sit <br /> amet consectetur{" "}
                  <br /> adipisicing elit. est.
                </p>
              </div>
            </div>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton className="profile buttons">
            <div>
              <PersonIcon className="icon" style={{ color: "#858ecc" }} />
            </div>
            <div className="name">Jason Statham</div>
            <div>
              <ArrowDropDownIcon style={{ color: "#858ecc" }} />
            </div>
          </MenuButton>
          <MenuList className="menuList">
            <MenuItem className="menuItems" onSelect={() => alert("Menu")}>
              <div className="menuItem">
                <FavoriteIcon style={{ color: "gray" }} /> <p>Menu 1</p>
              </div>
            </MenuItem>
            <MenuItem className="menuItems" onSelect={() => alert("Menu")}>
              <div className="menuItem">
                <FavoriteIcon style={{ color: "gray" }} /> <p>Menu 2</p>
              </div>
            </MenuItem>
            <MenuItem className="menuItems" onSelect={() => alert("Menu")}>
              <div className="menuItem">
                <FavoriteIcon style={{ color: "gray" }} /> <p>Menu 3</p>
              </div>
            </MenuItem>
            <MenuItem className="menuItems" onSelect={() => alert("Menu")}>
              <div className="menuItem">
                <FavoriteIcon style={{ color: "gray" }} /> <p>Menu 4</p>
              </div>
            </MenuItem>
            <MenuItem onSelect={() => alert("Delete")}>
              <div className="menuItem">
                <ExitToAppIcon style={{ color: "gray" }} /> <p>Logout</p>
              </div>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar;
