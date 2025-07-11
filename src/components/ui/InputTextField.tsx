import TextField from "@mui/material/TextField";
interface InputTextFieldProps {
  label?: string;
}
function InputTextField({ label }: InputTextFieldProps) {
  return (
    <div>
      <TextField id="outlined-basic" label={label} variant="outlined" size="small" />
    </div>
  );
}

export default InputTextField;
