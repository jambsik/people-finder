import { Person } from "../../Models/Person";
import { ListItemProps } from "../../features/List/ListItem";

const BUCKET_URL = process.env.NEXT_PUBLIC_S3_BUCKET;

export const convertPeopleToListItems = (people: Array<Person>) =>
  people.map(
    ({
      id,
      title,
      forename,
      middleNames,
      surname,
      emailAddress,
      picture,
    }: Person): ListItemProps => ({
      id,
      title: `${title} ${forename} ${middleNames} ${surname}`,
      picture: `${BUCKET_URL}${picture}`,
      description: `${emailAddress}`,
    })
  );
