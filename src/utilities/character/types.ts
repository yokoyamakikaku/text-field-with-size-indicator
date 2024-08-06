export type SizeType = 'char' | 'byte'

export type Encoding = 'utf8' | 'sjis'

export type GetSizeAsCharOption = { type: Extract<SizeType, 'char'> }

export type GetSizeAsByteOption = { type: Extract<SizeType, 'byte'>, encoding?: Encoding }

export type GetSizeOption = GetSizeAsCharOption | GetSizeAsByteOption
