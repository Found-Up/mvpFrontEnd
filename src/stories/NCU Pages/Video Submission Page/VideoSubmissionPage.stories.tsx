import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VideoSubmissionPage } from './VideoSubmissionPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'NCU Pages/VideoSubmissionPage',
  component: VideoSubmissionPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof VideoSubmissionPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VideoSubmissionPage> = (args) => <VideoSubmissionPage {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  user: 'devTest',
};
