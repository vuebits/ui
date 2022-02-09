<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <VHorizontalScroll style="width: 500px;">
        <div style="width: 1500px;">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id luctus mauris. Sed consequat sodales mollis. Vivamus eu metus urna. Donec rhoncus sapien a maximus posuere. Morbi pellentesque vitae massa sit amet pellentesque. Nam lacinia, dui et laoreet placerat, odio ex gravida mi, vel tempor lectus enim sit amet urna. Quisque scelerisque quam eget diam fermentum, a porta turpis maximus. Cras eget consectetur ipsum. Integer ex dui, ultrices et eleifend eget, ultricies congue diam. Morbi ac nibh fringilla, aliquet urna eget, egestas augue. Fusce a hendrerit justo, eget faucibus lacus. Fusce a efficitur neque. Curabitur ullamcorper diam at semper tempus. Mauris ipsum urna, viverra sed ipsum ut, pulvinar molestie dui.
          </div>
          <div>
            Nulla at pellentesque ante. Ut sollicitudin mollis imperdiet. Sed viverra, metus in convallis aliquam, dolor urna consequat tortor, a elementum odio lacus in sapien. Vestibulum eleifend ex suscipit mauris viverra, nec ultrices elit dapibus. Fusce lacinia arcu massa, in aliquet lacus egestas tincidunt. Proin malesuada est erat, euismod pulvinar tellus volutpat eget. Pellentesque egestas, odio a cursus sollicitudin, velit odio cursus lorem, a faucibus erat diam et lorem. Phasellus facilisis ipsum vestibulum sem sagittis, id lacinia quam feugiat. Integer sit amet arcu ac elit ultricies pretium. Maecenas sit amet ipsum enim. Ut eu fringilla tellus.
          </div>
          <div>
            Pellentesque egestas, metus pellentesque hendrerit facilisis, enim magna rhoncus purus, sed fermentum ipsum enim aliquet risus. Nulla turpis massa, ullamcorper et tellus non, porttitor ornare felis. Aenean tempor et odio vitae volutpat. Donec ornare sapien ut dui ullamcorper convallis. Quisque lacinia blandit aliquet. Nunc magna erat, facilisis nec dictum nec, tempor at justo. Aenean a ullamcorper magna. Quisque magna mauris, dapibus in lobortis vel, faucibus et nisi.
          </div>
          <div>
            Curabitur fringilla, velit ut bibendum bibendum, leo mauris porta odio, nec scelerisque dolor est et nisi. Sed lobortis neque libero, a elementum nisi volutpat sit amet. Donec sagittis dapibus laoreet. Fusce ultricies feugiat nibh, id imperdiet nunc pulvinar eu. Nunc malesuada orci non neque mollis, sit amet tempor quam lobortis. Aliquam gravida erat eget sagittis egestas. Etiam consequat nulla eget est pulvinar interdum. Curabitur gravida consequat nunc, in viverra quam. Etiam et suscipit justo. Vivamus vehicula eleifend est id mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce cursus semper nunc ut fringilla. Vivamus vel velit facilisis, euismod tellus eget, tempus tellus.
          </div>
          <div>
            Donec nec eros sodales, tempor libero at, ornare lectus. Sed sit amet quam feugiat lacus varius maximus eu at dolor. Integer nisi tellus, vestibulum eget maximus et, dictum vitae lacus. Nunc velit tellus, pellentesque sit amet posuere ac, vehicula a sem. Suspendisse tortor leo, condimentum suscipit efficitur vel, ultrices sit amet tortor. Pellentesque dictum, dui non efficitur efficitur, mi est mollis magna, nec bibendum mi arcu at lacus. Maecenas molestie facilisis nulla.
          </div>
        </div>
      </VHorizontalScroll>
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
  Knobs,
} from '@/components';
import {
  VHorizontalScroll,
} from '@vuebits/ui';

export default {
  name: 'HorizontalScrollExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    VHorizontalScroll,
  },
  data () {
    return {
    };
  },
};
</script>
