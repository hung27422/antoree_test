import LabelImportantIcon from "@mui/icons-material/LabelImportant";
function HomeHeader() {
  return (
    <div className="grid grid-cols-2 bg-[#f7f2ed] p-4 rounded-md h-[400px]">
      <div className="col-span-1">
        <h1 className="font-bold text-4xl text-gray1 sm:text-2xl mb-8">
          Trở nên thành thạo bất kỳ ngôn ngữ nào
        </h1>
        <div className="flex flex-col gap-4">
          <div>
            <LabelImportantIcon className="text-orange-500" />
            <span className="text-base">
              Thực hiện bài học tùy chỉnh 1 thầy kèm 1 trò được hàng triệu người dùng tin tưởng
            </span>
          </div>
          <div>
            <LabelImportantIcon className="text-orange-500" />
            <span className="text-base">
              Học với giáo viên đã được chứng nhận mà phù hợp với ngân quỹ và thời khóa biểu của bạn
            </span>
          </div>
          <div>
            <LabelImportantIcon className="text-orange-500" />
            <span className="text-base">
              Kết nối với cộng đồng toàn cầu của những người học ngôn ngữ
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex items-start justify-end">
        <img
          src="https://scdn.italki.com/ng/static/image/asgardhp/hp_cover_w_1.5x.webp"
          alt="img-landing"
          className="max-w-full h-[360px]"
        />
      </div>
    </div>
  );
}

export default HomeHeader;
