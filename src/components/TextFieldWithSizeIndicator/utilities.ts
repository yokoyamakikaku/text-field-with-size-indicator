import { WARNING_STATUS_RATE } from "./constants"
import { TextFieldWithSizeIndicatorState } from "./types"

import { type CircularProgressProps } from "@mui/material"

export function getStatus (current: number, max: number) {
  if (current === 0) return 'empty'
  if (current < max * WARNING_STATUS_RATE) return 'safe'
  if (current <= max) return 'warning'
  return 'error'
}

export function getProgressColor (status: TextFieldWithSizeIndicatorState['status']): CircularProgressProps['color'] {
  switch (status) {
    case 'empty':
      return 'inherit'
    case 'safe':
      return 'primary'
    case 'warning':
      return 'warning'
    case 'error':
      return 'error'
  }
}
