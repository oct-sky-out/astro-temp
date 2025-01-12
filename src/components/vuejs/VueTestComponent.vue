

<template>
  <div class="flex gap-2">
  <div class="rounded-md bg-slate-800 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
    Chip Filled
  </div>
  <div class="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
    Chip Gradient
  </div>
  <div class="rounded-md border border-slate-300 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
    Chip Outlined
  </div>
  <div class="rounded-md bg-slate-100 py-0.5 px-2.5 border border-transparent text-sm text-slate-600 transition-all shadow-sm">
    Chip Ghost
  </div>
</div>
    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
  Button
</button>
<input
					value='Vue 렌더링 된 Input 컴포넌트'
					class='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
					placeholder='Type here...'
				/>
</template>

<script>
export default {
  name: 'VueTestComponent'
}
</script>

<style scoped>

</style>