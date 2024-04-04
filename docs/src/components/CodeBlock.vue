<template>
  <div :class="bem({})">
    <UiTile
      :class="bem({ e: 'code-box' })"
      rounded
    >
      <pre
        ref="codeEl"
        :class="codeClasses"
      ><code><slot>{{ cleanCode }}</slot></code></pre>
    </UiTile>
    <div :class="bem({ e: 'bottom' })">
      <UiButton
        elevated
        size="sm"
        :class="bem({ e: 'copy' })"
        @click="copy"
      >
        {{ copyText }}
      </UiButton>
    </div>
    <div ref="clipboardEl" />
  </div>
</template>

<script setup lang="ts">
import { nextTick, computed, ref, toRefs } from 'vue'
import { defineBem } from '@vuebits/ui'
import hljs from 'highlight.js'
import xml from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'
import scss from 'highlight.js/lib/languages/scss'
import bash from 'highlight.js/lib/languages/bash'
import { UiTile, UiButton } from '@vuebits/ui'
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', scss)
hljs.registerLanguage('bash', bash)

type Props = {
  language: string
  code: string
}

const props = withDefaults(defineProps<Props>(), {
  language: '',
  code: '',
})

const { language, code } = toRefs(props)

const copyText = ref('Copy')
const clipboardEl = ref<HTMLElement | null>(null)
const codeEl = ref<HTMLElement | null>(null)

const bem = defineBem('CodeBlock')

const codeClasses = computed(() => {
  return [...bem({ e: 'code' }), `language-${language.value}`, 'hljs']
})

const cleanCode = computed(() => {
  return code.value.trim()
})

const load = async () => {
  nextTick(() => {
    if (!codeEl.value) return
    hljs.highlightBlock(codeEl.value)
  })
}

const copy = () => {
  copyText.value = 'Copied!'
  const clipboard = document.createElement('textarea')
  clipboard.innerHTML = cleanCode.value
  const parentElement = clipboardEl.value
  if (!parentElement) return
  parentElement.appendChild(clipboard)
  clipboard.select()
  clipboard.setSelectionRange(0, 99999) /* For mobile devices */
  document.execCommand('copy')
  parentElement.removeChild(clipboard)

  setTimeout(() => {
    copyText.value = 'Copy'
  }, 2000)
}

load()
</script>

<style lang="scss">
.code-block {
  margin-bottom: 4 * $sp;

  &__code-box {
    overflow: hidden;
  }

  &__bottom {
    text-align: right;
    width: 100%;
    padding: 0 2 * $sp;
  }

  &__copy {
    width: 10rem;
  }

  &__clipboard {
    padding: 0;
    margin: 0;
    color: transparent;
  }
}
</style>
