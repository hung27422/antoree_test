// components/PatientPagination.tsx
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationAppProps {
  totalPages: number;
  currentPage: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export default function PaginationApp({ totalPages, currentPage, onChange }: PaginationAppProps) {
  return (
    <Stack spacing={2} alignItems="center" mt={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onChange}
        shape="rounded"
        variant="outlined"
        color="primary"
      />
    </Stack>
  );
}
