import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecentPostItem } from './RecentPostItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'molecules/RecentPostItem',
  component: RecentPostItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RecentPostItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RecentPostItem> = (args) => <RecentPostItem {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    imgSrc : './logo192.png',
    text : 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum?',
    date : '2 hours ago',
};
