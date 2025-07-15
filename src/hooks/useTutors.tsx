import useSWR from "swr";
import type { Tutor } from "../types/tutors";

interface UseTutorsProps {
  page: number;
  limit: number;
}
function useTutors({ page, limit }: UseTutorsProps) {
  const { data: dataTutors, isLoading: isLoadingCourses } = useSWR<Tutor[]>(
    `/tutors?_page=${page}&_limit=${limit}`
  );
  return { dataTutors, isLoadingCourses };
}

export default useTutors;
