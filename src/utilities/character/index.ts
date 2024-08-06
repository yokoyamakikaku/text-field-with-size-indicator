import Encoding from 'encoding-japanese'

import { GetSizeAsByteOption, GetSizeOption } from "./types"

function getSizeAsChar (value: string) {
  return value.length
}

function getSizeAsByte (value: string, options: GetSizeAsByteOption) {
  const encoding = options.encoding ?? 'utf-8'
  const unicodeArray = Encoding.stringToCode(value)
  switch (encoding) {
    case 'utf8': {
      const utf8Array = Encoding.convert(unicodeArray, {
        to: 'UTF8',
        from: 'UNICODE'
      });
      return utf8Array.length
    }
    case 'sjis': {
      const sjisArray = Encoding.convert(unicodeArray, {
        to: 'SJIS',
        from: 'UNICODE'
      });
      return sjisArray.length
    }
    default:
      throw new Error('Invalid encoding')
  }
}

export function getSize (value: string, options: GetSizeOption) {
  switch (options.type) {
    case 'char':
      return getSizeAsChar(value)
    case 'byte':
      return getSizeAsByte(value, options)
    default:
      throw new Error('Invalid type')
  }
}
