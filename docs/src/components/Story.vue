<template>
  <div class="story">
    <span
      :id="fileName"
      class="story__anchor"
    />
    <h3 class="story__title">
      <a :href="`#${fileName}`">
        {{ title }}
      </a>
    </h3>
    <div class="story__box">
      <div class="story__content">
        <slot />
      </div>
      <div class="story__code-controls">
        <UiButton
          size="sm"
          color="primary"
          dark
          @click="toggleCodeVisibility"
        >
          {{ isCodeShown ? 'Hide code' : 'Show code' }}
        </UiButton>
        <div v-if="isCodeShown">
          <UiButton
            size="sm"
            :class="$bem({ e: 'code-control', m: { active: activeCode === 'html' } })"
            @click="setActiveCode('html')"
          >
            HTML
          </UiButton>
          <UiButton
            size="sm"
            :class="$bem({ e: 'code-control', m: { active: activeCode === 'js' } })"
            @click="setActiveCode('js')"
          >
            JS
          </UiButton>
          <UiButton
            size="sm"
            :class="$bem({ e: 'code-control', m: { active: activeCode === 'css' } })"
            @click="setActiveCode('css')"
          >
            CSS
          </UiButton>
        </div>
      </div>
      <div
        v-show="isCodeShown"
        class="story__code"
      >
        <div
          v-show="activeCode === 'html'"
          ref="html"
        >
          <pre class="language-xml hljs"><code>{{ template }}</code></pre>
        </div>
        <div
          v-show="activeCode === 'js'"
          ref="js"
        >
          <pre class="language-javascript hljs"><code>{{ script }}</code></pre>
        </div>
        <div
          v-show="activeCode === 'css'"
          ref="css"
        >
          <pre class="language-css hljs"><code>{{ style }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import xml from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import { UiButton } from '@vuebits/ui'
import { defineComponent, nextTick } from 'vue'
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)

const getComponentSection = (string, tagName) => {
  const start = string.search(`<${tagName}>`)
  const end = string.search(`</${tagName}>`)
  return string.substr(start + tagName.length + 3, end - start - tagName.length - 3)
}

export default defineComponent({
  name: 'Story',
  components: {
    UiButton,
  },
  props: {
    fileName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    componentName: {
      type: String,
      required: true,
    },
    groupName: {
      type: String,
      default: 'Components',
    },
  },
  data() {
    return {
      component: '',
      isCodeShown: false,
      activeCode: 'html',
    }
  },
  computed: {
    template() {
      return getComponentSection(this.component, 'template')
    },
    script() {
      return getComponentSection(this.component, 'script')
    },
    style() {
      return getComponentSection(this.component, 'style')
    },
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      setTimeout(async () => {
        let component = ''

        try {
          const fileName = `/src/views/Docs/${this.groupName}/${this.componentName}/_stories/${this.fileName}.vue`
          const componentFn = import.meta.glob('/src/views/Docs/**/_stories/*.vue', {
            as: 'raw',
          })[fileName]
          component = await componentFn()
        } catch (err) {
          //
        }

        this.component = component
        nextTick(() => {
          hljs.highlightBlock(this.$refs.html)
          hljs.highlightBlock(this.$refs.js)
          hljs.highlightBlock(this.$refs.css)
        })
      }, 100)
    },
    toggleCodeVisibility() {
      this.isCodeShown = !this.isCodeShown
    },
    setActiveCode(code) {
      this.activeCode = code
    },
  },
})
</script>

<style lang="scss">
.story {
  &__anchor {
    display: block;
    position: relative;
    top: -10rem;
    visibility: hidden;
  }

  &__title {
    margin-left: 4 * $sp;

    &:hover {
      margin-left: 0;

      &::before {
        content: '#';
        cursor: pointer;
        display: inline-block;
        width: 4 * $sp;
        color: $color-secondary;
      }
    }
  }

  &__box {
    margin: 4 * $sp;
    border: 1px solid #ccc;
  }

  &__content {
    padding: 4 * $sp;
    margin-bottom: 4 * $sp;
  }

  &__code-controls {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__code-control {
    &--active {
      background-color: $color-secondary;
      color: $color-white;

      &:hover {
        background-color: color.adjust($color-secondary, $lightness: -10%);
      }
    }
  }

  &__code {
    max-height: 25rem;
    overflow: auto;
  }
}
</style>
