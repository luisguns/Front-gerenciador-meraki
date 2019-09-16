<template>
  <el-card class="box-card">
    <div
      slot="header"
      class="clearfix"
    >
      <span>{{ title }}</span>
      <el-button
        class="el-icon-view"
        style="float: right; padding: 0px 0; "
        type="text"
        @click="mostrar = !mostrar"
      ></el-button>
    </div>
    <div
      class="cursor-pointer"
      :class="{'row': isImg}"
      v-show="mostrar"
      @click="click"
    >

      <slot name="body"></slot>
      <b-img
        @click.prevent.stop="grafico"
        v-if="isImg"
        class="ml-auto"
        right
        width="55"
        src="https://cdn0.iconfinder.com/data/icons/antto-seo/250/Conversion-optimization-512.png"
      ></b-img>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    isImg: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mostrar: true,
    };
  },
  methods: {
    click() {
      this.$emit('okClick');
    },
    grafico() {
      this.$emit('graficClick');
    },
  },
};
</script>
