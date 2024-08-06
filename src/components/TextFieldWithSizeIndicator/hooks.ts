import { useField } from "formik";
import { StateOption, TextFieldWithSizeIndicatorState } from "./types";
import { useMemo } from "react";
import { getSize } from "../../utilities/character";
import { getStatus } from "./utilities";

export function useTextFieldState (option: StateOption): TextFieldWithSizeIndicatorState {
  const { name, max, sizeOption } = option
  const [{ value }] = useField(name)
  return useMemo(() => {
    const size = getSize(value, sizeOption)
    const status = getStatus(size, max)
    const progressValue = size / max * 100
    const progress = Math.max(0, Math.min(100, progressValue))
    const remaining = max - size
    return { status, remaining, progress }
  }, [value, sizeOption, max])
}
