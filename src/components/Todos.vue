<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <!-- v-bing:key can be shortened as :key -->
      <div v-for="todo in allTodos" :key="todo.id" class="todo">{{todo.title}}</div>
    </div>
  </div>
</template>

<script>
//mapGetters is like 'connect' in redux
//mapActions is to call the action from the module
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  //if only the action method, can use this: methods: mapAction(['fetchTodos'])
  methods: {
    ...mapActions(["fetchTodos"])
  },
  //computed property defines which getters we want to use
  computed: mapGetters(["allTodos"]),
  //lifecycle method -- created (call the action method before the component is loaded)
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>