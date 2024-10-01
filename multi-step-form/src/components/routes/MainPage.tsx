import FormStepsSection from "../FormStepsSection";
import FormInfoSection from "../FormInfoSection";
import SubmitButton from "../buttons/FormButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update the form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error if the field now has a value
    if (value.trim() !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      phone: formData.phone.trim() === "",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      navigate("/select-plan"); // Navigate only when there are no errors
    }
  };

  return (
    <>
      <FormStepsSection />
      <FormInfoSection
        formHeader="Personal Info"
        formInfo="Please provide your name, email address, and phone number."
      >
        <section className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Stephen King"
                onChange={handleChange}
                value={formData.name}
              />
              {errors.name && (
                <p style={{ color: "var(--strawberry-red)" }}>
                  This Field Is Required
                </p>
              )}
            </div>

            <div className="input-wrapper">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                placeholder="e.g. Stephenking@lorem.com"
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && (
                <p style={{ color: "var(--strawberry-red)" }}>
                  This Field Is Required
                </p>
              )}
            </div>

            <div className="input-wrapper">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="e.g. +1 234 567 890"
                onChange={handleChange}
                value={formData.phone}
              />
              {errors.phone && (
                <p style={{ color: "var(--strawberry-red)" }}>
                  This Field Is Required
                </p>
              )}
            </div>

            <SubmitButton />
          </form>
        </section>
      </FormInfoSection>
    </>
  );
}
