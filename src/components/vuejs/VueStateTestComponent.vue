<script setup>
import { reactive } from "vue";
import { useStore } from "@nanostores/vue";
import { countNumber as countNumberAtom } from "@/store/counter";

const counterAtom = useStore(countNumberAtom);

const counter = reactive({
  count: 0,
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
});
</script>

<template>
  <div class="flex flex-col space-y-4 p-10">
    <div
      class="flex space-x-3 border p-4 border-gray-300 rounded-lg justify-center align-middle"
    >
      <h1 class="text-2xl font-bold text-slate-800">
        Vue State Test Component (use reactive)
      </h1>
      <span>vue reactive number : {{ counter.count }}</span>
      <button
        class="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
        @click="() => counter.increment()"
      >
        Plus
      </button>
      <button
        class="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
        @click="() => counter.decrement()"
      >
        Minus
      </button>
    </div>
    <div
      class="flex space-x-3 border p-4 border-gray-300 rounded-lg justify-center align-middle"
    >
      <h1 class="text-2xl font-bold text-slate-800">
        Vue State Test Component (use Nanostores)
      </h1>
      <span>Nanostores number : {{ counterAtom }}</span>
      <button
        class="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
        @click="() => countNumberAtom.set(countNumberAtom.get() + 1)"
      >
        Plus
      </button>
      <button
        class="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
        @click="() => countNumberAtom.set(countNumberAtom.get() - 1)"
      >
        Minus
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueStateTestComponent",
};
</script>

<style scoped></style>
