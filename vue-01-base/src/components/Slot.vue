<template>
    <div id="Slot">
      <!-- 接收父組件標籤 -->
      子組件:<slot name="slotOne"></slot>
    </div>
  </template>
      
<script>
  export default {
    name: "Slot",
    data() {
      return {
        msg: "hello parent",
      };
    },

  };
  </script>
    
    <style>
  </style>
      