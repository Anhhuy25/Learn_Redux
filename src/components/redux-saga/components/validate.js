const validate = (values) => {
  const { title, description } = values;
  const errors = {};
  if (!title) {
    errors.title = "Please enter title";
  } else if (title.length < 6) {
    errors.title = "Must be 6 characters or more";
  }

  if (!description) {
    errors.description = "Please enter description";
  }
  return errors;
};

export default validate;
