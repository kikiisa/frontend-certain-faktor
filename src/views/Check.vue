<template>
  <div class="home">
    <Navbar/>
    <Form/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Form from '@/components/Form.vue'
export default {
  name: 'Check',
  components: {
    Navbar,Form
  }
}
</script>
