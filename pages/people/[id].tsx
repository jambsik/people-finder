import React from "react";
import { Box, Grid, Label } from "theme-ui";
import { getDataById } from "../../services/peopleApi";
import { ApiResponseMetadata } from "../../Models/ApiResponse";
import { Person } from "../../Models/Person";
import { camelPropToText } from "../../helpers/textTransform";

export interface PeopleDetailProps {
  item: Person | undefined;
  metadata: ApiResponseMetadata;
}

const PeopleDetail = ({ item }: PeopleDetailProps) => {
  const fields = item && Object.keys(item);

  return fields ? (
    <Grid gap={4} columns={4}>
      {fields.map((key: string) => (
        <Box key={key}>
          <Label>{camelPropToText(key)}:</Label>
          <Label>{item[key as keyof Person]}</Label>
        </Box>
      ))}
    </Grid>
  ) : (
    <Label>Id not exists</Label>
  );
};

export default PeopleDetail;

// This also gets called at build time
export async function getServerSideProps({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { item, metadata } = await getDataById(params.id);

  return { props: { item: item || null, metadata } };
}
