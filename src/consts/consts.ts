export const VALIDATION_RULES = {
  name: {
    required: 'Name is required',
    minLength: { value: 2, message: 'Name should be at least 2 characters' },
    maxLength: { value: 60, message: 'Name should be at most 60 characters' },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  },
  phone: {
    required: 'Phone is required',
    pattern: {
      value: /(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/,
      message: 'Phone should match format: +38 (XXX) XXX XX XX',
    },
  },
  position: {
    required: 'Position is required',
  },
};

export const INITIAL_POSITIONS = [
  { id: 1, name: 'Frontend developer' },
  { id: 2, name: 'Backend developer' },
  { id: 3, name: 'Designer' },
  { id: 4, name: 'QA' },
];