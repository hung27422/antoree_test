import useSWR from "swr";
import type { Tutor } from "../types/tutors";

function useTutors() {
  const { data: dataTutors, isLoading: isLoadingCourses } = useSWR<Tutor[]>("/tutors");
  return { dataTutors, isLoadingCourses };
}

export default useTutors;
