import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NCUSignInPage } from './NCUSignInPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/NCUSignInPage',
  component: NCUSignInPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NCUSignInPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NCUSignInPage> = (args) => <NCUSignInPage {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'NCUSignInPage',
};
