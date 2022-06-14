import Button from "../Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Ninja Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Submit = Template.bind({});

Submit.args = {
  labelMessage: "submitButton",
  text: "Inscribir",
  type: "button",
  className: "submit",
  onClick: action("onClick"),
  disabled: false,
};

export const OutLine = Template.bind({});

OutLine.args = {
  labelMessage: "outlineButton",
  text: "Limpiar",
  type: "button",
  className: "outline",
  onClick: action("onClick"),
  disabled: true,
};
