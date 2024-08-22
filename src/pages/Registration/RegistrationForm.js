import React, { useState, useEffect } from "react";
import styles from "./RegistrationForm.module.scss";
import FormGroup from "../../components/InputField/InputField";
import FormHeader from "../../components/FormHeader/FormHeader";

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

  useEffect(() => {
    const savedData = localStorage.getItem("registrationData");
    if (savedData) {
      alert("Form already submitted.");
      setIsSubmitted(true);
    }
  }, []);

  const validateForm = () => {
    const newErrors = { name: "", company: "", email: "" };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is not valid";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      localStorage.setItem("registrationData", JSON.stringify(formData));
      setIsSubmitted(true);
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className={styles.registrationSection}>
      <form className={styles.registrationForm} onSubmit={handleSubmit}>
        <FormHeader
          title="Registration"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
        />
        <div className={styles.formInputFields}>
          <FormGroup
            label="Name"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(event) => handleChange(event)}
            error={errors.name}
            required
          />

          <FormGroup
            label="Company"
            id="company"
            type="text"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={(event) => handleChange(event)}
            error={errors.company}
          />

          <FormGroup
            label="Email address"
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(event) => handleChange(event)}
            error={errors.email}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
    </section>
  );
};

export default RegistrationForm;
