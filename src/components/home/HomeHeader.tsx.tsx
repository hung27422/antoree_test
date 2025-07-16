import LabelImportantIcon from "@mui/icons-material/LabelImportant";

function HomeHeader() {
  return (
    <div className="bg-[#f7f2ed] p-4 rounded-md h-auto lg:h-[400px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center h-full">
        {/* Left Content */}
        <div>
          <h1 className="font-bold text-3xl lg:text-4xl text-gray-800 mb-6">
            Trở nên thành thạo bất kỳ ngôn ngữ nào
          </h1>
          <div className="flex flex-col gap-4 text-gray-700 text-base">
            <div className="flex items-start gap-2">
              <LabelImportantIcon className="text-orange-500 mt-1" />
              <span>
                Thực hiện bài học tùy chỉnh 1 thầy kèm 1 trò được hàng triệu người dùng tin tưởng
              </span>
            </div>
            <div className="flex items-start gap-2">
              <LabelImportantIcon className="text-orange-500 mt-1" />
              <span>
                Học với giáo viên đã được chứng nhận mà phù hợp với ngân quỹ và thời khóa biểu của
                bạn
              </span>
            </div>
            <div className="flex items-start gap-2">
              <LabelImportantIcon className="text-orange-500 mt-1" />
              <span>Kết nối với cộng đồng toàn cầu của những người học ngôn ngữ</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://scdn.italki.com/ng/static/image/asgardhp/hp_cover_w_1.5x.webp"
            alt="img-landing"
            className="max-w-full h-auto lg:h-[360px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
