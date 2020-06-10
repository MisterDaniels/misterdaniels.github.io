import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import './index.css';

const FormSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Muito pequeno!')
        .max(100, 'Muito grande!')
        .required('Necessário'),
    email: Yup.string()
        .email('Email inválido')
        .required('Necessário'),
    title: Yup.string()
        .min(5, 'Muito pequeno!')
        .max(20, 'Muito grande!')
        .required('Necessário'),
    message: Yup.string()
        .min(10, 'Muito pequeno!')
        .max(500, 'Muito grande!')
        .required('Necessário')
});

export default (props) => {
    return(
        <Formik 
            initialValues={{
                name: '',
                email: '',
                title: '',
                message: ''
            }}
            validationSchema={FormSchema}
            onSubmit={ (e, values) => {
                emailjs.sendForm('gmail', 'website', '.form form', 'user_nhiF1ZJwT7gAZ460eYG3V')
                    .then((res) => {
                        alert('deu certo');
                        // setSubmitting(false);
                    }, (err) => {
                        alert(err.text);
                        // setSubmitting(false);
                    });
            }} >
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <div className={`input ${ errors.name && touched.name ? "error" : "" }`}>
                        <Field name="name" placeholder="Nome" />
                        { errors.name && touched.name ? (
                            <span>{ errors.name }</span>
                        ) : null}
                    </div>

                    <div className={`input ${ errors.email && touched.email ? "error" : "" }`}>
                        <Field name="email" type="email" placeholder="Email" />
                        { errors.email && touched.email ? (
                            <span>{ errors.email }</span>
                        ) : null}
                    </div>

                    <div className={`input ${ errors.title && touched.title ? "error" : "" }`}>
                        <Field name="title" placeholder="Título" />
                        { errors.title && touched.title ? (
                            <span>{ errors.title }</span>
                        ) : null}
                    </div>

                    <div className={`input ${ errors.message && touched.message ? "error" : "" }`}>
                        <Field name="message" component="textarea" placeholder="Escreva sua mensagem aqui" />
                        { errors.message && touched.message ? (
                            <span>{ errors.message }</span>
                        ) : null}
                    </div>

                    <button type="submit" >Enviar</button>
                </Form>
            )}
        </Formik>
    );
};