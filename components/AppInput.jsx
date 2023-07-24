import React from 'react'
import { Field } from "formik";

const AppInput = ({ value, onChange, half, ...rest }) => {
    return (
        <>
            <Field
                type="text"
                placeholder='firstname'
                value={value}
                className={`border-2 border-gray-500 p-3 rounded-md focus:border-gray-900 ${half ? "w-1/2" : "w-full"}`}
                {...rest}
            />
        </>
    )
}

export default AppInput