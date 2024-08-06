import { useField } from 'formik'
import { forwardRef } from 'react'

import MTextField from '@mui/material/TextField'
import { Box, CircularProgress, Typography } from '@mui/material'
import { TextFieldWithSizeIndicatorProps } from './types'
import { useTextFieldState } from './hooks'
import { getProgressColor } from './utilities'

const TextFieldWithSizeIndicator = forwardRef<HTMLInputElement, TextFieldWithSizeIndicatorProps>(
  function TextField ({ name, max, sizeOption, ...props }, ref) {
    const [field, meta] = useField(name)
    const {
      progress,
      remaining,
      status
    } = useTextFieldState({ name, max, sizeOption })

    return (
      <MTextField
        {...field}
        {...props}
        value={field.value ?? ''}
        inputRef={ref}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
        InputProps={{
          endAdornment: (
            <Box sx={{ position: 'relative' }}>
              {status !== 'empty' && (
                <CircularProgress
                  sx={{
                    position: 'absolute',
                    display: 'block',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    color: theme => theme.palette.text.disabled
                  }}
                  variant="determinate" value={100} />
              )}
              <CircularProgress
                sx={{
                  position: 'relative',
                  display: 'block'
                }}
                color={getProgressColor(status)}
                variant="determinate"
                value={progress} />
              {(status === 'warning' || status === 'error') && (
                <Box sx={{
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}>
                  <Typography
                    variant="caption"
                    color={status === 'warning' ? 'warning' : 'error'}
                    sx={{
                      lineHeight: 1,
                    }}>
                    {remaining}
                  </Typography>
                </Box>
              )}

            </Box>
          )
        }}
      />
    )
  }
)

export default TextFieldWithSizeIndicator
