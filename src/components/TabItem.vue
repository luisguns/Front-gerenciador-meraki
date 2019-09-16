<template>

  <div>
      <span class="txt_value_gerencial">R$ {{value}}</span>
    <b-card>
      <bars
        :data="dataGraphic"
        :gradient="['#00FFFF', '#FF00FF']"
        :barWidth="5"
        :width="400"
        :height="200"
        :growDuration="1"
      ></bars>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    dataGraphic: {
      type: Object,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
