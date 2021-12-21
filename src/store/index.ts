import { InjectionKey } from "vue";
import {useStore as baseUseStore, createStore, Store} from 'vuex'

// 定义injection key
interface State{
  name: string
}
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state:{
    name: '张三'
  },
  getters: {
    getName: (state)=>{
      return state.name
    }
  },
  // 操作数据
  mutations: {
    // 重置名字
    SET_NAME(state, name:string ) {
      state.name = name
    }
  },
  actions: {}
})

// 定义自己的组合式函数
export function useStore() {
  return baseUseStore(key)
}