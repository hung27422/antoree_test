import Button from "@mui/material/Button";
import SelectLanguages from "../components/ui/SelectLanguages";
import SelectPrice from "../components/ui/SelectPrice";
import { useContext, useState } from "react";
import useLanguages from "../hooks/useLanguages";
import { AppContext } from "../context/AppContextProvider";
import useTutors from "../hooks/useTutors";
import CourseCard from "../components/ui/CourseCard";
import PaginationApp from "../components/ui/Pagination";
import useHistoryViewedTutors from "../components/hooks/useHistoryViewedTutors";

function Tutor() {
  const { saveToHistory } = useHistoryViewedTutors(); // dùng hook mới
  const { minPrice, maxPrice, setMaxPrice, setMinPrice } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const [selectedLang, setSelectedLang] = useState("");
  const { languages } = useLanguages();

  const { dataTutors } = useTutors({
    page: page,
    limit: 8,
    language: selectedLang || undefined,
    minPrice: minPrice || undefined,
    maxPrice: maxPrice || undefined,
  });

  const handleClearValue = () => {
    setMaxPrice(null);
    setMinPrice(null);
    setSelectedLang("");
  };

  return (
    <div>
      <div className="grid grid-cols-2 bg-[#f7f2ed] p-4 rounded-md h-[350px]">
        <div className="col-span-1 px-10 py-5">
          <h1 className="font-bold text-4xl text-gray1 sm:text-2xl mb-8">
            Giáo viên <span className="text-orange-600 font-semibold">giảng dạy</span> tốt nhất dành
            cho bạn
          </h1>
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-base">
                Tìm kiếm một cách tuyệt vời để nâng cao ngoại ngữ của bạn? Antoree cung cấp cho bạn
                các giáo viên ngoại ngữ đủ năng lực. Hãy thuê một giáo viên ngoại ngữ trực tuyến
                giúp bạn học ngoại ngữ một cách hiệu quả.
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-start justify-end">
          <img
            src="https://scdn.italki.com/ng/static/image/teacherSearch/bg_logo.svg"
            alt="img-landing"
            className="max-w-full h-[320px]"
          />
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold">Lựa chọn gia sư</h2>
          <div className="flex items-center gap-4">
            <div>
              <SelectLanguages
                languages={languages}
                value={selectedLang}
                onChange={(val) => setSelectedLang(val)}
              />
            </div>
            <div>
              <SelectPrice />
            </div>
            <div>
              <Button color="info" variant="contained" size="small" onClick={handleClearValue}>
                Xóa Lọc
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Hiển thị danh sách gia sư */}
      <div className="py-4 grid grid-cols-4 gap-4">
        {dataTutors?.map((tutor) => (
          <div key={tutor.id} className="col-span-1">
            <CourseCard key={tutor.id} dataTutor={tutor} saveToHistory={saveToHistory} />
          </div>
        ))}
      </div>
      {/* Phân trang */}

      <div className="flex items-center justify-center ">
        <PaginationApp
          currentPage={page}
          totalPages={2}
          onChange={(_event, value) => setPage(value)}
        />
      </div>
    </div>
  );
}

export default Tutor;
