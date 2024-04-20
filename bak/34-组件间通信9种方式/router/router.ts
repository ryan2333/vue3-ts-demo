import Props from "@/pages/01-props/Father.vue";
import Event from "@/pages/02-custom-event/Father.vue";
import Mitt from "@/pages/03-mitt/Father.vue";
import Model from "@/pages/04-v-model/Father.vue";
import Attrs from "@/pages/05-attrs/Father.vue";
import RefParent from "@/pages/06-ref-parent/Father.vue";
import Provide from "@/pages/07-provide/Father.vue";
import Pinia from "@/pages/08-pinia/Father.vue";
import Slot from "@/pages/09-slot/Father.vue";
import { createRouter, createWebHistory } from "vue-router";


export const router = createRouter({
  routes: [
    {
      path: "/props",
      component: Props
    },
    {
      path: "/event",
      component: Event
    },
    {
      path: "/mitt",
      component: Mitt
    },
    {
      path: "/model",
      component: Model
    },
    {
      path: "/attrs",
      component: Attrs
    },
    {
      path: "/ref-parent",
      component: RefParent
    },
    {
      path: "/provide",
      component: Provide
    },
    {
      path: "/pinia",
      component: Pinia
    },
    {
      path: "/slot",
      component: Slot
    },

  ],
  history: createWebHistory()
})
