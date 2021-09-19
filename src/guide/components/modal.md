# Modal

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mi eget mauris pharetra et ultrices
neque ornare.

#### demo

<Demo-AppModel />

#### Code

```vue

<template>
  <div class="demo">
    <button class="button primary-button" 
c@click="showModal = true ">Open Modal</button>
    <AppModal v-if="showModal" @dismiss="showModal = false"/>
  </div>
</template>

<script>
  import AppModal from "../AppModal";
  export default {
    components:{
      AppModal,
    },
    data () {
      return {
        showModal:false
      }
    }
  }
</script>


```