"use client"
import { InputField } from "@/libs/type";
import { IconButton, InputAdornment, TextField, styled } from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const CustomTextField = styled(TextField)({
    "& .MuiInputLabel-root": { color: '#506783 !important' },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#859BB4 !important',
        },
        '&:hover fieldset': {
            borderColor: '#859BB4 !important',
            borderWidth: '1px !important'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#859BB4 !important',
            borderWidth: '1px !important'
        },
    },
});
export default function InputPasswordField(props: InputField) {
    const { id, name, helperText, onBlur, onChange, error, value, label } = props;
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        <>
            <CustomTextField
                fullWidth
                id={id}
                name={name}
                label={label}
                type={showPassword ? "text" : "password"}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                InputProps={{
                    sx: {
                        "& input": {
                            fontSize: "14px",
                            lineHeight: "150%",
                            color: "#506783",
                            fontWeight: "400 !important",
                            backgroundColor: '#fff'
                        }
                    },
                    endAdornment:
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>

                }}
                error={error}
                helperText={helperText}
            />
        </>
    )
}