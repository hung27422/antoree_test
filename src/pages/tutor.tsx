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
  const { saveToHistory } = useHistoryViewedTutors();
  const { minPrice, maxPrice, setMaxPrice, setMinPrice } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const [selectedLang, setSelectedLang] = useState("");
  const { languages } = useLanguages();

  const { dataTutors } = useTutors({
    page,
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
      {/* Banner */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-[#f7f2ed] p-4 md:p-8 rounded-md md:h-[400px]">
        <div className="px-4 md:px-10 py-4 flex items-center">
          <div>
            <h1 className="font-bold text-2xl md:text-4xl text-gray1 mb-4 md:mb-6">
              Giáo viên <span className="text-orange-600 font-semibold">giảng dạy</span> tốt nhất
              dành cho bạn
            </h1>
            <p className="text-sm md:text-base text-gray-700">
              Tìm kiếm một cách tuyệt vời để nâng cao ngoại ngữ của bạn? Antoree cung cấp cho bạn
              các giáo viên ngoại ngữ đủ năng lực. Hãy thuê một giáo viên ngoại ngữ trực tuyến giúp
              bạn học ngoại ngữ một cách hiệu quả.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 md:mt-0">
          <img
            src="https://scdn.italki.com/ng/static/image/teacherSearch/bg_logo.svg"
            alt="img-landing"
            className="max-w-full h-[200px] sm:h-[280px] md:h-[320px] md:hidden lg:block block"
          />
        </div>
      </div>

      {/* Lọc */}
      <div className="mt-8 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Lựa chọn gia sư</h2>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <SelectLanguages
            languages={languages}
            value={selectedLang}
            onChange={(val) => setSelectedLang(val)}
          />
          <SelectPrice />
          <Button color="info" variant="contained" size="small" onClick={handleClearValue}>
            Xóa Lọc
          </Button>
        </div>
      </div>

      {/* Danh sách gia sư */}
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dataTutors?.map((tutor) => (
          <CourseCard key={tutor.id} dataTutor={tutor} saveToHistory={saveToHistory} />
        ))}
      </div>

      {/* Phân trang */}
      <div className="flex justify-center mb-10">
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
