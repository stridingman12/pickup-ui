import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import FeedCard from "./index";

test("Renders and matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <FeedCard
        publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
        publisherName="Prime Time Sports"
        publishedAt="23m"
        title="Chiefs vs. Ravens Who wins?"
        image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
        pickCount={2}
        timeLeft={new Date()}
        picks={[
          { label: "Ravens", value: "Ravens" },
          { label: "Chiefs", value: "Chiefs" },
        ]}
        expanded={false}
      />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});
