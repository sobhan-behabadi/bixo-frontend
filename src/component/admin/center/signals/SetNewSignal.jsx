import useSetNewSignalAdmin from "../../../../customHooks/admin/useSetNewSignalAdmin";
import {useFormik} from "formik";
import * as Yup from 'yup';
import Loading from "../../../loading-erorr-and/Loading";
import ButtonForm from "../../../form/ButtonForm";

const SetNewSignal = () => {

    //mutation
    const setSignal = useSetNewSignalAdmin();


    const formik = useFormik({
        initialValues: {
            symbol: '',
            action: '',
            time: '',
            price: 0,
            target: '',
            stop: '',
        },
        validationSchema: Yup.object({
            symbol: Yup.string().required('All Input Required'),
            action: Yup.string().required('All Input Required'),
            time: Yup.string().required('All Input Required'),
            price: Yup.number().required('All Input Required'),
            target: Yup.string().required('All Input Required'),
            stop: Yup.string().required('All Input Required'),
        }),
        onSubmit: values => {
            setSignal.mutate(values)
        },
    })


    return (
        <div className={'col-12'}>
            <div className={'m-3'}>

                {
                    setSignal.isPending ? <Loading/> :
                        setSignal.isError ? <h6 className='alert alert-danger'>Error</h6> :
                            setSignal.isSuccess ? <h5 className={'alert alert-success'}>Success</h5> : null
                }

                <form onSubmit={formik.handleSubmit}>
                    {
                        formik.touched.symbol && formik.errors.symbol ? (
                            <h5 className={'alert alert-danger'}>{formik.errors.symbol}</h5>) : null
                    }
                    <div className="mb-3">
                        <label htmlFor="symbol" className="form-label">symbol</label>
                        <input type="text" className="form-control" id="symbol" name='symbol' placeholder='SYMBOL'
                               onChange={formik.handleChange('symbol')}
                               value={formik.values.symbol}
                               onBlur={formik.handleBlur('symbol')}/>
                    </div>

                    {
                        formik.touched.action && formik.errors.action ? (
                            <h5 className={'alert alert-danger'}>{formik.errors.action}</h5>) : null
                    }
                    <div className="mb-3">
                        <label htmlFor="action" className="form-label">Action</label>
                        <input type="text" className="form-control" id="action" name='action' placeholder='BUY/SELL'
                               onChange={formik.handleChange('action')}
                               value={formik.values.action}
                               onBlur={formik.handleBlur('action')}/>
                    </div>

                    {
                        formik.touched.time && formik.errors.time ? (
                            <h5 className={'alert alert-danger'}>{formik.errors.time}</h5>) : null
                    }
                    <div className="mb-3">
                        <label htmlFor="time" className="form-label">time</label>
                        <input type="date" className="form-control" id="time" name='time' placeholder='time'
                               onChange={formik.handleChange('time')}
                               value={formik.values.time}
                               onBlur={formik.handleBlur('time')}/>
                    </div>

                    {
                        formik.touched.price && formik.errors.price ? (
                            <h5 className={'alert alert-danger'}>{formik.errors.price}</h5>) : null
                    }
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">price</label>
                        <input type="text" className="form-control" id="price" name='price' placeholder='10000'
                               onChange={formik.handleChange('price')}
                               value={formik.values.price}
                               onBlur={formik.handleBlur('price')}/>
                    </div>

                    {
                        formik.touched.target && formik.errors.target ? (
                            <h5 className={'alert alert-danger'}>{formik.errors.target}</h5>) : null
                    }
                    <div className="mb-3">
                        <label htmlFor="target" className="form-label">target</label>
                        <input type="text" className="form-control" id="target" name='target'
                               placeholder='targets (You can add many target with (,))'
                               onChange={formik.handleChange('target')}
                               value={formik.values.target}
                               onBlur={formik.handleBlur('target')}/>
                    </div>


                    {
                        formik.touched.stop && formik.errors.stop ? (
                            <h5 className={'alert alert-danger'}>{formik.errors.stop}</h5>) : null
                    }
                    <div className="mb-3">
                        <label htmlFor="stop" className="form-label">stop</label>
                        <input type="text" className="form-control" id="stop" name='stop'
                               placeholder='stop (You can add many stop with (,))'
                               onChange={formik.handleChange('stop')}
                               value={formik.values.stop}
                               onBlur={formik.handleBlur('stop')}/>
                    </div>

                    <ButtonForm btn_name='Set'/>
                </form>
            </div>
        </div>
    )
}

export default SetNewSignal;