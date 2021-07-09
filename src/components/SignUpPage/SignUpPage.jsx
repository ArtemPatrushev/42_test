import { useState } from 'react';
import { Formik } from 'formik';

import styles from './SignUpPage.module.scss';

export const SignUpPage = ({ signUp }) => {
    
    // TO DO: throw isAuth and replace useState with it
    let [registered, changePage] = useState(false);

    return (
        <div className={styles.loginPage}>
            {registered
                ? <p>Log in</p>
                : <p>Sign up</p>}
            <Formik
                initialValues={{ email: '', password: '', password_confirmation: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log('here');
                    signUp(values);
                    // loginThC(values);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}>
                        <div className={styles.form__input}>
                            <p>Username</p>
                            <input
                                className={styles.form__input__item}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                        </div>
                        <div className={styles.form__input}>
                            <p>Password</p>
                            <input
                                className={styles.form__input__item}
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                        </div>
                        {!registered 
                            && <div className={styles.form__input}>
                            <p>Password</p>
                            <input
                                className={styles.form__input__item}
                                type="password"
                                name="password_confirmation"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password_confirmation}
                            />
                            {errors.password_confirmation && touched.password_confirmation && errors.password_confirmation}
                        </div>}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={styles.form__button}>
                            Submit
                        </button>
                        {registered
                            ? <button className={styles.form__signUpButton} type='button' onClick={() => changePage(false)}>Sign up</button>
                            : <button className={styles.form__signUpButton} type='button' onClick={() => changePage(true)}>Log in</button>}
                    </form>
                )}
            </Formik>
        </div>
    )
};
