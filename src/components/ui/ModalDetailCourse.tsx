import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { Tutor } from "../../types/tutors";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

interface ModalDetailCourseProps {
  dataTutor: Tutor;
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

export default function ModalDetailCourse({ dataTutor }: ModalDetailCourseProps) {
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
        onClick={() => setOpen(true)}
        sx={{ backgroundColor: "#ff5117", fontWeight: 600 }}
      >
        Xem Chi Tiết
      </Button>

      <Modal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="tutor-detail-modal"
      >
        <Box sx={style}>
          {/* Header */}
          <div className="flex items-start gap-4">
            <IconButton onClick={handleClose} sx={{ position: "absolute", top: 8, right: 8 }}>
              <CloseIcon />
            </IconButton>

            <img src={dataTutor.avatar} className="w-24 h-24 rounded-full object-cover" />
            <div className="flex flex-col gap-1">
              <Typography variant="h6" fontWeight="bold">
                {dataTutor.name}
              </Typography>

              <Typography variant="body1">
                <strong>Giảng dạy:</strong> {getLanguageName(dataTutor.language)}
              </Typography>

              <Typography variant="body1">
                <strong>Chứng chỉ:</strong>{" "}
                {dataTutor.certificates?.length
                  ? dataTutor.certificates.map((item, idx) => (
                      <React.Fragment key={idx}>
                        {item}
                        {idx < dataTutor.certificates.length - 1 ? ", " : ""}
                      </React.Fragment>
                    ))
                  : "Không có"}
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

          {/* Description */}
          <div className="mt-4">
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Giới thiệu bản thân
            </Typography>
            <Typography variant="body2">{dataTutor.description}</Typography>
          </div>

          {/* Teaching Style */}
          <div className="mt-4">
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Phong cách dạy học
            </Typography>
            <Typography variant="body2">{dataTutor.teachingMethod}</Typography>
          </div>

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
