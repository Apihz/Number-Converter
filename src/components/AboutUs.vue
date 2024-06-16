<template>
  <div class="w-full flex flex-col items-center justify-center">
    <transition name="fade" mode="out-in">
      <div v-if="showTeam" key="team-heading" class="mb-5 text-center bg-gray-700 rounded-md font-bold p-3 shadow-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] ease-in-out hover:scale-110 hover:duration-300 hover:bg-gray-600">
        <h1>MEET OUR TEAM</h1>
      </div>
    </transition>
    <transition-group name="fade" tag="div" class="grid grid-cols-1 p-5 sm:grid-cols-2 justify-center w-full gap-7">
      <div v-for="student in students" :key="student.id" class="flex bg-gray-700 h-36 rounded-md shadow-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] ease-in-out hover:scale-110 hover:duration-300 hover:bg-gray-600">
        <figure>
          <img class="rounded-l-md object-cover min-h-full w-full max-w-48 max-h-80" :src="student.picture" alt="Student" />
        </figure>
        <div class="mx-3 bg-gray-600 rounded-sm m-2 w-full px-3 py-2 text-md ">
          <h2 class="text-md sm:text-xl font-bold text-white">{{student.name}}</h2>
          <p>{{ student.id }}</p>
          <p>{{student.course}}</p>
          <p>{{ student.level }}</p>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showTeam = ref(false);
const students = ref([]);

onMounted(() => {
  showTeam.value = true;

  students.value = [
    {
      name: "Muhammad Hafiz",
      id: "2314629",
      course: "BCS",
      level: "LEVEL 1",
      picture: "hohoho.jpg"
    },
    {
      name: "Muhammad Haikal",
      id: "2318463",
      course: "BCS",
      level: "LEVEL 1",
      picture: "floppa.jpg"
    },
    {
      name: "Muhammad Hannan",
      id: "2319717",
      course: "BCS",
      level: "LEVEL 1",
      picture: "suss.jpg"
    },
    {
      name: "Nur Adzhan",
      id: "2210403",
      course: "BIT",
      level: "LEVEL 1",
      picture: "koceng.jpg"
    }
  ];
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
