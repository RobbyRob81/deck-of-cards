// import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

import BaseButton from "./BaseButton";

export default {
  title: "BaseButton",
  decorators: [withKnobs]
};

const buttonTemplate = `<BaseButton type="submit" buttonClass="-fill-gradient">Submit</BaseButton>`;

export const defaultButton = () => ({
  components: { BaseButton },
  template: buttonTemplate
});
