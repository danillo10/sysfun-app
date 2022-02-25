import { TablesComponent } from './tables.component';
/* eslint-disable @typescript-eslint/naming-convention */
import { Story, Meta } from '@storybook/angular/types-6-0';


export default {
  title: 'Table/Tables',
  component: TablesComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TablesComponent> = (args: TablesComponent) => ({
  props: args,
});

export const TabelaCliente = Template.bind({});
TabelaCliente.args = {
  id:'',
  tabelaCliente:'',
};

export const TabelaContasReceber = Template.bind({});
TabelaContasReceber.args = {
  name:''
};
