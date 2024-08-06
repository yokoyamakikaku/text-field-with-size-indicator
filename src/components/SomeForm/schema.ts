import * as yup from 'yup'
import { FormValues } from './types'
import { getSize } from '../../utilities/character'
import { GetSizeOption } from '../../utilities/character/types'

export function createSizeTester (max: number, option: GetSizeOption) {
  return function test (value: string) {
    return getSize(value, option) <= max
  }
}

export const validationSchema: yup.ObjectSchema<FormValues> = yup.object({
  name: yup.string()
    .required()
    .test(
      'data-size',
      '長すぎます',
      createSizeTester(24, { type: 'byte', encoding: 'sjis' })
    ),
  country: yup.string()
    .required()
    .test(
      'data-size',
      '長すぎます',
      createSizeTester(24, { type: 'byte', encoding: 'utf8' })
    ),
  address: yup.string()
    .required()
    .test(
      'data-size',
      '長すぎます',
      createSizeTester(24, { type: 'char' })
    )
})
