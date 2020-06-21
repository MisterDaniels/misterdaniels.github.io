import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import Recaptcha from 'react-recaptcha';

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
    const [isVerified, setIsVerified] = useState(false);

    const notifySuccess = () => toast.success('😄 Recebido, em breve te respondo!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifyUnsuccess = () => { 
        toast.error('😨 Opa, parece que algo deu errado!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        toast.info('😉 Me chama diretamente no meu email, ok !?', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const notifyUnsuccessCaptcha = () => {
        toast.warning('🤖 Você deve confirmar que é um humano!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const verifyCallback = (res) => {
        if (res) {
            setIsVerified(true);
        }
    }

    const recaptchaLoaded = () => {
        console.log('Recaptcha Loaded');
    }

    return(
        <div>
            <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    title: '',
                    message: ''
                }}
                validationSchema={FormSchema}
                onSubmit={ (values, { setSubmitting, resetForm }) => {
                    if (!isVerified) {
                        setSubmitting(false);
                        return notifyUnsuccessCaptcha();
                    }
                    
                    emailjs.sendForm('gmail', 'website', '.form form', 'user_nhiF1ZJwT7gAZ460eYG3V')
                        .then((res) => {
                            notifySuccess();
                            resetForm();
                            setSubmitting(false);
                            setIsVerified(false);

                            if (typeof window !== `undefined`) { 
                                window.grecaptcha.reset();
                            }
                        }, (err) => {
                            notifyUnsuccess();
                            setSubmitting(false);
                            setIsVerified(false);

                            if (typeof window !== `undefined`) { 
                                window.grecaptcha.reset();
                            }
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

                        <Recaptcha
                            sitekey="6LcbtKIZAAAAACum3fqGKNH7m-NpS2T_CTprT-m7"
                            render="explicit"
                            verifyCallback={ verifyCallback }
                            onloadCallback={ recaptchaLoaded } />

                        <button type="submit" disabled={ isSubmitting }>Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};