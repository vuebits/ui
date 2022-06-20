<template>
  <div :class="$bem({})">
    <ul
      v-if="!vertical && steps.length > 1"
      :class="$bem({e: 'steps-axis'})"
    >
      <li
        v-for="(step, i) in steps"
        :key="i"
        :class="$bem({e: 'steps-axis-step'})"
      >
        <div
          :class="$bem({
            e: 'step-icon',
            m: {
              active: isStepActive(i),
              complete: step.complete,
              horizontal: true
            }
          })"
        >
          <slot
            name="icon"
            :icon="step.icon"
            :complete="step.complete"
            :data="step"
            :position="i + 1"
          >
            <VIcon
              v-if="step.complete"
              :name="$ui.icons.values.check"
            />
            <VIcon
              v-else-if="step.icon"
              :name="step.icon"
            />
            <template v-else-if="numbered">
              {{ i + 1 }}
            </template>
          </slot>
        </div>
        <div :class="$bem({e: 'step-axis-step-line'})" />
      </li>
    </ul>
    <ul :class="$bem({e: 'steps'})">
      <template
        v-for="(step, i) in steps"
        :key="i"
      >
        <li
          v-if="vertical || isStepActive(i)"
          :class="$bem({e: 'step'})"
        >
          <div
            v-if="vertical && steps.length > 1"
            :class="$bem({e: 'step-side'})"
          >
            <div :class="$bem({e: 'step-icon', m: {active: isStepActive(i), complete: step.complete}})">
              <slot
                name="icon"
                :icon="step.icon"
                :complete="step.complete"
                :data="step"
                :position="i + 1"
              >
                <VIcon
                  v-if="step.complete"
                  :name="$ui.icons.values.check"
                />
                <VIcon
                  v-else-if="step.icon"
                  :name="step.icon"
                />
                <template v-else-if="numbered">
                  {{ i + 1 }}
                </template>
              </slot>
            </div>
            <div :class="$bem({e: 'step-line'})" />
          </div>
          <div :class="$bem({e: 'step-main'})">
            <div :class="$bem({e: 'step-header'})">
              <div :class="$bem({e: 'step-titles'})">
                <slot
                  name="step-title"
                  :text="step.title"
                  :data="step"
                  :position="i + 1"
                >
                  <h2 :class="$bem({e: 'step-title'})">
                    {{ step.title }}
                  </h2>
                </slot>
                <slot
                  name="step-header"
                  :text="step.subtitle"
                  :data="step"
                  :position="i + 1"
                >
                  <h3 :class="$bem({e: 'step-subtitle'})">
                    {{ step.subtitle }}
                  </h3>
                </slot>
              </div>
              <slot
                v-if="isStepActive(i)"
                name="step-header-right"
                :data="step"
                :position="i + 1"
                :index="i"
                :goTo="goTo"
                :is-last="i + 1 === steps.length"
              />
            </div>
            <transition
              :name="transition"
              mode="out-in"
              @after-leave="showNextStep"
            >
              <div
                v-if="isStepActive(i) && !nextStep"
                :class="$bem({e: 'step-content'})"
              >
                <slot
                  :name="`step-content-${i + 1}`"
                  :content="step.content"
                  :data="step"
                  :position="i + 1"
                  :index="i"
                  :goTo="goTo"
                  :is-last="i + 1 === steps.length"
                >
                  <slot
                    name="step-content"
                    :content="step.content"
                    :data="step"
                    :position="i + 1"
                    :index="i"
                    :goTo="goTo"
                    :is-last="i + 1 === steps.length"
                  >
                    {{ step.content }}
                  </slot>
                </slot>
              </div>
            </transition>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VIcon } from '../Icon';

export default defineComponent({
  name: 'VStepper',
  components: {
    VIcon,
  },
  props: {
    modelValue: {
      type: Number as PropType<number | null>,
      default: 1,
    },
    steps: {
      type: Array as PropType<any[]>,
      required: true,
    },
    numbered: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  data () {
    return {
      nextStep: null as number | null,
    };
  },
  computed: {
    transition (): string {
      return this.vertical ? 'slide-top' : 'slide-left';
    },
  },
  methods: {
    isStepActive (index: number): boolean {
      return index + 1 === this.modelValue;
    },
    goTo (step: number): void {
      this.nextStep = step;
    },
    showNextStep (): void {
      this.$emit('update:modelValue', this.nextStep);
      this.nextStep = null;
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
