import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { MainLayout } from "../layouts/MainLayout";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { OverlayIcon } from "../shared/Overlay";
import s from "./StartPage.module.scss";
export const StartPage = defineComponent({
  setup: (props, context) => {
    return () => (
      <MainLayout>
        {{
          title: () => "小羊记账",
          icon: () => <OverlayIcon />,
          default: () => (
            <>
              <Center class={s.pot_wrapper}>
                <Icon name="pot" class={s.pot} />
              </Center>
              <div class={s.button_wrapper}>
                <RouterLink to="/items/create">
                  <Button class={s.button}>开始记账</Button>
                </RouterLink>
              </div>
              <RouterLink to="/items/create">
                <FloatButton iconName="add" />
              </RouterLink>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
