<template>
  <transition name="fade">
    <div class="modal" v-if="isOpen">
      <div class="modal__wrapper" @click="handleClose()"></div>
      <div class="modal__content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
export default {
  props: {
    isOpen: {
      default: false,
    },
    handleClose: {
      required: false,
      type: Function,
      default: () => console.log('handleClose'),
    },
    handleOpen: {
      required: false,
      type: Function,
      default: () => console.log('handleOpen'),
    },
  },
  setup(props) {
    const handleKeyDown = ({ key }) => {
      if (key == 'Escape') {
        props.handleClose();
      }
    };
    onMounted(() => {
      window.addEventListener('keydown', handleKeyDown);
    });

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeyDown);
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.modal {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &__wrapper {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>
