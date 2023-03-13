import { defineComponent, PropType } from "vue";
export const ItemSummary = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => <div>summary</div>;
  },
});
