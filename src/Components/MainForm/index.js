import { React } from "react";
import { Box, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

import { StyledButton } from "../StyledForm/FormButton";

const validationSchema = yup.object({
   firstName: yup.string().required("First name is required."),
   email: yup
      .string()
      .email("Enter a valid email.")
      .required("Email is required."),
   password: yup.string().required("Password is required."),
});

const MainForm = () => {
   const formik = useFormik({
      initialValues: {
         firstName: "",
         email: "",
         password: "",
      },
      onSubmit: (values) => {
         setTimeout(() => {console.log(JSON.stringify(values))}, 5000);
      },
      validationSchema: validationSchema,
   });

   return (
      <>
         <form onSubmit={formik.handleSubmit}>
            <TextField
               name="firstName"
               type="firstName"
               variant="outlined"
               color="primary"
               label="Name"
               value={formik.values.firstName}
               onChange={formik.handleChange}
               error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
               }
               helperText={formik.touched.firstName && formik.errors.firstName}
               fullWidth
            />
            <Box height={14} />
            <TextField
               name="email"
               type="email"
               variant="outlined"
               color="primary"
               label="Email Address"
               value={formik.values.email}
               onChange={formik.handleChange}
               error={formik.touched.email && Boolean(formik.errors.email)}
               helperText={formik.touched.email && formik.errors.email}
               fullWidth
            />
            <Box height={14} />
            <TextField
               name="password"
               type="password"
               variant="outlined"
               color="primary"
               label="Password"
               value={formik.values.password}
               onChange={formik.handleChange}
               error={
                  formik.touched.password && Boolean(formik.errors.password)
               }
               helperText={formik.touched.password && formik.errors.password}
               fullWidth
            />
            <Box height={30} />
            <StyledButton />
         </form>
      </>
   );
};

export default MainForm;