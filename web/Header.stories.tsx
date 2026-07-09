import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./index";

const meta = { title: "Widgets/Header", component: Header } satisfies Meta<typeof Header>;
export default meta;

export const Default: StoryObj<typeof Header> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof Header> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};
