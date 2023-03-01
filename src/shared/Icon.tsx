import { defineComponent, PropType } from "vue";
import s from "./Icon.module.scss";
export type IconName = "add" | "chart" | "clock" | "cloud" | "pot" | "lamb";
export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
    },
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={"#" + props.name} />
      </svg>
    );
  },
});
