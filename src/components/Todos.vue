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
import { mapGetters } from "vuex";
export default {
  name: "Todos",
  //computed property defines which getters we want to use
  computed: mapGetters(["allTodos"])
};
</script>

<style lang="scss" scoped>
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