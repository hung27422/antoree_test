import Logo from "../assets/img/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import Button from "../components/ui/Button";
function Navbar() {
  return (
    <div className="h-16 border-b bg-white border-[#e8ebed] flex items-center justify-between px-4 z-20">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="size-12" />
        <p className="text-base font-semibold">Thành thạo bất kì ngôn ngữ nào</p>
      </div>
      <div className="">
        <div className="flex items-center h-10 w-[420px] gap-2 border-2 border-[#d0d3d3] rounded-2xl px-3 py-2 hover:border-[#444] transition-colors duration-200 ease-in-out">
          <SearchIcon className="opacity-70" />
          <input
            type="text"
            name="search"
            id=""
            className="outline-0 py-2 caret-[#444] w-full"
            placeholder="Tìm kiếm khóa học..."
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button label="Đăng Ký" variant="contained" bgColor="#fff" color="#000" />
        <Button label="Đăng Nhập" variant="contained" bgColor="#ff5117" />
      </div>
    </div>
  );
}

export default Navbar;
