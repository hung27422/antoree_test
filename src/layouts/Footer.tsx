import Logo from "../assets/img/logo.jpeg";
function Footer() {
  return (
    <div className="bg-[#181821] text-[#a9b3bb] py-16 px-30  text-sm font-thin">
      <div className="grid grid-cols-4 ">
        <div className="col-span-1">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="size-12 rounded-md mr-3" />
            <span className="text-base font-bold text-white ">Thành thạo bất kì ngôn ngữ nào</span>
          </div>
          <ul className="mt-6">
            <li>Điện thoại: 0987654321</li>
            <li>Email: contact@language.edu.com</li>
            <li>Địa chỉ: Số 1, đường Kha Vạn Cân, Thủ Đức, Hồ Chí Minh</li>
          </ul>
        </div>
        <div className="col-span-1 mt-3 ml-12">
          <h2 className="text-lg font-bold text-white">Về chúng tôi</h2>
          <ul className="mt-6">
            <li className="py-1">Giới thiệu</li>
            <li className="py-1">Liên hệ</li>
            <li className="py-1">Điều khoản</li>
          </ul>
        </div>
        <div className="col-span-1 mt-3">
          <h2 className="text-lg font-bold text-white">Học ngôn ngữ</h2>
          <ul className="mt-6">
            <li className="py-1">Tiếng Anh</li>
            <li className="py-1">Tiếng Trung</li>
            <li className="py-1">Tiếng Nhật</li>
          </ul>
        </div>
        <div className="col-span-1 mt-3">
          <h2 className="text-lg font-bold text-white">Các khuyến mãi</h2>
          <ul className="mt-6">
            <li className="py-1">Giới thiệu bạn bè</li>
            <li className="py-1">Mua thẻ quà tặng</li>
            <li className="py-1">Chương trình liên kết</li>
            <li className="py-1">Chương trình đối tác</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center mt-20">
        <span>© 2018 - 2025 Antoree. Nền tảng học tập hàng đầu Việt Nam</span>
      </div>
    </div>
  );
}

export default Footer;
