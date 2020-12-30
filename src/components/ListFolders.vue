<template>
  <div class="container">
    <ul class="px-2">
      <li 
        v-for="folder in folders" 
        :key="folder._id" 
        class="px-3 hover:bg-gray-100" 
        @click="$emit('open', folder._id)">
        <span>{{ folder.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ListFolders',
  props: {
    folders: Array
  },
}
</script>