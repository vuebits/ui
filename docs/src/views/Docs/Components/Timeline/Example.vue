<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <UiTimeline :items="items">
        <template #item="{ item }">
          <UiCard
            rounded
            elevated
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
          </UiCard>
        </template>
        <template #date="{ item }">
          <span :style="{ color: item.highlight ? 'black' : 'grey' }">
            {{ item.date }}
          </span>
        </template>
        <template #more> Load more ... </template>
        <template #no-items> No items ... </template>
      </UiTimeline>
    </Preview>
    <template #controls>
      <Knobs />
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs } from '@/components'
import { UiTimeline, UiCard } from '@vuebits/ui'

export default {
  name: 'TimelineExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    UiTimeline,
    UiCard,
  },
  data() {
    return {
      items: [
        {
          date: '31.01.2021',
          time: '09:10',
          type: 'primary',
          data: {
            title: 'Some title',
            content: 'Some content',
          },
          highlight: true,
        },
        {
          date: '25.01.2021',
          time: '09:40',
          type: 'error',
          data: {
            title: 'Some title',
            content: 'Some content',
          },
          highlight: true,
        },
        {
          date: '22.01.2021',
          time: '09:10',
          data: {
            title: 'Some title',
            content: 'Some content',
          },
        },
        {
          date: '21.01.2021',
          time: '09:10',
          type: 'success',
          data: {
            title: 'Some title',
            content: 'Some content',
          },
        },
      ],
    }
  },
}
</script>
