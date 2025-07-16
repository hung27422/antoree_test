import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
import configs from "./../../configs/configs";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
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
];
export default function MenuMobile() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="flex items-center justify-center gap-3 py-4">
        <Button size="small" variant="contained" sx={{ backgroundColor: "#fff", color: "#000" }}>
          Đăng Ký
        </Button>

        <Button size="small" variant="contained" sx={{ backgroundColor: "#ff5117" }}>
          Đăng Nhập
        </Button>
      </div>
      <Divider />
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
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className="text-black w-12" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
