import {useFormik} from "formik";
import * as Yup from 'yup';
import ButtonForm from "../../form/ButtonForm";
import useEditProfile from "../../../customHooks/useEditProfile";
import {useState} from "react";


const ChangePassword = () => {

    const changePassword = useEditProfile()
    const formik = useFormik({
        initialValues: {
            password: '',
            repeatPassword: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                .matches(/\d/, 'Password must contain at least one number')
                .required('Password is required'),

            repeatPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        }),
        onSubmit: values => {
            if (values.password === values.repeatPassword) {
                changePassword.mutate(values.password)
            }
        },
    });

    return (
        changePassword.isError ? <h5 className={'alert alert-danger'}>Error Change, try again later.</h5> :
            changePassword.isSuccess ? <h5 className={'alert alert-success'}>success, password Changed</h5> :
                <form onSubmit={formik.handleSubmit}>
                    <div className={'mb-3'}>
                        {formik.touched.password && formik.errors.password && (
                            <div className={'alert alert-danger'}>{formik.errors.password}</div>
                        )}
                        <label htmlFor="password">New Password</label>
                        <input
                            className={'form-control'}
                            type="password"
                            id="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                    </div>
                    <div className={'mb-3'}>
                        {formik.touched.repeatPassword && formik.errors.repeatPassword && (
                            <div className={'alert alert-danger'}>{formik.errors.repeatPassword}</div>
                        )}
                        <label htmlFor="repeatPassword">Repeat Password</label>
                        <input
                            className={'form-control'}
                            type="password"
                            id="repeatPassword"
                            name="repeatPassword"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.repeatPassword}
                        />
                    </div>
                    <div>
                        <ButtonForm btn_name={'Submit'}/>
                    </div>
                </form>
    )
}

export default ChangePassword;