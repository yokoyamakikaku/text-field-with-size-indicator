import { ThemeProvider } from "@mui/material"
import { theme } from "./theme"
import SomeForm from "./components/SomeForm"

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <SomeForm onSubmit={values => {
        const message = [
          `氏名: ${values.name}`,
          `国: ${values.country}`,
          `住所: ${values.address}`
        ].join('\n')
        window.alert(message)
      }} />
    </ThemeProvider>
  )
}
