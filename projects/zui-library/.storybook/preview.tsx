import type { Preview } from "@storybook/angular";
import React from "react";

import { CssPropsBlock } from "@ljcl/storybook-addon-cssprops";
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
  useOf,
} from "@storybook/blocks";

import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => {
        const { story } = useOf("story") as any;
        const cssProps = story.parameters.cssprops ?? {};
        return (
          <>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <CssPropsBlock customProperties={cssProps} />
            <Stories />
          </>
        );
      },
    },
  },
};

export default preview;
