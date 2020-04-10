import axios from "axios";

const state = {
  todos: []
};

//for component to have the gloabl state
const getters = {
  allTodos: state => state.todos
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
