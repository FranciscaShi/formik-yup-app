import "./index";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "./components/Button";
import Input from "./components/Input";
import InputLabel from "./components/InputLabel";

function App() {
  return (
    <div className="app">
      <h1>Formulario Básico</h1>

      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(3, "Nombre debe tener más de 2 caracteres")
            .required("Nombre es obligatorio"),
          email: Yup.string()
            .email("Correo electrónico inválido")
            .required("Email es obligatorio"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <InputLabel
                htmlFor="name"
                style={{ display: "block" }}
                text="Nombre"
              />

              <Input
                id="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}

              <InputLabel
                htmlFor="email"
                style={{ display: "block" }}
                text="Correo"
              />

              <Input
                id="email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <Button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
                text="Limpiar"
              />

              <Button type="submit" disabled={!dirty||isSubmitting} text="Inscribir" />
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
