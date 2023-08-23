import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Nav, NavLink } from "./index";

const meta = {
  title: "UI/Nav",
  component: Nav,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    children: ["first", "second", "third"].map((s) => (
      <NavLink key={s} href={`/${s}`}>
        {s}
      </NavLink>
    )),
  },
};
