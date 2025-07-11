interface Language {
  id: string;
  name: string;
  slug: string;
}

interface SelectLanguagesProps {
  languages: Language[];
  value: string;
  onChange: (value: string) => void;
}

function SelectLanguages({ languages, value, onChange }: SelectLanguagesProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded px-3 py-2"
    >
      <option value="">-- Chọn ngôn ngữ --</option>
      {languages.map((lang) => (
        <option key={lang.id} value={lang.id}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}

export default SelectLanguages;
