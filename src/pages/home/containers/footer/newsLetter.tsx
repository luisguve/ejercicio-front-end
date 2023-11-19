import './form/styles/form.scss'
import useFormNewsLetter from './form/hooks/useForm'
function FormNewsLetter() {
  const { handleSubmit, onSubmit, register, errors, isValid } =
    useFormNewsLetter()

  return (
    <div className="form" style={{ padding: '91px 0px' }}>
      <h2 className="form__title">Contactanos</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form__container">
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            alignItems: 'center',
            display: 'flex',
            gap: '64.14px',
            flexDirection: 'column',
          }}
        >
          <div className="form__grid">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                className={errors.firstname ? 'input--error' : ''}
                type="text"
                {...register('firstname')}
                placeholder="Nombre"
              />
              {errors.firstname && (
                <span
                  className="helper__error"
                  role="alert"
                  style={{ fontSize: '12px' }}
                >
                  {errors.firstname?.message}
                </span>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                className={errors.lastname ? 'input--error' : ''}
                type="text"
                {...register('lastname')}
                placeholder="Apellido"
              />
              {errors.lastname && (
                <span
                  className="helper__error"
                  role="alert"
                  style={{ fontSize: '12px' }}
                >
                  {errors.lastname?.message}
                </span>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                className={errors.email ? 'input--error' : ''}
                type="email"
                {...register('email')}
                placeholder="Email"
              />
              {errors.email && (
                <span
                  className="helper__error"
                  role="alert"
                  style={{ fontSize: '12px' }}
                >
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                className={errors.phone ? 'input--error' : ''}
                type="text"
                {...register('phone')}
                placeholder="Teléfono"
              />
              {errors.phone && (
                <span
                  className="helper__error"
                  role="alert"
                  style={{ fontSize: '12px' }}
                >
                  {errors.phone?.message}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={!isValid ? 'button--disabled' : 'button'}
            disabled={!isValid}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormNewsLetter
