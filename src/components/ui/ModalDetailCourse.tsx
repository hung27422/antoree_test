import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { ITutor } from "../../types/tutors";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface ModalDetailCourseProps {
  dataTutor: ITutor;
  saveToHistory: (tutor: ITutor) => void;
}

const getLanguageName = (lang: string) => {
  switch (lang) {
    case "english":
      return "Tiếng Anh";
    case "korean":
      return "Tiếng Hàn";
    case "chinese":
      return "Tiếng Trung";
    default:
      return "Không xác định";
  }
};

export default function ModalDetailCourse({ dataTutor, saveToHistory }: ModalDetailCourseProps) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleRegister = () => {
    alert(`Bạn đã đăng ký học với ${dataTutor.name}`);
  };

  return (
    <div>
      <Button
        fullWidth
        variant="contained"
        onClick={() => {
          saveToHistory(dataTutor);
          setOpen(true);
        }}
        sx={{ backgroundColor: "#ff5117", fontWeight: 600 }}
      >
        Xem Chi Tiết
      </Button>

      <Modal keepMounted open={open} onClose={handleClose} aria-labelledby="tutor-detail-modal">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90vw", sm: 500, md: 650 },
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 2,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          {/* Close Button */}
          <IconButton onClick={handleClose} sx={{ position: "absolute", top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <img
              src={dataTutor.avatar}
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="flex flex-col gap-1">
              <Typography variant="h6" fontWeight="bold">
                {dataTutor.name}
              </Typography>

              <Typography variant="body1">
                <strong>Giảng dạy:</strong> {getLanguageName(dataTutor.language)}
              </Typography>

              <Typography variant="body1">
                <strong>Chứng chỉ:</strong>{" "}
                {dataTutor.certificates?.length ? dataTutor.certificates.join(", ") : "Không có"}
              </Typography>

              <Typography variant="body1">
                <strong>Kinh nghiệm:</strong> {dataTutor.experience}
              </Typography>

              <Typography variant="body1">
                <strong>Trường học:</strong> {dataTutor.education}
              </Typography>

              <Typography variant="body1">
                <strong>Đánh giá:</strong> {dataTutor.rating} ⭐ ({dataTutor.reviews} lượt đánh giá)
              </Typography>
            </div>
          </div>

          {/* Giới thiệu */}
          <div className="mt-4">
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Giới thiệu bản thân
            </Typography>
            <Typography variant="body2">{dataTutor.description}</Typography>
          </div>

          {/* Phong cách dạy học */}
          <div className="mt-4">
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Phong cách dạy học
            </Typography>
            <Typography variant="body2">{dataTutor.teachingMethod}</Typography>
          </div>

          {/* Button đăng ký */}
          <div className="flex justify-end mt-6">
            <Button
              onClick={handleRegister}
              variant="contained"
              sx={{ backgroundColor: "#ff5117" }}
            >
              Đăng ký học
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
