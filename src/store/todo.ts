import { Module } from "vuex"
import {
  RootStore,
  TodoMutations,
  TodoState,
  Todo,
  TodoActions,
} from "@/interfaces/store"

const state: TodoState = {
  items: [
    {
      done: false,
      content: "Hello World",
    },
  ],
}

const mutations: TodoMutations = {
  addTodo(state, todo: Todo) {
    state.items.push(todo)
  },
}

const actions: TodoActions = {
  addTodo(context, todo: Todo) {
    context.commit("addTodo", todo)
  },
}

const module: Module<TodoState, RootStore> = {
  namespaced: true,
  state,
  mutations,
  actions,
}

export default module
