import { SelectComponent } from './select.component';
import { Story, Meta } from '@storybook/angular/types-6-0';


export default {
  title: 'select/selects',
  component: SelectComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// eslint-disable-next-line @typescript-eslint/naming-convention
const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  props: args,
});

export const select = Template.bind({});
select.args = {
  type:'select',
  name: ''
};
