import React, { useState, useEffect } from 'react';
import { GraduationCap, CheckCircle, RefreshCw, Loader2 } from 'lucide-react';
import styles from './Form.module.css';

import { validateField } from '../../utils/formValidation';
import { classOptions, relationshipOptions } from '../../constants/formOptions';

interface FormData {
  firstName: string;
  lastName: string;
  otherNames: string;
  classApplying: string;
  dateOfBirth: string;
  guardianName: string;
  guardianRelationship: string;
  guardianPhone: string;
  guardianEmail: string;
}

interface FormErrors {
  [key: string]: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    otherNames: '',
    classApplying: '',
    dateOfBirth: '',
    guardianName: '',
    guardianRelationship: '',
    guardianPhone: '',
    guardianEmail: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const requiredFields = [
    'firstName', 'lastName', 'classApplying', 'dateOfBirth',
    'guardianName', 'guardianRelationship', 'guardianPhone', 'guardianEmail'
  ];

  useEffect(() => {
    const filledFields = requiredFields.filter(field => 
      formData[field as keyof FormData]?.trim() !== ''
    );
    const newProgress = Math.round((filledFields.length / requiredFields.length) * 100);
    setProgress(newProgress);
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    requiredFields.forEach(field => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        setShowSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          otherNames: '',
          classApplying: '',
          dateOfBirth: '',
          guardianName: '',
          guardianRelationship: '',
          guardianPhone: '',
          guardianEmail: ''
        });
        setErrors({});

        setTimeout(() => setShowSuccess(false), 5000);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      otherNames: '',
      classApplying: '',
      dateOfBirth: '',
      guardianName: '',
      guardianRelationship: '',
      guardianPhone: '',
      guardianEmail: ''
    });
    setErrors({});
    setShowSuccess(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Begin your journey to academic excellence. Complete the form below to apply for admission.</p>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <div className={styles.formTitle}>
            <div className={styles.formIcon}><GraduationCap size={24} /></div>
           Application Form
          </div>
          <p className={styles.formSubtitle}>Please fill out all required fields to complete your application</p>

          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div>
            <div className={styles.progressText}>Application Progress: <span>{progress}%</span></div>
          </div>

          {showSuccess && (
            <div className={styles.successMessage}>
              <CheckCircle size={24} />
              Application submitted successfully! We'll contact you within 2-3 business days.
            </div>
          )}

            <form onSubmit={handleSubmit} noValidate>
            {/* Student Information Section */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Student Information</h2>
              
              <div className={`${styles.formGrid} ${styles.formGrid3}`}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="firstName">
                    First Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`${styles.formInput} ${errors.firstName ? styles.error : ''}`}
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                  {errors.firstName && (
                    <div className={styles.errorMessage}>{errors.firstName}</div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="lastName">
                    Last Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`${styles.formInput} ${errors.lastName ? styles.error : ''}`}
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                  {errors.lastName && (
                    <div className={styles.errorMessage}>{errors.lastName}</div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="otherNames">
                    Other Names
                  </label>
                  <input
                    type="text"
                    id="otherNames"
                    name="otherNames"
                    className={styles.formInput}
                    placeholder="Enter other names (optional)"
                    value={formData.otherNames}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={`${styles.formGrid} ${styles.formGrid2}`} style={{ marginTop: '1.5rem' }}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="classApplying">
                    Class Applying For <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="classApplying"
                    name="classApplying"
                    className={`${styles.formSelect} ${errors.classApplying ? styles.error : ''}`}
                    value={formData.classApplying}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  >
                    {classOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.classApplying && (
                    <div className={styles.errorMessage}>{errors.classApplying}</div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="dateOfBirth">
                    Date of Birth <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    className={`${styles.formInput} ${errors.dateOfBirth ? styles.error : ''}`}
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                  {errors.dateOfBirth && (
                    <div className={styles.errorMessage}>{errors.dateOfBirth}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Guardian Information Section */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Guardian Information</h2>
              
              <div className={`${styles.formGrid} ${styles.formGrid2}`}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="guardianName">
                    Guardian Full Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="guardianName"
                    name="guardianName"
                    className={`${styles.formInput} ${errors.guardianName ? styles.error : ''}`}
                    placeholder="Enter guardian's full name"
                    value={formData.guardianName}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                  {errors.guardianName && (
                    <div className={styles.errorMessage}>{errors.guardianName}</div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="guardianRelationship">
                    Relationship to Student <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="guardianRelationship"
                    name="guardianRelationship"
                    className={`${styles.formSelect} ${errors.guardianRelationship ? styles.error : ''}`}
                    value={formData.guardianRelationship}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  >
                    {relationshipOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.guardianRelationship && (
                    <div className={styles.errorMessage}>{errors.guardianRelationship}</div>
                  )}
                </div>
              </div>

              <div className={`${styles.formGrid} ${styles.formGrid2}`} style={{ marginTop: '1.5rem' }}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="guardianPhone">
                    Guardian Contact Number <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="guardianPhone"
                    name="guardianPhone"
                    className={`${styles.formInput} ${errors.guardianPhone ? styles.error : ''}`}
                    placeholder="Enter phone number"
                    value={formData.guardianPhone}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                  {errors.guardianPhone && (
                    <div className={styles.errorMessage}>{errors.guardianPhone}</div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="guardianEmail">
                    Guardian Email Address <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="guardianEmail"
                    name="guardianEmail"
                    className={`${styles.formInput} ${errors.guardianEmail ? styles.error : ''}`}
                    placeholder="Enter email address"
                    value={formData.guardianEmail}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                  />
                  {errors.guardianEmail && (
                    <div className={styles.errorMessage}>{errors.guardianEmail}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className={styles.formActions}>
              <button type="button" className={`${styles.btn} ${styles.btnSecondary}`} onClick={handleReset} disabled={isSubmitting}>
                <RefreshCw size={20} /> Reset
              </button>
              <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={isSubmitting}>
                {isSubmitting ? <><Loader2 size={20} className={styles.spinner} /> Submitting...</> : <><CheckCircle size={20} /> Submit</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
