import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Background, Button, Checkbox, Footer, Header, Input, Select, Tag } from "../../ui";
import { useDispatch } from 'react-redux';
import { registerUser } from '../../common/redux/userSlice';

type Inputs = {
  documentType: string
  document: string
  phone: string
  privacyPolicy: boolean
  comunicationPolicy: boolean
}

export const HomePage = () => {
  const navigate = useNavigate()
  const { register, formState: { errors, isValid }, handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      documentType: 'dni',
      document: '',
      phone: '',
      privacyPolicy: false,
      comunicationPolicy: false
    }
  })
  const dispatch = useDispatch()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!isValid) return
    dispatch(registerUser(data))
    navigate('/plans')
  }

  const OPTIONS = [
    { value: 'dni', label: 'DNI' },
    { value: 'ce', label: 'CE' },
    { value: 'passport', label: 'Pasaporte' },
  ];

  return (
    <div className="relative p-0 m-0 ">
      <Header />
      <Background />
      <div className="container mx-auto px-6 pt-4 pb-16 relative z-20">
        <div className="flex flex-col lg:flex-row lg:space-x-6 h-full">
          <div className="w-full lg:w-1/2 h-full hidden lg:flex">
            <div className="w-full h-full relative m-auto">
              <img
                src="images/home-family.png"
                alt="Family Rimac"
                className="w-full max-w-[480px]"
                // layout="fixed"
                width={480}
                height={560}
              />
            </div>
          </div>
          <div className="max-w-[350px] m-auto lg:w-1/2 mt-6 lg:mt-0">
            <div className="flex flex-row items-center justify-between">
              <div className="mr-2">
                <Tag
                  text="Seguro Salud Flexible"
                  className="font-bold text-sm py-1 lg:py-0 lg:text-base"
                />
                <h1 className="text-[32px] lg:text-[36px] mt-4 font-bold tracking-normal text-left leading-10">
                  Creado para ti y tu familia
                </h1>
              </div>
              <div className="w-[136px] lg:hidden">
                <img
                  src="images/home-family.png"
                  alt="Family Rimac"
                  width={136}
                  height={160}
                  // layout="fixed"
                  className="max-w-none"
                />
              </div>
            </div>
            <h4 className="font-bold mt-4 text-[15px]">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
              nuestra asesoría. 100% online.
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4 flex justify-between">
                <Select
                  {...register('documentType', { required: true })}
                  register={register}
                  selectStyle={{
                    borderTopRightRadius: '0',
                    borderBottomRightRadius: '0',
                  }}
                  options={OPTIONS}
                />
                <Input
                  {...register('document', { required: true, minLength: 8, maxLength: 12 })}
                  register={register}
                  label="Nro. de documento"
                  type="number"
                  minLength={8}
                  maxLength={12}
                  inputStyle={{
                    borderTopLeftRadius: '0',
                    borderBottomLeftRadius: '0',
                  }}
                />
              </div>
              {errors.document?.type === 'required' && <span className="text-red-500">El número de documento es requerido</span>}
              {(errors.document?.type === 'minLength' || errors.document?.type === 'maxLength') && <span className="text-red-500">El número de documento tiene que tener entre 8 y 12 caracteres</span>}
              <div className="mt-4">
                <Input
                  {...register('phone', { required: true, minLength: 9, maxLength: 9, min: 900000000, max: 999999999 })}
                  register={register}
                  label="Celular" type="number" />
              </div>
              {errors.phone?.type === 'required' && <span className="text-red-500">El celular es requerido</span>}
              {(errors.phone?.type === 'minLength' || errors.phone?.type === 'maxLength') && <span className="text-red-500">El celular tiene que tener 9 caracteres</span>}
              {(errors.phone?.type === 'min' || errors.phone?.type === 'max') && <span className="text-red-500">El celular tiene que ser válido</span>}
              <div className="mt-4">
                <Controller
                  name="privacyPolicy"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) =>
                    <Checkbox
                      {...field}
                      textColor='text-black'
                      text="Acepto lo Política de Privacidad"
                    />}
                />

              </div>
              {errors.privacyPolicy && <span className="text-red-500">Debes aceptar la política de privacidad</span>}

              <div className="mt-1">
                <Controller
                  name="comunicationPolicy"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) =>
                    <Checkbox
                      {...field}
                      textColor='text-black'
                      text="Acepto la Política Comunicaciones Comerciales"
                    />}
                />
              </div>
              {errors.comunicationPolicy && <span className="text-red-500">Debes aceptar la política de comunicaciones comerciales</span>}
              <div>
                <p className="underline font-bold text-sm mt-2">
                  <a href="#"> Aplican términos y condiciones</a>
                </p>
              </div>

              <Button
                className="text-[20px] mt-6 w-full lg:w-[190px]"
                variant="secondary"
                type="submit"
              >
                Cotiza aquí
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};