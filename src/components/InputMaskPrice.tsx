import { InputHTMLAttributes, useCallback, useContext, useState } from 'react'
import FormContext from '../contexts/register-plant/form-context'

type Props = InputHTMLAttributes<HTMLInputElement>

export default function InputMaskPrice(props: Props) {
  const { newProduct, setNewProduct, validation } = useContext(FormContext)
  const [error, setError] = useState<string | null | boolean>(false)
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      let value = e.currentTarget.value
      value = value.replace(/\D/g, '')
      value = value.replace(/(\d)(\d{2})$/, '$1,$2')
      value = '$' + value.replace(/(?=(\d{3})+(\D))\B/g, '.')
      e.currentTarget.value = value
    },
    []
  )
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const newProductPropName = event.target.name
    const newProductValueToProp = event.target.value
    setNewProduct({
      ...newProduct,
      [newProductPropName]: newProductValueToProp,
    })
  }
  function validateField(event: React.FocusEvent<HTMLInputElement>) {
    const fieldName = event.target.name
    const fieldValue = event.target.value
    const error = validation.validate(fieldName, fieldValue)
    setError(error)
  }
  return (
    <>
      <input
        onKeyUp={handleKeyUp}
        {...props}
        className={`${props.className}  ${
          error === false
            ? ''
            : error === null
            ? 'border-green-400'
            : 'border-red-400'
        }`}
        onChange={handleChange}
        onBlur={validateField}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </>
  )
}
