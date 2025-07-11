import { useState } from "react";
import HomeHeader from "../components/home/HomeHeader.tsx";
import SelectLanguages from "../components/ui/SelectLanguages.tsx";
import useLanguages from "../hooks/useLanguages.tsx";
import useCourses from "../hooks/useCourses.tsx";

function HomePage() {
  const [selectedLang, setSelectedLang] = useState("");
  const { languages } = useLanguages();
  const { dataCourses } = useCourses();
  console.log({ dataCourses });

  return (
    <div>
      <div>
        <HomeHeader />
      </div>
      <div className="mt-8 px-5">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold">Các khóa học</h2>
          <div>
            <SelectLanguages
              languages={languages}
              value={selectedLang}
              onChange={(val) => setSelectedLang(val)}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HomePage;
