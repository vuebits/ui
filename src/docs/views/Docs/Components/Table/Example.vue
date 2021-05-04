<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VTable
        :headers="headers"
        :items="items"
      />
    </Preview>
    <template #controls>
      <Knobs />
    </template>
  </Sandbox>
</template>

<script>
import {
  Preview,
  Sandbox,
  Knobs
} from '@/docs/components';
import {
  VTable
} from '@/components';

export default {
  name: 'TableExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    VTable
  },
  data () {
    return {
      headers: [
        {
          name: 'id',
          text: 'Id'
        },
        {
          name: 'name',
          text: 'Name'
        },
        {
          name: 'age',
          text: 'Age'
        }
      ],
      items: [
        {
          id: '1',
          name: 'John Doe',
          age: 35
        },
        {
          id: '2',
          name: 'Martin Doyle',
          age: 48
        },
        {
          id: '3',
          name: 'Adam Smith',
          age: 23
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
