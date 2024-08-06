export interface FormValues {
  name: string
  country: string
  address: string
}

export interface SomeFormProps {
  onSubmit: (values: FormValues) => void
}
