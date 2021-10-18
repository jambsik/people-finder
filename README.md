## Intro
Nextjs allows us to develop work with React Js in a faster and easier way. It saves us all the management and configuration of Babel, webpack, Hot module replacement to be able to make changes without the need for a full reload during development. It gives us a better performance in the application because we avoid work to the browser to serve directly the pages in html.
It gives us the advantage of creating routes from its folder structure without the need to configure it. It is a full stack frame work in which we can even create Api routes.
It has been chosen for this exercise also in order to facilitate the rapid creation of an api rest in order to provide a data simulation.
This practice for creating quick micro apps with everything integrated is quite useful. If we wanted to make a public api or a multi-app api it would not be done this way. We would opt for standalone api's with micro services architecture.
User data and images are not secured as a result of the test. If it were a real environment they should not be public and the resources could only be accessed via token.

This project uses theme-ui to theme the application and also has its own component library (separate project), which will be added to the exercise as well. It is published on npm via github and is called @jambsik-labs/ui-components.

## Node version: 14.18.1
## Env Variables: 
``
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_S3_BUCKET=https://people-bucket-s3.s3.eu-west-3.amazonaws.com/
``

## Getting Started

First, run the development server:

```bash
touch .env.local or create new file .env.local in the root project.

yarn install
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## UI - Navigation

``
Home Page: http://localhost:3000/
``

``
People Page: http://localhost:3000/people
``

``
Person Detail: http://localhost:3000/people/[ID]
``

## Api - Navigation

``
getAll: http://localhost:3000/api/data
``

``
Paginate: http://localhost:3000/api/data?limit=1&page=2
``

``
Get by Id: http://localhost:3000/api/data/1
``

``
Filter: http://localhost:3000/api/data?gender=male&surname=Jackson
``

## Build

``
yarn build
``