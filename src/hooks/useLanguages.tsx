function useLanguages() {
  const languages = [
    { id: "1", name: "Tiếng Anh", slug: "english" },
    { id: "2", name: "Tiếng Hàn", slug: "korean" },
    { id: "3", name: "Tiếng Trung", slug: "chinese" },
  ];
  return { languages };
}

export default useLanguages;
