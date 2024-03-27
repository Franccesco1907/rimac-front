import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../common/redux/userSlice";
import { Checkbox } from '../../ui/components/Checkbox/index';

type Inputs = {
  toMe: boolean;
  toSomeoneElse: boolean;
}

export const PlanPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.user)
  const { control, getValues, setValue, watch } = useForm<Inputs>()
  const [showOptions, setShowOptions] = useState(false)
  const [plans, setPlans] = useState([])

  useEffect(() => {
    getUserData()
    getPlanData()
  }, [])

  useEffect(() => {
    if (getValues('toMe')) {
      setValue('toSomeoneElse', false)
      setShowOptions(true)
    } else if (!getValues('toSomeoneElse')) {
      setShowOptions(false)
    }
  }, [watch('toMe')])

  useEffect(() => {
    if (getValues('toSomeoneElse')) {
      setValue('toMe', false)
      setShowOptions(true)
    } else if (!getValues('toMe')) {
      setShowOptions(false)
    }
  }, [watch('toSomeoneElse')])

  const getUserData = () => {
    fetch('https://rimac-front-end-challenge.netlify.app/api/user.json')
      .then((response) => response.json())
      .then((data) => dispatch(updateUser(data)))
  }

  const getPlanData = () => {
    fetch('https://rimac-front-end-challenge.netlify.app/api/plans.json')
      .then((response) => response.json())
      .then((data) => setPlans(data))
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[28px] lg:text-[40px] font-bold">
          {user.name}, ¿para quién deseas cotizar?
        </h1>
        <p className="text-[16px] mb-4">Selecciona la opción que se ajuste más a tus necesidades</p>
        <div
          className="lg:grid lg:grid-cols-2 lg:space-y-0 space-y-4 gap-4"
        >
          <div className="max-w-80 lg:max-w-60 lg:h-48 bg-white rounded-xl shadow-md overflow-hidden py-8 px-4 flex">
            <div className="flex flex-col">
              <img
                src="images/IcProtectionLight.svg"
                alt="Para mí - Imagen de protección"
                width={32}
                height={32}
                className="max-w-none"
              />
              <h2 className="text-[20px] font-bold">Para mí</h2>
              <p className="text-[12px] mt-2">Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
            </div>
            <div>
              <Controller
                name="toMe"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    type="rounded"
                    textColor="text-green-500"
                  />
                )}
              />
            </div>
          </div>
          <div className="max-w-80 lg:max-w-60 lg:h-48 bg-white rounded-xl shadow-md overflow-hidden py-8 px-4 flex">
            <div className="flex flex-col">
              <img
                src="images/IcAddUserLight.svg"
                alt="Para mí - Imagen de protección"
                width={32}
                height={32}
                className="max-w-none"
              />
              <h2 className="text-[20px] font-bold">Para alguien más</h2>
              <p className="text-[12px] mt-2">Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
            </div>
            <div>
              <Controller
                name="toSomeoneElse"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    type="rounded"
                    textColor="text-green-500"
                  />
                )}
              />
            </div>
          </div>
        </div>
        {
          showOptions && (
            <p>{JSON.stringify(plans)}</p>
          )
        }
      </div>
    </>

  )
}