<template>
  <div class="row justify-content-center align-items-center g-2">
    <div class="col-12">
      <carousels />
    </div>
    <div class="col-12">
      <div class="container">
        <Home/>
      </div>
    </div>    
  </div>
  
</template>

<script setup>
  import carousels from '@/components/carousels'
  import Home from '@/components/HomePage'
</script>
