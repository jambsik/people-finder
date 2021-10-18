/** @jsxImportSource theme-ui */
import { Box, Button, Grid, Input, Label } from "theme-ui";
import { Field, Form, Formik } from "formik";

import {
  peopleFiltersRootStyles,
  peopleFiltersSubmitStyles,
} from "./PeopleFilters.styles";
import { camelPropToText } from "../../helpers/textTransform";
import { ApiResponseMetadata } from "../../Models/ApiResponse";
import { peopleFiltersInitialValues } from "./peopleFiltersHelper";
import { FieldInputProps } from "formik/dist/types";

export interface PeopleFiltersProps {
  metadata: ApiResponseMetadata;
  onSubmit: (values: { [key: string]: any }) => void;
}

export const PeopleFilters = ({ metadata, onSubmit }: PeopleFiltersProps) => {
  const filterKeys = Object.keys(metadata.filters);
  const generateInputFilter = (field: string, type: string) => (
    <Box key={field}>
      <Label htmlFor={field}>{camelPropToText(field)}</Label>
      <Field name={field}>
        {({ field }: { field: FieldInputProps<any> }) => (
          <Input mb={3} type={type} {...field} />
        )}
      </Field>
    </Box>
  );

  return (
    <Box sx={peopleFiltersRootStyles}>
      <Formik initialValues={peopleFiltersInitialValues} onSubmit={onSubmit}>
        {({ isSubmitting }: { isSubmitting: boolean }) => (
          <Form>
            <Grid gap={2} columns={4}>
              {filterKeys &&
                filterKeys.map((field: string) =>
                  generateInputFilter(field, metadata.filters[field].type)
                )}
            </Grid>
            <Button
              sx={peopleFiltersSubmitStyles}
              type="submit"
              disabled={isSubmitting}
            >
              Apply filters
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
