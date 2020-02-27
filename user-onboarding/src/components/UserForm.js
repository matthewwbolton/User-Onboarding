import React from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const UserForm = ({values, errors, touched}) => {
    return (
        <div>
            <Form>
                <label htmlFor='name'>Name:</label>
                <Field id='name' type='text' name='name' placeholder='Name' value={values.name} />
                {touched.name && errors.name && <p>{errors.name}</p>}
                <label htmlFor='eamil'>Email:</label>
                <Field id='email' type='email' name='email' placeholder='Email' value={values.email}  />
                {touched.email && errors.email && <p>{errors.email}</p>}
                <label htmlFor='password'>Password:</label>
                <Field id='password' type='password' name='password' placeholder='Password' value={values.password}  />
                {touched.password && errors.password && <p>{errors.password}</p>}
                <label htmlFor='tos'>Terms of Service</label>
                <Field id='tos' type='checkbox' name='tos' value={values.tos}/>
                <button type='submit'>Submit</button>
            </Form>   
        </div>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({name, email, password, tos}) {
       return {
        name: name || '',
        email: email || '',
        password: password || '',
        tos: tos ||  false
       }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('This field is required'),
        email: Yup.string()
            .email()
            .required('This field is required'),
        password: Yup.string()
            .min(6)
            .required('You must enter a valid password')  

    }),

    handleSubmit(values){
        console.log(values);

    }
    
})(UserForm);

export default FormikUserForm;