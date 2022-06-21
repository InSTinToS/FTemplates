import [FTName] from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";

const metadata: ComponentMeta<typeof [FTName]> = {
  component: [FTName],
  title: "[FTName]",
  argTypes: {},
};

const Template: ComponentStory<typeof [FTName]> = (args) => (
  <[FTName] {...args} />
);

const Default = Template.bind({});

Default.args = {} as ComponentStory<typeof [FTName]>["args"];

export { Default };
export default metadata;
