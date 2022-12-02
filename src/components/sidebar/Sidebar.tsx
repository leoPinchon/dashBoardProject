import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealingIcon from "@mui/icons-material/Healing";
import BookIcon from "@mui/icons-material/Book";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">LapinchAdmin</span>
      </div>
      <hr />
      <div className="center-container">
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className="icons" />
              <span>Dasboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
              <PersonIcon className="icons" />
              <span>Users</span>
            </li>
            <li>
              <ShoppingBasketIcon className="icons" />
              <span>Products</span>
            </li>
            <li>
              <CreditCardIcon className="icons" />
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className="icons" />
              <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
              <QueryStatsIcon className="icons" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsIcon className="icons" />
              <span>Notififications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <HealingIcon className="icons" />
              <span>System Healt</span>
            </li>
            <li>
              <BookIcon className="icons" />
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className="icons" />
              <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountBoxIcon className="icons" />
              <span>Profile</span>
            </li>
            <li>
              <LogoutIcon className="icons" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="bottom-container">
          <p className="title">THEME</p>
          <div className="bottom">
            <div className="color-options"></div>
            <div className="color-options"></div>
            <div className="color-options"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
