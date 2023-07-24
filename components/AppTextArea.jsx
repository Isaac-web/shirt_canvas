import { useField } from 'formik'
import React from 'react'

const AppTextArea = (props) => {
    const [field, meta, helper] = useField(...props);


    return (
        <textarea {...field} />
    )
}

export default AppTextArea