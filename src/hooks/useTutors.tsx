import useSWR from "swr";
import type { Tutor } from "../types/tutors";

interface UseTutorsProps {
  page: number;
  limit: number;
  language?: string;
  specialty?: string;
  minPrice?: number;
  maxPrice?: number;
}
function useTutors({ page, limit, specialty, minPrice, maxPrice, language }: UseTutorsProps) {
  const query = new URLSearchParams({
    _page: page.toString(),
    _limit: limit.toString(),
  });
  if (language) {
    query.append("language", language);
  }
  if (specialty) {
    query.append("specialty_like", specialty);
  }
  if (minPrice) query.append("price_gte", minPrice.toString());
  if (maxPrice) query.append("price_lte", maxPrice.toString());
  const { data: dataTutors, isLoading: isLoadingCourses } = useSWR<Tutor[]>(
    `/tutors?${query.toString()}`
  );
  return { dataTutors, isLoadingCourses };
}

export default useTutors;
