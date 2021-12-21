import {ComponentCustomOptions} from 'vue'
import {Store} from 'vuex';

declare module '@vue/runtime-core' {
  // 申明自己的 store state
  interface State {
    name: string
  }

  // 为 this.$store 提供类型声明
  interface ComponentCustomOptions {
    $store: Store<State>
  }
}