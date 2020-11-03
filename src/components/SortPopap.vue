<template>
  <div ref="sortBlockRef" class="sort" :class="{ active: isVisiblePopap }">
    <div class="sort__label" @click="toggleVisiblePopap">
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
          fill="#2C2C2C"
        />
      </svg>
      <b>Сортировка по:</b>
      <span>{{ activeCatText }}</span>
    </div>
    <div class="sort__popup">
      <ul>
        <li
          v-for="(item, index) in sortCats"
          :class="{ active: currentCat === index }"
          :key="index"
          @click="changeCurrentCat(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';
export default {
  setup() {
    const isVisiblePopap = ref(false);
    const sortBlockRef = ref(null);
    const currentCat = ref(0);
    const sortCats = [
      {
        name: 'популярности',
        type: 'popular',
      },
      {
        name: 'цене',
        type: 'price',
      },
    ];
    const toggleVisiblePopap = () => {
      isVisiblePopap.value = !isVisiblePopap.value;
    };

    const changeCurrentCat = (index) => {
      currentCat.value = index;
      isVisiblePopap.value = false;
    };

    const outsideClick = (e) => {
      const path = e.path || (e.composedPath && e.composedPath());
      if (!path.includes(sortBlockRef.value)) {
        isVisiblePopap.value = false;
      }
    };

    onMounted(() => {
      document.body.addEventListener('click', outsideClick);
    });

    onUnmounted(() => {
      document.body.removeEventListener('click', outsideClick);
    });

    return {
      isVisiblePopap,
      toggleVisiblePopap,
      currentCat,
      sortCats,
      changeCurrentCat,
      outsideClick,
      sortBlockRef,
    };
  },
};
</script>

<style lang="scss">
.sort {
  position: relative;
  cursor: pointer;

  &.active {
    svg {
      transform: rotate(0deg);
    }
    .sort__popup {
      opacity: 1;
    }
  }
  &__label {
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
      transition: 0.3s;
      transform: rotate(-180deg);
    }

    b {
      margin-right: 8px;
    }

    span {
      color: $red;
      border-bottom: 1px dashed $red;
      cursor: pointer;
    }
  }

  &__popup {
    position: absolute;
    right: 0;
    margin-top: 15px;
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    overflow: hidden;
    padding: 10px 0;
    width: 160px;
    opacity: 0;
    transition: 0.3s;
    ul {
      overflow: hidden;
      li {
        padding: 12px 20px;
        cursor: pointer;

        &.active,
        &:hover {
          background: rgba(254, 95, 30, 0.05);
        }

        &.active {
          font-weight: bold;
          color: $red;
        }
      }
    }
  }
}
</style>
