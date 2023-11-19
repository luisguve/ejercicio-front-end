import {
  EMAIL_FORMAT,
  REQUIRED_FIELD,
} from '@/pages/home/utils/messages/scheme'
import * as yup from 'yup'

export const SCHEME_FORM_NEWSLETTER = yup.object().shape({
  firstname: yup.string().required(REQUIRED_FIELD),
  lastname: yup.string().required(REQUIRED_FIELD),
  email: yup.string().email(EMAIL_FORMAT).required(REQUIRED_FIELD),
  phone: yup.string().required(REQUIRED_FIELD).typeError(REQUIRED_FIELD),
})
