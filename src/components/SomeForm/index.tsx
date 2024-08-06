import { Box, Button, Container, Stack } from "@mui/material";
import { Form, Formik } from "formik";

import { initialValues } from "./constants";
import { validationSchema } from "./schema";
import { FormValues, SomeFormProps } from "./types";
import TextFieldWithDataSize from "../TextFieldWithSizeIndicator";

export default function SomeForm (props: SomeFormProps) {
  return (
    <Container maxWidth="sm" sx={{ py: 12 }}>
      <Formik<FormValues>
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={props.onSubmit}>
        <Form>
          <Stack spacing={2}>
            <TextFieldWithDataSize
              label="氏名 (Sift-JISでのバイト数)"
              name="name" max={24}
              sizeOption={{ type: 'byte', encoding: 'sjis' }} />
            <TextFieldWithDataSize
              label="国 (UTF-8でのバイト数)"
              name="country" max={24}
              sizeOption={{ type: 'byte', encoding: 'utf8' }} />
            <TextFieldWithDataSize
              label="住所(文字数)"
              name="address" max={24}
              sizeOption={{ type: 'char' }} />
            <Box>
              <Button type="submit" variant="contained">
                保存
              </Button>
            </Box>
          </Stack>
        </Form>
      </Formik>
    </Container>
  )
}
