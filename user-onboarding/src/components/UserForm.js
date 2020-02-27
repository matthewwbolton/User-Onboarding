import React from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const UserForm = () => {
    return (
        <div>
            <Form>
                <label htmlFor='name'>Name:</label>
                <Field id='name' type='text' name='name' placeholder='Name' />
                <label htmlFor='eamil'>Email:</label>
                <Field id='email' type='email' name='email' placeholder='Email'  />
                <label htmlFor='password'>Password:</label>
                <Field id='password' type='password' name='password' placeholder='Password'  />
                <label htmlFor='tos'>Terms of Service</label>
                <Field id='tos' type='checkbox' name='tos' />
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

    handleSubmit(values){
        console.log(values);

    }
    
})(UserForm);

export default FormikUserForm;