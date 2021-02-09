import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  ThemeProvider,
  Typography,
  NestedInput,
  Fab,
  Icon,
  DataTable,
  Loader,
} from "@playpickup/core";
import { Create } from "@playpickup/icons";

import "./index.css";

const rows = [
  {
    id: 23,
    post_title: "Will the Cleveland Indians win the World Series?",
    league: "MLB",
    prop_id: 3923,
    article_url:
      "http://thetribe.net/2021/01/04/ranking-cleveland-indians-outfield-power",
    headline: "Ranking the Cleveland Baseball team's outfield power",
    excerpt:
      "It's no secret that Cleveland has come up short the past few years, but will a weak offseason help?",
    featured_img: "https://aws.bucket.fake.pickup/1299091083.jpg",
    published_at: "Febuary 4th, 2021 3:44PM CST",
    updated_at: "Febuary 4th, 2021 5:44PM CST",
  },
];

const headCells = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "post_title",
    numeric: false,
    disablePadding: false,
    label: "Title",
    width: 120,
  },
  { id: "league", numeric: false, disablePadding: false, label: "League" },
  {
    id: "prop_id",
    numeric: true,
    disablePadding: true,
    label: "Prop ID",
    width: 100,
  },
  {
    id: "article_url",
    numeric: false,
    disablePadding: false,
    label: "Article URL",
  },
  {
    id: "headline",
    numeric: false,
    disablePadding: false,
    label: "Headline",
  },
  {
    id: "excerpt",
    numeric: false,
    disablePadding: false,
    label: "Excerpt",
  },
  {
    id: "featured_img",
    numeric: false,
    disablePadding: false,
    label: "Featured Image",
  },
  {
    id: "published_at",
    numeric: false,
    disablePadding: false,
    label: "Publish Date",
  },
  {
    id: "updated_at",
    numeric: false,
    disablePadding: false,
    label: "Updated Date",
  },
];

const App: React.FC = () => (
  <ThemeProvider>
    <div style={{ padding: 40 }}>
      <Typography variant="title">Hello, PickUp!</Typography>
      <Typography
        variant="heading3"
        style={{ fontStyle: "normal", margin: "20px 0" }}
      >
        👋 Howdy human!1!
      </Typography>
      <Typography>
        Feel free to throw some components in here for testing. It''s your lil
        component playground!
      </Typography>
    </div>
    <div style={{ marginTop: 40, marginBottom: 40, padding: 40 }}>
      {/* Throw Some Stuff Here Dawgie */}

      {/* NestedInput component w/ Formik as wrapper */}
      <Formik
        initialValues={{ email: null }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("A valid email address is required!")
            .required("Email address is required!")
            .nullable(),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange }) => (
          <Form>
            <NestedInput
              id="email"
              name="email"
              buttonText="Sign up"
              placeholder="email@example.com"
              errors={errors}
              touched={touched}
              handleChange={handleChange}
            />
          </Form>
        )}
      </Formik>
    </div>
    <div style={{ marginTop: 40, marginBottom: 40, padding: 40 }}>
      <Icon>
        <Create />
      </Icon>
    </div>
    <div style={{ marginTop: 40, marginBottom: 40, padding: 40 }}>
      <Fab
        icon={Create}
        title="Create post"
        onClick={() => console.log("Clicked")}
      />
    </div>
    <div
      style={{
        display: "flex",
        marginTop: 40,
        marginBottom: 40,
        padding: 40,
        width: "100%",
      }}
    >
      <DataTable
        headCells={headCells}
        rows={rows}
        defaultSortColumn="id"
        tableTitle="Homebase Posts"
      />
    </div>
    <div style={{ marginTop: 40, marginBottom: 40, padding: 40 }}>
      <Loader />
    </div>
  </ThemeProvider>
);

export default App;
