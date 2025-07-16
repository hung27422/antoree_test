import Button from "@mui/material/Button";
import Logo from "../../assets/img/logo.jpeg";
import Search from "./Search";
function Navbar() {
  return (
    <div className="h-16 border-b bg-white border-[#e8ebed] flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="size-12" />
        <p className="text-base font-semibold">Thành thạo bất kì ngôn ngữ nào</p>
      </div>
      <div className="">
        <Search />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="contained" sx={{ backgroundColor: "#fff", color: "#000" }}>
          Đăng Ký
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#ff5117" }}>
          Đăng Nhập
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
