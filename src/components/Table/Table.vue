<template>
  <table class="min-w-full overflow-x-scroll">
    <thead class="border-b text-left font-semibold text-gray-500">
      <tr>
        <slot name="header" />
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200/40 text-gray-800">
      <slot name="body" />
    </tbody>
  </table>
</template>
