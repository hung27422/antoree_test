import TippyHeadless from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import SearchIcon from "@mui/icons-material/Search";
import useTutors from "../../hooks/useTutors";
import { useState } from "react";
import useDebounce from "../../components/hooks/useDebounce";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [showResults, setShowResults] = useState(true);

  const debounceValue = useDebounce(searchValue, 500);
  const { dataTutors, isLoadingCourses } = useTutors({
    page: 1,
    limit: 4,
    specialty: debounceValue,
  });
  const isDataTutorsEmpty = !dataTutors || dataTutors.length === 0;

  const handleChange = (searchValue: string) => {
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };
  const handleHideSearch = () => {
    setShowResults(false);
  };
  return (
    <div>
      <TippyHeadless
        interactive
        visible={showResults && searchValue.length > 0}
        onClickOutside={handleHideSearch}
        render={(attrs) => (
          <div
            className="box bg-white w-[420px] shadow-gray-400 shadow rounded-md p-2"
            tabIndex={-1}
            {...attrs}
          >
            {isLoadingCourses && <div>Loading...</div>}
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold">Kết quả tìm kiếm</span>

              <span
                className={`cursor-pointer hover:text-[#ff5117] font-bold ${
                  isDataTutorsEmpty && "pointer-events-none opacity-50"
                }`}
              >
                Xem tất cả
              </span>
            </div>
            {!isDataTutorsEmpty ? (
              dataTutors?.map((tutor) => {
                return (
                  <div key={tutor.id}>
                    <div className="flex items-center p-2 cursor-pointer hover:bg-gray-200 transition-colors duration-200 ease-in-out rounded-md">
                      <img
                        src={tutor.avatar}
                        alt="logo-tutor"
                        className="size-12 rounded-full mr-3"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{tutor.specialty}</h3>
                        <p className="text-sm text-gray-500">{tutor.name}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <span>Không tìm thấy kết quả {searchValue}</span>
              </div>
            )}
          </div>
        )}
      >
        <div className="flex items-center h-10 w-[420px] gap-2 border-2 border-[#d0d3d3] rounded-2xl px-3 py-2 hover:border-[#444] transition-colors duration-200 ease-in-out">
          <SearchIcon className="opacity-70" />
          <input
            type="search"
            name="search"
            id=""
            className="outline-0 py-2 caret-[#444] w-full"
            placeholder="Tìm kiếm khóa học..."
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </TippyHeadless>
    </div>
  );
}

export default Search;
