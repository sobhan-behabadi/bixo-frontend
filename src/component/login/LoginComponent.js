import {useEffect, useState} from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import useLogin from "../../customHooks/useLogin";
import {Container, Row, Col, Card} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import useAuth from "../../customHooks/useAuth";


const LoginComponent = () => {

    const [loginInfo, setLoginInfo] = useState({});
    const res = useLogin(loginInfo)


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            // .email('This is a not email').required('Email is Required'),
            email: Yup.string().email('Email not true').required('Email can\'t empty'),
            password: Yup.string().required('Password Can\'t empty')
            // .required('Password is Required')
        }),
        onSubmit: (values) => {
            setLoginInfo(values);
            res.mutate();
        }
    });

    return (
        <>
            <section className="background-radial-gradient overflow-hidden">
                <style>
                    {`
                        .background-radial-gradient {
                            background-color: hsl(218, 41%, 15%);
                            background-image: radial-gradient(650px circle at 0% 0%,
                            hsl(218, 41%, 35%) 15%,
                            hsl(218, 41%, 30%) 35%,
                            hsl(218, 41%, 20%) 75%,
                            hsl(218, 41%, 19%) 80%,
                            transparent 100%),
                            radial-gradient(1250px circle at 100% 100%,
                            hsl(218, 41%, 45%) 15%,
                            hsl(218, 41%, 30%) 35%,
                            hsl(218, 41%, 20%) 75%,
                            hsl(218, 41%, 19%) 80%,
                            transparent 100%);
                            }

          #radius-shape-1 {
            height: 220px;
            width: 220px;
            top: -60px;
            left: -130px;
            background: radial-gradient(#44006b, #ad1fff);
            overflow: hidden;
          }

          #radius-shape-2 {
            border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
            bottom: -60px;
            right: -110px;
            width: 300px;
            height: 300px;
            background: radial-gradient(#44006b, #ad1fff);
            overflow: hidden;
          }

          .bg-glass {
            background-color: hsla(0, 0%, 100%, 0.9) !important;
            backdrop-filter: saturate(200%) blur(25px);
          }
        `}
                </style>

                <Container className="px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <Row className="gx-lg-5 align-items-center mb-5">
                        <Col lg={6} mb={5} mb-lg={0} style={{zIndex: 10}}>
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: 'hsl(218, 81%, 95%)'}}>
                                Bixo<br/>
                                <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
                            </h1>
                            <p className="mb-4 opacity-70" style={{color: 'hsl(218, 81%, 85%)'}}>
                                Welcome to our platform! Sign in to access special offers and manage your account.
                                Experience the unique capabilities of our services and get the most up-to-date
                                information.
                            </p>
                            <h3 className={'text-blue-600'}>Login Form</h3>
                        </Col>

                        <Col lg={6} mb={5} mb-lg={0} className="position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <Card className="bg-glass">
                                <Card.Body className="px-4 py-5 px-md-5">

                                    {
                                        res.isError ? (
                                                <h3 className='alert alert-danger text-center'>{res.error.response.data.message}</h3>) :
                                            res.data ? (
                                                // res.data.data.message
                                                <h3 className='alert alert-success text-center'>Loading...</h3>
                                            ) : null
                                    }

                                    <form onSubmit={formik.handleSubmit}>

                                        {/* Email input */}
                                        {
                                            formik.touched.email && formik.errors.email ? (
                                                <h3 className='alert alert-danger'>{formik.errors.email}</h3>) : null
                                        }
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3">
                                                Email
                                            </label>
                                            <input
                                                name='email'
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                                onBlur={formik.handleBlur}
                                                type="email" id="form3Example3" className="form-control"
                                            />
                                        </div>

                                        {/* Password input */}
                                        {
                                            formik.touched.password && formik.errors.password ? (
                                                <h3 className='alert alert-danger'>{formik.errors.password}</h3>) : null
                                        }
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4">
                                                Password
                                            </label>
                                            <input type="password" id="form3Example4" name='password'
                                                   className="form-control"
                                                   onBlur={formik.handleBlur}
                                                   onChange={formik.handleChange}
                                                   value={formik.values.password}
                                            />
                                        </div>

                                        {/* Submit button */}
                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-outline-primary btn-block mb-4">
                                                Login
                                            </button>
                                        </div>

                                        {/* Register buttons */}
                                        <div className="text-center d-grid">
                                            <p>Do you want Register ? </p>
                                            <NavLink to='/register' className="btn btn-primary mx-1">
                                                Register
                                            </NavLink>
                                        </div>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )

}

export default LoginComponent;