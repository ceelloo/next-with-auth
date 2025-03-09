import { InputHTMLAttributes } from "react"
import { Input } from "./ui/input"

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string | string[] | undefined
}

export const FormInput = ({ label, error, ...props }: FormInputProps) => {
  return (
    <div className="space-y-1">
      {label && <h1>{label}</h1>}
      <Input {...props} />
      {error && <p className="text-destructive">{error}</p>}
    </div>
  )
}