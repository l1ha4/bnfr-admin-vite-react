import type { FC, InputHTMLAttributes } from 'react'
import cl from './ColorPickerDefault.module.scss'

type ColorPickerDefaultProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  addClass?: string
}

const getDisplayColor = (
  value: InputHTMLAttributes<HTMLInputElement>['value'],
  defaultValue: InputHTMLAttributes<HTMLInputElement>['defaultValue'],
): string => {
  if (typeof value === 'string' && value.trim()) {
    return value
  }

  if (typeof defaultValue === 'string' && defaultValue.trim()) {
    return defaultValue
  }

  return '#5865f2'
}

const ColorPickerDefault: FC<ColorPickerDefaultProps> = ({
  addClass,
  value,
  defaultValue,
  ...props
}) => {
  const displayColor = getDisplayColor(value, defaultValue)

  return (
    <label className={`${cl.component} ${addClass || ''}`}>
      <input
        className={cl.nativeInput}
        type="color"
        value={value}
        defaultValue={defaultValue}
        {...props}
      />
      <span className={cl.value}>{displayColor.toUpperCase()}</span>
    </label>
  )
}

export default ColorPickerDefault
