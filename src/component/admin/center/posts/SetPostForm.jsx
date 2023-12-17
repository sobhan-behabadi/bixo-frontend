import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import ButtonForm from "../../../form/ButtonForm";
import useSetNewPost from "../../../../customHooks/admin/useSetNewPost";

const SetPostForm = () => {

    const sendPost = useSetNewPost();

    const formik = useFormik({
        initialValues: {
            title: '',
            text: '',
            link: '',
            image: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            text: Yup.string().required('Text is required'),
            link: Yup.string().required('Link is required'),
            image: Yup.mixed().required('Image is required'),
        }),
        onSubmit: (values) => {
            sendPost.mutate(values)
        },
    });

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                formik.setFieldValue('image', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={'col-12'}>
            <div className="m-3">
                {
                    sendPost.isError ? <h6 className={'alert alert-danger'}>Error, try again later</h6> :
                        sendPost.isSuccess ? <h6 className={'alert alert-success'}>success, published</h6> : (
                            <form onSubmit={formik.handleSubmit}>
                                <label htmlFor="title">Title:</label>
                                <input
                                    className={'form-control'}
                                    type="text"
                                    id="title"
                                    name="title"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.title}
                                />
                                {formik.touched.title && formik.errors.title && (
                                    <div>{formik.errors.title}</div>
                                )}

                                <label htmlFor="text">Text:</label>
                                <textarea
                                    className={'form-control'}
                                    id="text"
                                    name="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.text}
                                />
                                {formik.touched.text && formik.errors.text && (
                                    <div>{formik.errors.text}</div>
                                )}

                                <label htmlFor="link">Link:</label>
                                <input
                                    className={'form-control'}
                                    type="text"
                                    id="link"
                                    name="link"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.link}
                                />
                                {formik.touched.link && formik.errors.link && (
                                    <div>{formik.errors.link}</div>
                                )}

                                <label htmlFor="image">Image:</label>
                                <input
                                    className={'form-control mb-3'}
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={handleImageChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.image && formik.errors.image && (
                                    <div>{formik.errors.image}</div>
                                )}

                                <ButtonForm btn_name={'Set New Post'}/>
                            </form>
                        )}
            </div>
        </div>
    );
};

export default SetPostForm;
