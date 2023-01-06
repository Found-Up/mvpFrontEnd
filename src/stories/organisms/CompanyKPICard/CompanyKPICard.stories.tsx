import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CompanyKPICard } from './CompanyKPICard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/CompanyKPICard',
  component: CompanyKPICard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CompanyKPICard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CompanyKPICard> = (args) => <CompanyKPICard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  graphLinks: ['Graph 1', 'Graph 2', 'Graph 3'],
  companyName: 'Company',
};
