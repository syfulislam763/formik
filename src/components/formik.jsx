import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import ReactSelect from './react-select';








const FormikForm = () => {

    const [newUser, setNewUser] = useState({});
    console.log(newUser);


   

  return <div>
    
    <Formik
      initialValues={{ email: "", username: "", password: "", options: []}}
      onSubmit={async values => {
        setNewUser(values)
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required("Required"),
        username: Yup.string().max(10).required("username required"),
        password: Yup.string().min(8).required("Required"),
        options: Yup.array()
        .min(3, 'Pick at least 3 tags')
        .of(
            Yup.object().shape({
            label: Yup.string().required("lavel required"),
            value: Yup.string().required("value required"),
            })
        ),
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          setFieldValue,
          setFieldTouched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        

        
        // console.log("values", values)
        console.log("touched", touched)
        // console.log("errors", errors)
        // console.log("dirty", dirty)
        // console.log("isSubmitting", isSubmitting)
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" style={{ display: "block" }}><strong>Username</strong></label>
            <input 
                id="username"
                placeholder="Enter username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
            />
            {errors.username && touched.username && (
              <div style={{color:"red"}}>{errors.username}</div>
            )}

            <label htmlFor="email" style={{ display: "block" }}>
              <strong>Email</strong>
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <div style={{color:"red"}}>{errors.email}</div>
            )}

            <label htmlFor="password" style={{ display: "block" }}><strong>Password</strong></label>
            <input 
                id="password"
                placeholder="Enter username"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
            />
            {errors.password && touched.password && (
              <div style={{color:"red"}}>{errors.password}</div>
            )}

            
            <ReactSelect
                value={values.options}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.options}
                touched={touched.options}
            /> 


            <br/>
            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

    
          </form>
        );
      }}
    </Formik>

  </div>
};


export default FormikForm;