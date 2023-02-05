<template>
      <button
        @click="toggleTheme"
        class="flex items-center justify-self-end h-full w-full"
      >
        <img v-if="theme === 'dark'" class="h-full w-full" :src="sunIcon"/>
        <img v-if="theme === 'light'" class="h-full w-full"  :src="moonIcon"/>
      </button>
</template>

<script setup>
import useDarkTheme from '@/composables/useDarkTheme';
import moonIcon from '@/assets/moon.svg';
import sunIcon from '@/assets/sun.svg';

const { theme, toggleTheme } = useDarkTheme();
</script>
