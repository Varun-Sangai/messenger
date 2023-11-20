"use client"
import { useFormik } from 'formik';
import { validationSchemaSignUp } from '@/libs/FormValidationSchema';
import InputField from '../Inputs/input';
import Link from 'next/link';
import InputPasswordField from '../Inputs/InputPassword';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { message } from 'antd';
export default function SignUp() {
    const router=useRouter();
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchemaSignUp,
        onSubmit: async (values) => {
            try {
                await axios.post("/api/register", {
                    name: values.fullName,
                    email: values.email,
                    password: values.password
                });
                message.success("SuccessFully Registered!!");
                router.push('/');
            } catch (err) {
                console.log(err);
            }
        },
    });
    return (
        <div className='max-w-md w-full bg-[#fff] rounded-md'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[32px] w-full p-4 '>
                <div className='flex flex-col gap-[16px] w-full'>
                    <InputField id="fullname"
                        name="fullName"
                        label='Full Name'
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                        helperText={formik.touched.fullName && formik.errors.fullName}></InputField>
                    <InputField id="email"
                        name="email"
                        label='Email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}></InputField>
                    <InputPasswordField id="password"
                        name="password"
                        label='Password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}></InputPasswordField>
                </div>
                <LoadingButton className='!rounded-[8px] !justify-center !items-start !w-[100%] !py-[12px] !flex  !bg-[#081226] !text-[16px] !leading-[150%] !text-[#fff]' type='submit' endIcon={<ArrowForwardIcon></ArrowForwardIcon>} loadingPosition='end' variant='contained' loading={(formik.isValidating || formik.isSubmitting)} >
                    {(formik.isValidating || formik.isSubmitting) ? 'Creating ...' : 'Create Account'}
                </LoadingButton>
            </form >
            <div className='mt-2 mb-4 flex justify-center items-center gap-2 text-gray-500'>
                <p>Already have an account?</p>
                <Link href="/" className='underline'>Sign In</Link>
            </div>
        </div>
    );
}