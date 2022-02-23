/* eslint-disable @typescript-eslint/naming-convention */
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonsComponent }  from './buttons.component';

export default {
  title: 'Buttons/Button',
  component: ButtonsComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonsComponent> = (args: ButtonsComponent) => ({
  props: args,
});

export const Entrar = Template.bind({});
Entrar.args = {
  type:'Entrar',
  label: 'Esqueceu a senha?',
  name: 'Entrar'
};

export const RecuperarSenha = Template.bind({});
RecuperarSenha.args = {
  type: 'recuperar',
  name: 'RECUPERAR SENHA',
};

export const ClientesFornecedores = Template.bind({});
ClientesFornecedores.args = {
  type: 'fornecedores',
  name:'CLIENTES E FORNECEDORES'
};

export const ContasReceber = Template.bind({});
ContasReceber.args = {
  type:'receber',
  name:'CONTAS A RECEBER'
};

export const Planos = Template.bind({});
Planos.args = {
  type:'planos',
  name:'PLANOS'
};

export const AdicionarClienteFornecedor = Template.bind({});
AdicionarClienteFornecedor.args = {
  type:'cliente/fornecedor',
  name:'ADICIONAR CLIENTE/FORNECEDOR'
};

export const Limpar = Template.bind({});
Limpar.args = {
  type:'limpar',
  name:'LIMPAR'
};

export const Concluir = Template.bind({});
Concluir.args = {
  type:'concluir',
  name:'CONCLUIR'
};

export const AdicionarReceita = Template.bind({});
AdicionarReceita.args = {
  type:'adicionar',
  name:'ADICIONAR RECEITA'
};

export const Salvar = Template.bind({});
Salvar.args = {
  type:'salvar',
  name:'SALVAR'
};

export const Cancelar = Template.bind({});
Cancelar.args = {
  type:'cancelar',
  name:'CANCELAR'
};

export const AdicionarPlanos = Template.bind({});
AdicionarPlanos.args = {
  type:'adicionar',
  name:'ADICIONAR PLANOS FUNERÁRIOS'
};

export const Imprimir = Template.bind({});
Imprimir.args = {
  type:'imprimir',
  name:'IMPRIMIR'
};
