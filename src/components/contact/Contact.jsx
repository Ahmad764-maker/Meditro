import "./contact.css";
import Lottie from "lottie-react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import conatctAnimatiom from "../../../public/animation/contact.json";
import doneAnimation from "../../../public/animation/doneAnimation.json";
// import { Formik, Field } from "formik";
import * as Yup from "yup";
export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("This feild is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("This feild is required"),
    phoneNumber: Yup.number()
      .min(2, "Too Short!")

      .required("This feild is required"),
    address: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("This feild is required"),
    message: Yup.string()
      .min(5, "Too Short!")
      .required("This feild is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: () => {
      // alert(JSON.stringify(values, null, 2));
      setSuccessMessage("Successfully");
    },
  });
  return (
    <div id="contact" className="contact">
      <div className="container">
        <img className="circ" src="/imgs/download.png" alt="" />
        <h5>Contact Us</h5>
        <div className="row ">
          <div className="left  col-lg-6 col-md-6 col-sm-12">
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  isInvalid={formik.errors.name && formik.touched.name}
                  isValid={!formik.errors.name && formik.touched.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.name};
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.errors.email && formik.touched.email}
                  isValid={!formik.errors.email && formik.touched.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email};
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  isInvalid={
                    formik.errors.phoneNumber && formik.touched.phoneNumber
                  }
                  isValid={
                    !formik.errors.phoneNumber && formik.touched.phoneNumber
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.phoneNumber};
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  isInvalid={formik.errors.address && formik.touched.address}
                  isValid={!formik.errors.address && formik.touched.address}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.address}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  type="text"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  isInvalid={formik.touched.message && formik.errors.message}
                  isValid={!formik.errors.message && formik.touched.message}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.message};
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>

              <button type="submit" className="submit">
                Submit
              </button>
              {successMessage && (
                <div className="success">
                  <p>{successMessage}</p>
                  <Lottie
                    loop={false}
                    style={{ height: 50 }}
                    animationData={doneAnimation}
                  />
                </div>
              )}
            </Form>
          </div>
          <div className="right  col-lg-6 col-md-6 col-sm-12">
            <Lottie className="lottie" animationData={conatctAnimatiom} />
          </div>
        </div>
      </div>
    </div>
  );
}
