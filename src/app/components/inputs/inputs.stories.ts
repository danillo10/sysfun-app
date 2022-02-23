/* eslint-disable @typescript-eslint/naming-convention */
import { Story, Meta } from '@storybook/angular/types-6-0';
import { InputsComponent }  from './inputs.component';

export default {
  title: 'Inputs/Input',
  component: InputsComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// eslint-disable-next-line @typescript-eslint/naming-convention
const Template: Story<InputsComponent> = (args: InputsComponent) => ({
  props: args,
});

export const InputEmail = Template.bind({});
InputEmail.args = {
  type:'login',
  name: 'E-mail',
  icon:''
};
export const InputSenha = Template.bind({});
InputSenha.args = {
  type:'login',
  name: 'Senha',
  icon: ''
};

export const Pesquisar = Template.bind({});
Pesquisar.args = {
  type:'pesquisar',
  label: 'PESQUISAR'
};

export const FiltrarPor = Template.bind({});
FiltrarPor.args = {
  type:'filtrar',
  label: 'FILTRAR POR',
  name: 'TODAS AS DATAS'
};

export const Situacao = Template.bind({});
Situacao.args = {
  type:'situacao',
  label: 'SITUAÇÃO',
  name: 'TODAS'
};

export const FormaPagamento = Template.bind({});
FormaPagamento.args = {
  type:'pagamento',
  label: 'FORMA DE PAGAMENTO',
  name: 'TODAS'
};

export const TipoPessoa = Template.bind({});
TipoPessoa.args = {
  type:'pessoa',
  label: 'TIPO DE PESSOA',
  name: 'FISICA'
};

export const Cpf = Template.bind({});
Cpf.args = {
  type:'cpf',
  label: 'CPF',
  name: ''
};

export const Rg = Template.bind({});
Rg.args = {
  type:'rg',
  label: 'RG',
  name: ' '
};

export const Emissor= Template.bind({});
Emissor.args = {
  type:'emissor',
  label: 'EMISSOR',
  name: ' '
};

export const Nome= Template.bind({});
Nome.args = {
  type:'nome',
  label: 'NOME',
  name: ' '
};

export const DataNascimento = Template.bind({});
DataNascimento.args = {
  type:'data',
  label: 'DATA DE NASCIMENTO',
  name: ' '
};

export const Naturalidade = Template.bind({});
Naturalidade.args = {
  type:'naturalidade',
  label: 'NATURALIDADE',
  name: ' '
};
