/** @jsxImportSource theme-ui */
import {Box, Button, Grid, Input, Label} from "theme-ui";
import {peopleFiltersRootStyles, peopleFiltersSubmitStyles,} from "./PeopleFilters.styles";
import {PeopleFields} from "../../constants/PeopleFields";
import {camelPropToText} from "../../helpers/textTransform";

export interface PeopleFiltersProps {}

export const PeopleFilters = (props: PeopleFiltersProps) => {
  const fields = Object.values(PeopleFields);

  const generateInputFilter = (field: PeopleFields) => (
    <Box key={field}>
      <Label htmlFor={field}>{camelPropToText(field)}</Label>
      <Input name={field} id={field} mb={3} />
    </Box>
  );

  return (
    <Box
      as="form"
      sx={peopleFiltersRootStyles}
      onSubmit={(e) => e.preventDefault()}
    >
      <Grid gap={2} columns={4}>
        {fields.map((field: PeopleFields) => generateInputFilter(field))}
      </Grid>
      <Button sx={peopleFiltersSubmitStyles}>Submit</Button>
    </Box>
  );
};
