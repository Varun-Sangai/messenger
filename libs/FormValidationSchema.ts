import * as Yup from 'yup';

// Validation Schema for signin form
export const validationSchemaSignIn = Yup.object({
    email: Yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
            'Password must contain at least one uppercase letter, one digit, and one special character'
        )

});


// Validation Schema for signup form
export const validationSchemaSignUp= Yup.object().shape({
    fullName: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Invalid email').required('Please enter your email'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
            'Password must contain at least one uppercase letter, one digit, and one special character'
        ),
});




