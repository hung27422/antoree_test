import ButtonMUI from "@mui/material/Button";

interface ButtonProps {
  label?: string;
  variant?: "text" | "outlined" | "contained";
  bgColor?: string;
  color?: string;
}
function Button({ label, variant, bgColor, color }: ButtonProps) {
  return (
    <div>
      <ButtonMUI
        variant={variant}
        sx={{
          backgroundColor: bgColor,
          color: color ? color : "#fff",
          boxShadow: "none",
          fontSize: "13px",
          fontWeight: 600,
        }}
      >
        {label}
      </ButtonMUI>
    </div>
  );
}

export default Button;
