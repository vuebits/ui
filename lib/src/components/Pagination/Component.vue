<template>
  <div
    v-if="showPagination"
    :class="$bem({})"
  >
    <VIconButton
      icon="chevron-left"
      :class="$bem({e: 'arrow'})"
      :disabled="currentPage === 1"
      :rounded="rounded"
      :rounded-lg="roundedLg"
      :round="round"
      @click="goToPreviousPage"
    />
    <VButton
      v-for="(button) in pageButtons"
      :id="button.value"
      :key="button.value"
      :rounded="rounded"
      :rounded-lg="roundedLg"
      :round="round"
      :class="$bem({
        e: 'page',
        m: {
          'current': button.value === currentPage,
        },
      })"
      @click.prevent="setPage(button.value)"
    >
      {{ button.label }}
    </VButton>
    <VIconButton
      icon="chevron-right"
      :rounded="rounded"
      :rounded-lg="roundedLg"
      :round="round"
      :class="$bem({e: 'arrow'})"
      :disabled="currentPage === lastPage"
      @click.prevent="goToNextPage"
    />
    <div
      v-if="showJumper"
      :class="$bem({e: 'jumper'})"
    >
      <slot
        name="jumper"
      >
        <span :class="$bem({e: 'jumper-item'})">
          {{ dict.page }}
        </span>
        <slot
          name="jumper-input"
        >
          <VInput
            v-model="currentPage"
            :rounded="rounded"
            :rounded-lg="roundedLg"
            :round="round"
            type="number"
            :class="$bem({e: 'jumper-item'})"
            :min="1"
            :max="lastPage"
            no-hint
            bordered
          />
        </slot>
        <span :class="$bem({e: 'jumper-item'})">
          {{ dict.total }} {{ lastPage }}
        </span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VInput } from '../Input';
import { VIconButton } from '../IconButton';
import { VButton } from '../Button';
import {
  roundedProps,
} from '../../composables';

export interface PageButton {
  value: number;
  label: number | string;
}

export default defineComponent({
  name: 'VPagination',
  components: {
    VInput,
    VIconButton,
    VButton,
  },
  props: {
    modelValue: {
      type: Number as PropType<number>,
      required: true,
    },
    lastPage: {
      type: Number as PropType<number>,
      required: true,
    },
    showJumper: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    ...roundedProps,
  },
  emits: [
    'update:modelValue',
    'change',
  ],
  data () {
    return {
      jumperValue: 0,
    };
  },
  computed: {
    dict () {
      return this.$ui.t().pagination;
    },
    currentPage: {
      get () {
        return +this.modelValue;
      },
      set (value: number) {
        this.$emit('update:modelValue', value);
      },
    },
    showPagination () {
      return this.lastPage > 1;
    },
    pageButtons (): PageButton[] {
      const maxPageButtons = 6;
      let pageButtonsAmount = Math.min(maxPageButtons, this.lastPage);
      if (this.currentPage >= maxPageButtons - 1 && this.currentPage <= this.lastPage - maxPageButtons + 2) {
        pageButtonsAmount++;
      }
      const pageButtons = [];

      for (let i = 0; i < pageButtonsAmount; i++) {
        let pageButton;
        if (i === 0) {
        // first page
          pageButton = {
            value: i + 1,
            label: i + 1,
          };
        } else if (i === pageButtonsAmount - 1) {
        // last page
          pageButton = {
            value: this.lastPage,
            label: this.lastPage,
          };
        } else if (this.lastPage <= maxPageButtons) {
        // all pages can be displayed
          pageButton = {
            value: i + 1,
            label: i + 1,
          };
        } else if (this.currentPage < maxPageButtons - 1) {
        // current page is one of first pages
          if (i !== pageButtonsAmount - 2) {
          // first pages
            pageButton = {
              value: i + 1,
              label: i + 1,
            };
          } else {
          // penultimate button
            pageButton = {
              value: Math.round((pageButtonsAmount - 2 + this.lastPage) / 2),
              label: '...',
            };
          }
        } else if (this.currentPage > this.lastPage - maxPageButtons + 2) {
        // current page is one of last pages
          if (i !== 1) {
            const value = this.lastPage - pageButtonsAmount + i + 1;
            // last pages
            pageButton = {
              value,
              label: value,
            };
          } else {
          // second button
            const nextValue = this.lastPage - pageButtonsAmount + i + 2;
            pageButton = {
              value: Math.round((1 + nextValue) / 2),
              label: '...',
            };
          }
        } else {
          const middlePageButtonsAmount = pageButtonsAmount - 4;
          const firstMiddlePageButtonValue = this.currentPage - Math.round((middlePageButtonsAmount - 1) / 2);
          if (i === 1) {
          // second button
            pageButton = {
              value: Math.round((1 + firstMiddlePageButtonValue) / 2),
              label: '...',
            };
          } else if (i < pageButtonsAmount - 2) {
          // middle buttons
            const value = firstMiddlePageButtonValue + i - 2;
            pageButton = {
              value,
              label: value,
            };
          } else {
          // middle buttons
            const previousValue = firstMiddlePageButtonValue + i - 3;
            pageButton = {
              value: Math.round((previousValue + this.lastPage) / 2),
              label: '...',
            };
          }
        }
        pageButtons.push(pageButton);
      }
      return pageButtons;
    },
  },
  methods: {
    scrollToTop () {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },

    change (page: number) {
      this.scrollToTop();
      this.currentPage = page;
      this.$emit('change', page);
    },

    setPage (page: number) {
      if (this.currentPage !== page) this.change(page);
    },

    goToPreviousPage () {
      if (this.currentPage !== 1) this.change(--this.currentPage);
    },

    goToNextPage () {
      if (this.currentPage !== this.lastPage) this.change(++this.currentPage);
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
