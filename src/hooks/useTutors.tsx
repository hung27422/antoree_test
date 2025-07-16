import useSWR from "swr";
import type { Tutor } from "../types/tutors";

interface UseTutorsProps {
  page: number;
  limit: number;
  specialty?: string;
}
function useTutors({ page, limit, specialty }: UseTutorsProps) {
  const query = new URLSearchParams({
    _page: page.toString(),
    _limit: limit.toString(),
  });
  if (specialty) {
    query.append("specialty_like", specialty);
  }
  const { data: dataTutors, isLoading: isLoadingCourses } = useSWR<Tutor[]>(
    `/tutors?${query.toString()}`
  );
  return { dataTutors, isLoadingCourses };
}

export default useTutors;
