import { useState } from "react";
import HomeHeader from "../components/home/HomeHeader.tsx";
import SelectLanguages from "../components/ui/SelectLanguages.tsx";
import useLanguages from "../hooks/useLanguages.tsx";
import useTutors from "../hooks/useTutors.tsx";
import CourseCard from "../components/ui/CourseCard.tsx";

function HomePage() {
  const [selectedLang, setSelectedLang] = useState("");
  const { languages } = useLanguages();
  const { dataTutors } = useTutors();
  console.log({ dataTutors });

  return (
    <div>
      <div>
        <HomeHeader />
      </div>
      <div className="mt-8 px-5">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold">Lựa chọn gia sư</h2>
          <div>
            <SelectLanguages
              languages={languages}
              value={selectedLang}
              onChange={(val) => setSelectedLang(val)}
            />
          </div>
        </div>
        <div className="py-4 grid grid-cols-4 gap-4">
          {dataTutors?.map((tutor) => (
            <div key={tutor.id} className="col-span-1">
              <CourseCard key={tutor.id} dataTutor={tutor} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
