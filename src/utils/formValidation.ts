export const validateField = (name: string, value: string): string => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;

  switch (name) {
    case 'firstName':
    case 'lastName':
    case 'guardianName':
      return !value.trim() ? `${name.replace(/([A-Z])/g, ' $1').toLowerCase()} is required` : '';

    case 'classApplying':
    case 'guardianRelationship':
      return !value ? 'Please select an option' : '';

    case 'dateOfBirth':
      return !value ? 'Date of birth is required' : '';

    case 'guardianPhone':
      if (!value.trim()) return 'Phone number is required';
      if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
      return '';

    case 'guardianEmail':
      if (!value.trim()) return 'Email address is required';
      if (!emailRegex.test(value)) return 'Please enter a valid email address';
      return '';

    default:
      return '';
  }
};
