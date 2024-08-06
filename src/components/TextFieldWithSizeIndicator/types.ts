import { TextFieldProps } from "@mui/material"
import { GetSizeOption } from "../../utilities/character/types"

export type TextFieldWithSizeIndicatorState = {
  status: 'empty' | 'safe' | 'warning' | 'error'
  remaining: number
  progress: number
}

export type TextFieldWithSizeIndicatorProps = TextFieldProps & {
  name: string
  max: number
  sizeOption: GetSizeOption
}

export type StateOption = Pick<TextFieldWithSizeIndicatorProps, 'name' | 'max' | 'sizeOption'>
