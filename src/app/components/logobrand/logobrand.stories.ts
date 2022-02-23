// // also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/angular/types-6-0';
// import { LogoBrandComponent }  from './logomarca.component';

// // More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
// export default {
//   title: 'Buttons/Button',
//   component: LogoBrandComponent,
//   // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

// // More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
// const Template: Story<LogoBrandComponent> = (args: LogoBrandComponent) => ({
//   props: args,
// });

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/angular/writing-stories/args
// Primary.args = {
//   type:'primary',
//   label: 'Button',
//   color:'',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   type: 'secondary',
//   label: 'Button',
//   color:'',
// };
