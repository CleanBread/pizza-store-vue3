<template>
  <transition name="tooltip">
    <div class="tooltip" v-if="isOpen">
      <img src="@/assets/img/tooltip-cross.svg" alt="" @click="handleClose()" />
      <span>{{ text }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: {
      default: false,
    },
    handleClose: {
      type: Function,
      default: () => console.log('tooltip handleClose'),
    },
    text: {
      required: true,
      type: String,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tooltip-enter-to {
  opacity: 1;
  transform: none;
}
.tooltip-enter-active,
.tooltip-leave-active {
  transition: 0.3s;
}
.tooltip-enter,
.tooltip-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}
.tooltip {
  position: fixed;
  display: flex;
  top: 10px;
  z-index: 1000;
  max-width: 350px;
  right: 10px;
  background: #ffffff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.14204);
  border-radius: 8px;
  padding: 25px;
  font-size: 16px;
  line-height: 19px;
  img {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
}
</style>
