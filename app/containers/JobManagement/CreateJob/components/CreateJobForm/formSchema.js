import * as yup from 'yup';

const formSchema = yup.object().shape({
  title: yup.string().required('Job title is required'),
  description: yup.string().required('Description is required'),
  profession: yup.object().required('Role Profession is required'),
  compensation: yup.string().required('Role Budget is required'),
});

export default formSchema;
