<template>
  <div id="container">
    <Users />
    <Count />
  </div>

</template>

<script>
import Users from 'Components/users/Users.vue';
import Count from 'Components/Count.vue';

export default {
  name: 'app',
  components: {
    Users,
    Count
  }
}
</script>
