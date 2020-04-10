import axios from "axios";

const state = {
  todos: []
};

//for component to have the gloabl state
const getters = {
  allTodos: state => state.todos
};

//make request and call a mutation
//an action takes in an object, use commeit to call a mutation
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response.data);
    //use 'commit' to pass the response to mutation
    // commit(mutation name, response)
    commit("setTodos", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, complete: false }
    );
    commit("newTodo", response.data);
  }
};

//add the fetched data to the global state
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  // newTodo: (state, todo) => state.todos.unshift(todo)
  newTodo: (state, todo) => (state.todos = [todo, ...state.todos])
};

export default {
  state,
  getters,
  actions,
  mutations
};
