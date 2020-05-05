// import { object } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

import BaseInput from "./BaseInput";

export default {
  title: "BaseInput",
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

export const inputData = {
  label: "foo",
  value: "hi",
  type: "text"
};

const inputTemplate = `<BaseInput label="Card 1" value="AH" />`;

export const EmptyInput = () => ({
  components: { BaseInput },
  template: inputTemplate
});
