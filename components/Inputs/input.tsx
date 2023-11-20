import { InputField } from "@/libs/type";
import { TextField,styled } from "@mui/material";


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
export default function InputField(props:InputField){
    const {id,name,helperText,onBlur,onChange,error,value,label}=props;
    return(
        <>
        <CustomTextField
                            fullWidth
                            id={id}
                            name={name}
                            label={label}
                            value={value}
                            onChange={onChange}
                            InputProps={{
                                sx: {
                                    "& input": {
                                        fontSize: "14px",
                                        lineHeight: "150%",
                                        color: "#506783",
                                        fontWeight: "400 !important",
                                        backgroundColor: '#fff'
                                    }
                                }
                            }}
                            InputLabelProps={{

                            }}
                            onBlur={onBlur}
                            error={error}
                            helperText={helperText}
                        />
        </>
    )
}