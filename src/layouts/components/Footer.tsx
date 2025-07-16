import Logo from "../../assets/img/logo.jpeg";

function Footer() {
  return (
    <div className="bg-[#181821] text-[#a9b3bb] py-16 px-4 md:px-10 lg:px-20 text-sm font-thin">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Logo + Info */}
        <div>
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-12 h-12 rounded-md mr-3" />
            <span className="text-base font-bold text-white">Thành thạo bất kì ngôn ngữ nào</span>
          </div>
          <ul className="mt-6 space-y-2">
            <li>Điện thoại: 0987654321</li>
            <li>Email: contact@language.edu.com</li>
            <li>Địa chỉ: Số 1, đường Kha Vạn Cân, Thủ Đức, Hồ Chí Minh</li>
          </ul>
        </div>

        {/* Về chúng tôi */}
        <div>
          <h2 className="text-lg font-bold text-white">Về chúng tôi</h2>
          <ul className="mt-6 space-y-2">
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
            <li>Điều khoản</li>
          </ul>
        </div>

        {/* Học ngôn ngữ */}
        <div>
          <h2 className="text-lg font-bold text-white">Học ngôn ngữ</h2>
          <ul className="mt-6 space-y-2">
            <li>Tiếng Anh</li>
            <li>Tiếng Trung</li>
            <li>Tiếng Nhật</li>
          </ul>
        </div>

        {/* Khuyến mãi */}
        <div>
          <h2 className="text-lg font-bold text-white">Các khuyến mãi</h2>
          <ul className="mt-6 space-y-2">
            <li>Giới thiệu bạn bè</li>
            <li>Mua thẻ quà tặng</li>
            <li>Chương trình liên kết</li>
            <li>Chương trình đối tác</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex items-center justify-center mt-10 text-center px-4">
        <span>© 2018 - 2025 Antoree. Nền tảng học tập hàng đầu Việt Nam</span>
      </div>
    </div>
  );
}

export default Footer;
