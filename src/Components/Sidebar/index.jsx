import {} from "react";
import "./sidebar.css";
import Logo from "../Logo";
import profile from "../../assets/profile.jpg";
import {
  HelpingHand,
  LayoutDashboard,
  MessageCircleIcon,
  Settings,
  SunMoon,
} from "lucide-react";

function Sidebar() {
  const dataList = [
    {
      id: 1,
      icons: <LayoutDashboard />,
      title: "Dashboard",
    },
    {
      id: 2,
      icons: <MessageCircleIcon />,
      title: "Message",
    },
  ];
  return (
    <aside className="sidebar">
      <Logo />

      <div className="tabs">
        <div className="tab">
          {dataList.map((item) => (
            <a key={item.i} href="#" className="item">
              {item.icons}
              <h3>{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
      <div className="bottom_tabs">
        <div className="items_tabs">
          <div className="item_tab">
            <HelpingHand />
            <h3>Get Help</h3>
          </div>
          <div className="item_tab">
            <Settings />
            <h3>Settings</h3>
          </div>
          <div className="item_tab">
            <SunMoon />
            <h3>Theme</h3>
          </div>
          <div className="item_tab">
            <img className="user_profile" src={profile} />
            <h3>User</h3>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
