import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./RegistrationForm.module.scss";
import FormGroup from "../../components/InputField/InputField";
import FormHeader from "../../components/FormHeader/FormHeader";
import Alert from "../../components/Alert/Alert";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    company: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("registrationData");
    if (savedData) {
      const data = JSON.parse(savedData);
      if (data.length > 0) {
        setIsSubmitted(true);
      }
    }
  }, []);

  const validateForm = () => {
    const newErrors = { name: "", company: "", email: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is not valid";
      isValid = false;
    } else if (checkDuplicateEmail(formData.email)) {
      newErrors.email = "Email is already registered";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const checkDuplicateEmail = (email) => {
    const existingData = localStorage.getItem("registrationData");
    if (existingData) {
      const data = JSON.parse(existingData);
      return data.some((entry) => entry.email === email);
    }
    return false;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const existingData = localStorage.getItem("registrationData");
      const data = existingData ? JSON.parse(existingData) : [];
      data.push(formData);
      localStorage.setItem("registrationData", JSON.stringify(data));
      setIsSubmitted(true);
      setAlertTitle("Registration");
      setAlertMessage(
        `Hi ${formData.name}, thanks for registering. Somebody will contact you soon.`
      );
      setAlertVisible(true);
      setFormData({
        name: "",
        company: "",
        email: "",
      });
    }
  };

  const handleCloseAlert = () => {
    setAlertVisible(false);
  };

  return (
    <section className={styles.registrationSection} data-testid="registration-form">
      <form className={styles.registrationForm} onSubmit={handleSubmit}>
        <FormHeader
          title="Registration"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
        />
        <div className={styles.formInputFields}>
          <FormGroup
            label="Name"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
          />

          <FormGroup
            label="Company"
            id="company"
            name="company"
            type="text"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
          />

          <FormGroup
            label="Email address"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>

      {alertVisible && (
        <Alert
          title={alertTitle}
          message={alertMessage}
          type="success"
          onDismiss={handleCloseAlert}
        />
      )}
    </section>
  );
};


export default RegistrationForm;
