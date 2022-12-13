import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CompanyInfoBox } from './CompanyInfoBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/CompanyInfoBox',
  component: CompanyInfoBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CompanyInfoBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CompanyInfoBox> = (args) => <CompanyInfoBox {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  companyName: 'Company Name',
  companyDesc: 'What are you passionate about? Focus on what\'s important to you in your daily life.',
  companyTags: ['Tag','Tag','Tag'],
  companyImgSrc: 'https://via.placeholder.com/75'
};
