<template>
  <div
    :class="$bem({})"
  >
    <VTile
      :class="$bem({e: 'code-box'})"
      rounded
    >
      <pre
        ref="code"
        :class="codeClasses"
      ><code><slot>{{ cleanCode }}</slot></code></pre>
    </VTile>
    <div
      :class="$bem({e: 'bottom'})"
    >
      <VButton
        elevated
        size="sm"
        :class="$bem({e: 'copy'})"
        @click="copy"
      >
        {{ copyText }}
      </VButton>
    </div>
    <div
      ref="clipboard"
    />
  </div>
</template>

<script>
import { nextTick } from 'vue';
import hljs from 'highlight.js';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';
import bash from 'highlight.js/lib/languages/bash';
import {
  VTile,
  VButton
} from '@/components';
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', scss);
hljs.registerLanguage('bash', bash);

export default {
  name: 'CodeBlock',
  components: {
    VTile,
    VButton
  },
  props: {
    language: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      copyText: 'Copy'
    };
  },
  computed: {
    codeClasses () {
      return [
        ...this.$bem({ e: 'code' }),
        `language-${this.language}`,
        'hljs'
      ];
    },
    cleanCode () {
      return this.code.trim();
    }
  },
  created () {
    this.load();
  },
  methods: {
    async load () {
      nextTick(() => {
        hljs.highlightBlock(this.$refs.code);
      });
    },
    copy () {
      this.copyText = 'Copied!';

      const clipboard = document.createElement('textarea');
      clipboard.innerHTML = this.cleanCode;
      const parentElement = this.$refs.clipboard;
      parentElement.appendChild(clipboard);
      clipboard.select();
      clipboard.setSelectionRange(0, 99999); /* For mobile devices */
      document.execCommand('copy');
      parentElement.removeChild(clipboard);

      setTimeout(() => {
        this.copyText = 'Copy';
      }, 2000);
    }
  }
};
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
    width: 100px;
  }

  &__clipboard {
    padding: 0;
    margin: 0;
    color: transparent;
  }

}
</style>
