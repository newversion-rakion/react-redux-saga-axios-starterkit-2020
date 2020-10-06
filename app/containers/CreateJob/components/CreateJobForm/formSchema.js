import * as yup from 'yup';

const formSchema = yup.object().shape({
  job_title: yup.string().required('Job title is required'),
  description: yup.string().required('Description is required'),
  job_profession: yup.string().required('Profession is required'),
  job_budget: yup.string().required('Role Budget is required'),
});

export default formSchema;
