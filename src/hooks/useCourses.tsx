import useSWR from "swr";

function useCourses() {
  const { data: dataCourses, isLoading: isLoadingCourses } = useSWR("/courses");
  return { dataCourses, isLoadingCourses };
}

export default useCourses;
