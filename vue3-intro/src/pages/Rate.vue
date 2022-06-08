<template>
    <div>

    </div>
</template>

<script setup>
    import { defineProps,computed } from 'vue';
    let props = defineProps({
        value:Number,
        theme:{
            thpe:String,
            default:'orange'
        }
    })
    console.log(props)

 let rate = computed(()=>{
     return "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
 })
const themeObj = {  
    'black': '#00', 
     'white': '#fff',  
     'red': '#f5222d', 
      'orange': '#fa541c', 
       'yellow': '#fadb14', 
        'green': '#73d13d',  
        'blue': '#40a9ff',
        }
      const fontstyle = computed(()=>{
          return `color:${themeObj[props.theme]}`
      })  
</script>

<style>

</style>