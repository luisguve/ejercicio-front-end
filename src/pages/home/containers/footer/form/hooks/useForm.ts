import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SCHEME_FORM_NEWSLETTER } from '../const/scheme'
import { useEffect, useState } from 'react'
import { articleServices } from '@/services/articles'
import { IForm } from '@/interfaces/articles'

export default function useFormNewsLetter() {
  const [isFetch, setIsFetch] = useState(true)
  const {
    register,
    watch,
    trigger,
    getFieldState,
    getValues,
    setError,
    setValue,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<IForm>({
    resolver: yupResolver(SCHEME_FORM_NEWSLETTER),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    },
  })

  useEffect(() => {
    const subscription = watch(() =>
      trigger(['firstname', 'lastname', 'phone', 'email']),
    )
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit: SubmitHandler<IForm> = (data: IForm) => {
    articleServices
      .POST_NEWSLETTER(data)
      .then(() => {
        alert('La data se envió correctamente')
        setIsFetch(false)
      })
      .catch(() => {
        alert('Ha ocurrido un error')
        setIsFetch(false)
      })
  }

  const onError: SubmitHandler<any> = () => {
    alert('Revisa el formulario')
  }

  return {
    watch,
    register,
    getValues,
    setError,
    setValue,
    handleSubmit,
    errors,
    getFieldState,
    onSubmit,
    trigger,
    onError,
    isValid,
    isDirty,
    isFetch,
  }
}
