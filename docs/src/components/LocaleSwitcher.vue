<template>
  <div
    :class="bem()"
    @focus="handleMousemove(true)"
    @blur="handleMousemove(false)"
    @mouseenter="handleMousemove(true)"
    @mouseleave="handleMousemove(false)"
  >
    <div
      :class="bem({e: 'items', m: { expanded: isExpanded }})"
    >
      <img
        :src="$asset(`images/locales/${selectedLocaleOption.file}`)"
        :alt="selectedLocaleOption.file"
        :class="bem({e: 'item'})"
      >
      <Transition
        name="slide"
      >
        <div v-if="isExpanded">
          <img
            v-for="(o, i) in otherLocaleOptions"
            :key="i"
            :src="$asset(`images/locales/${o.file}`)"
            :alt="o.file"
            :class="bem({e: 'item', m: 'clickable'})"
            @click="selectLocale(o.locale)"
          >
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { createBem, useUi } from '@vuebits/ui';

interface LocaleOption {
  file: string;
  locale: string;
}

const localeOptions: LocaleOption[] = [
  {
    file: 'pl.svg',
    locale: 'pl',
  },
  {
    file: 'uk.svg',
    locale: 'en',
  },
  {
    file: 'ua.svg',
    locale: 'uk',
  },
];

const bem = createBem('locale-switcher');

const ui = useUi();

const updateLocale = (locale: string) => {
  if (!ui) return;
  ui.locale = locale;
};

const isHovered = ref(false);
const isExpanded = ref(false);

const handleMousemove = (hovered: boolean): void => {
  isHovered.value = hovered;
  setTimeout(() => {
    isExpanded.value = hovered;
  }, 200);
};

const selectLocale = (locale: string): void => {
  updateLocale(locale);
  isExpanded.value = false;
};

const selectedLocaleOption = computed(() => {
  return localeOptions.find(o => o.locale === ui?.locale) || {
    file: 'pl.svg',
    locale: 'pl',
  };
});

const otherLocaleOptions = computed(() => {
  return localeOptions.filter(o => o.locale !== ui?.locale);
});

</script>

<style lang="scss">
.locale-switcher {
  margin-left: $sp;
  position: relative;
  width: 3.4rem;
  height: 3.4rem;

  &__items {
    position: absolute;
    border-radius: 1.7rem;
    border: set-border($color-white);

    &--expanded {
      background-color: $color-white;
      box-shadow: $shadow-main;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
    }
  }

  &__item {
    height: 3rem;
    width:3rem;
    padding: $sp;
    display: block;
    border-radius: 50%;

    &--clickable {
      cursor: pointer;
    }
  }
}

</style>
