import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VideoItem } from './VideoItem';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'molecules/VideoItem',
  component: VideoItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof VideoItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VideoItem> = (args) => <VideoItem {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  thumbnailSrc: './logo192.png',
  title: 'What is your greatest strength?',
  time: '1 day ago'
};
