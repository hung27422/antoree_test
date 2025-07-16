import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, useLocation } from "react-router-dom";
import configs from "./../../configs/configs";
const iconStyle = { fontSize: 28, color: "#1a1a1a" };
const menus = [
  {
    id: 1,
    name: "Trang chủ",
    pathName: configs.routes.home,
    icon: <HomeIcon sx={iconStyle} />,
  },
  {
    id: 2,
    name: "Gia Sư",
    pathName: configs.routes.tutor,
    icon: <SchoolIcon sx={iconStyle} />,
  },
  {
    id: 3,
    name: "Yêu thích",
    pathName: configs.routes.favorites,
    icon: <FavoriteIcon sx={iconStyle} />,
  },
  //   {
  //     id: 4,
  //     name: "Lịch sử",
  //     pathName: "/history",
  //     icon: <HistoryIcon sx={iconStyle} />,
  //   },
];
function SideBar() {
  const location = useLocation();
  return (
    <div className="">
      <div className="">
        {menus.map((item) => {
          return (
            <Link
              to={item.pathName}
              key={item.id}
              className="px-4 py-2 flex flex-col items-center justify-center"
            >
              <div
                className={`flex flex-col items-center justify-center gap-2 p-3 text-[#404040] rounded-xl cursor-pointer w-full hover:bg-[#e8ebed]  ${
                  location.pathname === item.pathName ? "bg-[#e8ebed]" : ""
                }`}
              >
                {item.icon}
                <span className="text-xs font-bold ">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="fixed bottom-10 left-8 rounded-2xl flex w-fit bg-gray-200 p-1 ">
        <SettingsIcon sx={{ fontSize: 40, color: "#1a1a1a" }} className="" />
      </div>
    </div>
  );
}

export default SideBar;
