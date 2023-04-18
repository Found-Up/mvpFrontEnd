import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SRUCompanyPage } from './SRUCompanyPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SRU Pages/SRUCompanyPage',
  component: SRUCompanyPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SRUCompanyPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SRUCompanyPage> = (args) => <SRUCompanyPage {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  user: "devTest"
};
