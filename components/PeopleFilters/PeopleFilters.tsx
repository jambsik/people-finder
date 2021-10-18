/** @jsxImportSource theme-ui */
import { Box, Button, Grid, Input, Label } from "theme-ui";
import {
  peopleFiltersRootStyles,
  peopleFiltersSubmitStyles,
} from "./PeopleFilters.styles";
import { camelPropToText } from "../../helpers/textTransform";
import { ApiResponseMetadata } from "../../Models/ApiResponse";

export interface PeopleFiltersProps {
  metadata: ApiResponseMetadata;
}

export const PeopleFilters = ({ metadata }: PeopleFiltersProps) => {
  const filterKeys = Object.keys(metadata.filters);

  const generateInputFilter = (field: string, type: string) => (
    <Box key={field}>
      <Label htmlFor={field}>{camelPropToText(field)}</Label>
      <Input name={field} id={field} mb={3} type={type} />
    </Box>
  );

  return (
    <Box
      as="form"
      sx={peopleFiltersRootStyles}
      onSubmit={(e) => e.preventDefault()}
    >
      <Grid gap={2} columns={4}>
        {filterKeys &&
          filterKeys.map((field: string) =>
            generateInputFilter(field, metadata.filters[field].type)
          )}
      </Grid>
      <Button sx={peopleFiltersSubmitStyles}>Apply filters</Button>
    </Box>
  );
};
