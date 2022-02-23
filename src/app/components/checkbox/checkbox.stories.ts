/* eslint-disable @typescript-eslint/naming-convention */

import { Story } from '@storybook/angular';
import { CheckboxComponent }  from './checkbox.component';


export default {
  title: 'Checkbox',
  component: CheckboxComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
   },
};

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const CheckPassword = Template.bind({});
CheckPassword.args = {
  type: 'checkbox',
  name: 'Lembrar usuário'
};

export const BaixarConta = Template.bind({});
BaixarConta.args = {
  type: 'baixarConta',
  name: 'BAIXAR CONTA'
};

export const Rg = Template.bind({});
Rg.args = {
  type: 'rg',
  name: 'RG'
};

export const Cpf = Template.bind({});
Cpf.args = {
  type: 'cpf',
  name: 'CPF'
};

export const ComprovanteResidencia = Template.bind({});
ComprovanteResidencia.args = {
  type: 'comprovante',
  name: 'COMPROVANTE RESIDÊNCIA'
};


export const CertidaoCasamento = Template.bind({});
CertidaoCasamento.args = {
  type: 'certidao',
  name: 'CERTIDÃO DE CASAMENTO '
};

