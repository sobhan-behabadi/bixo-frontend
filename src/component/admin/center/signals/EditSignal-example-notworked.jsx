import React, {useEffect, useRef, useState} from 'react';
import {Form, Formik, Field, useFormik} from 'formik';
import useGetSignalAdmin from '../../../../customHooks/admin/useGetSignalAdmin';
import Loading from '../../../loading-erorr-and/Loading';
import Error from '../../../loading-erorr-and/Error';
import CustomInput from "../../../form/CustomInput";
import ButtonForm from "../../../form/ButtonForm";
import {useNavigate} from "react-router-dom";

const EditSignalExampleNotworked = () => {

    const formikRef = useRef(null);
    const {data, error, isError, isPending} = useGetSignalAdmin();
    const [selectedItemId, setSelectedItemId] = useState('');
    const [showSelect, setShowSelect] = useState(true);
    const navigate = useNavigate()

    if (isPending) return <Loading/>;
    if (isError) return <Error/>;


    const getInitialValues = () => {
        const selectedItem = data?.data.data.find((item) => item._id === selectedItemId);
        return {
            _id: selectedItem?._id,
            symbol: selectedItem?.symbol,
            action: selectedItem?.action,
            time: selectedItem?.time,
            price: selectedItem?.price,
            target: selectedItem?.target,
            stop: selectedItem?.stop,
        }
    };


    const handleNewEdit = () => {
        navigate('/admin/set-signal')
        setShowSelect(true)
        if (formikRef.current) {
            formikRef.current.resetForm({
                values: {
                    _id: '',
                    symbol: '',
                    action: '',
                    time: '',
                    price: '',
                    target: '',
                    stop: '',
                },
            });
        }
    }

    return (
        <div className="col-12">
            <div className="m-3">

                {
                    showSelect ? (
                        <select
                            className='form-select'
                            name="_id"
                            onChange={(e) => {

                                setSelectedItemId(e.target.value);
                                setShowSelect(false);
                            }}
                            value={selectedItemId}
                        >
                            <option value="">Select an option</option>
                            {data?.data.data.map((item, index) => (
                                <option key={index} value={item._id}>
                                    {item.symbol}
                                </option>
                            ))}
                        </select>
                    ) : null
                }

                {selectedItemId && (
                    <Formik
                        initialValues={getInitialValues()}
                        onSubmit={(values, actions) => {
                            console.log(values);
                            console.log(actions);
                        }}
                        innerRef={formikRef}

                    >
                        <Form>
                            <CustomInput type='text' label='_id' name='_id' id='_id' placeholder='_id'/>
                            <CustomInput type='text' label='symbol' name='symbol' id='symbol' placeholder='symbol'/>
                            <CustomInput type='text' label='action' name='action' id='action' placeholder='action'/>
                            <CustomInput type='text' label='time' name='time' id='time' placeholder='time'/>
                            <CustomInput type='text' label='price' name='price' id='price' placeholder='price'/>
                            <CustomInput type='text' label='target' name='target' id='target' placeholder='target'/>
                            <CustomInput type='text' label='stop' name='stop' id='stop' placeholder='stop'/>
                            <div className='d-flex justify-content-between'>
                                <ButtonForm btn_name='Edit'/>
                                <button className='bg-green-500 px-2  rounded' onClick={handleNewEdit}>Set New Signal</button>
                            </div>

                        </Form>

                    </Formik>
                )}
            </div>
        </div>
    );
};

export default EditSignalExampleNotworked;
