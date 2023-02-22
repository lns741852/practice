<template>
    <div>
        <p>One組件</p>
        {{ name }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route =useRoute()

console.log(route)
const name = route.query.name

</script>