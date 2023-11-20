"use client"
import { useFormik } from 'formik';
import { validationSchemaSignIn } from '@/libs/FormValidationSchema';
import InputField from '../Inputs/input';
import InputPasswordField from '../Inputs/InputPassword';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from 'next/link';
import {signIn, useSession} from "next-auth/react";
import { useEffect } from 'react';
import {useRouter} from "next/navigation";
import {message} from "antd";
export default function SignIn() {
    const session=useSession();
    const router=useRouter();
    useEffect(()=>{
        if(session?.status==="authenticated")
        {
            router.push("/users");
        }
    },[session?.status])
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchemaSignIn,
        onSubmit:async (values) => {
            try{
            const response=await signIn('credentials',{...values,redirect:false});
            message.success("SuccessFully logged in!!");
            console.log(response);
            }catch(err){
                console.log(err);
            }
        },
    });
    return (
        <div className='max-w-md w-full bg-[#fff] rounded-md'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[32px] w-full p-4'>
                <div className='flex flex-col gap-[16px] w-full'>
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
                        {(formik.isValidating || formik.isSubmitting) ?'Signing in...' : 'Sign In'}
                </LoadingButton>
            </form >
            <div className='mt-2 mb-4 flex justify-center items-center gap-2 text-gray-500'>
                <p>New to App?</p>
                <Link href="/register" className='underline'>Sign Up</Link>
            </div>
        </div>
    );
}