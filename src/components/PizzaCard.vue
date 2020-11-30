<template>
  <div className="pizza-block">
    <img className="pizza-block__image" :src="imageUrl" alt="Pizza" />
    <h4 className="pizza-block__title">{{ name }}</h4>
    <div className="pizza-block__selector">
      <ul>
        <li
          :key="item.id"
          v-for="item in types"
          :class="{ active: activeType === item.id }"
          @click="onSelectType(item.id)"
        >
          {{ item.name }}
        </li>
      </ul>
      <ul>
        <li
          v-for="item in sizes"
          :class="{ active: activeSize === item }"
          @click="() => onSelectSize(item)"
          :key="item"
        >
          {{ item }} см.
        </li>
      </ul>
    </div>
    <div className="pizza-block__bottom">
      <div className="pizza-block__price">от {{ price }} ₽</div>
      <div className="button button--outline button--add" onClick="{addPizza}">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="white"
          />
        </svg>
        <span>Добавить</span>
        <i>1</i>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs, ref } from 'vue';
export default {
  props: {
    _id: {
      type: Number,
      require: false,
    },
    name: {
      type: String,
      require: false,
    },
    imageUrl: {
      type: String,
      require: false,
    },
    price: {
      type: Number,
      require: false,
    },
    sizes: {
      type: Array,
      require: false,
    },
    types: {
      types: Array,
      require: false,
    },
  },
  setup(props) {
    const { types, sizes } = toRefs(props);
    let activeType = ref(types.value[0].id);
    let activeSize = ref(sizes.value[0]);

    const onSelectType = (type) => {
      activeType.value = type;
    };

    const onSelectSize = (size) => {
      activeSize.value = size;
    };

    return {
      activeType,
      activeSize,
      onSelectType,
      onSelectSize,
    };
  },
};
</script>

<style lang="scss">
.pizza-block {
  width: 280px;
  text-align: center;
  margin-bottom: 65px;

  &:not(:nth-of-type(4n)) {
    margin-right: 35px;
  }

  &__image {
    width: 260px;
  }

  &__title {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 1%;
    margin-bottom: 20px;
  }

  &__selector {
    display: flex;
    background-color: #f3f3f3;
    border-radius: 10px;
    flex-direction: column;
    padding: 6px;

    ul {
      display: flex;
      flex: 1;

      &:first-of-type {
        margin-bottom: 6px;
      }

      li {
        padding: 8px;
        flex: 1;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        &.active {
          background: #ffffff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
          border-radius: 5px;
          cursor: default;
        }
        &.disabled {
          opacity: 0.3;
          pointer-events: none;
        }
      }
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }

  &__price {
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.015em;
  }
}
</style>
