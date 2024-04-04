<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview style="height: 300px">
      <UiStepper
        v-model="currentStep"
        :steps="steps"
        :numbered="numbered"
        :vertical="vertical"
      >
        <template #step-content-1="step">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a arcu ut velit
              semper condimentum eu vitae nisl. Aenean et ex at mauris condimentum vulputate.
              Phasellus non leo sit amet erat tristique ultricies at at metus. Fusce dapibus
              purus eu ex hendrerit, at pellentesque mi aliquet. Vivamus urna metus, malesuada
              nec eros at, rutrum lacinia leo. Curabitur gravida pulvinar malesuada. Nullam
              sodales lacus aliquet massa pellentesque mattis. Donec rutrum iaculis dui at
              finibus. Suspendisse imperdiet sagittis augue, nec semper sapien. In id orci
              placerat, facilisis massa laoreet, consequat libero.
            </p>
            <p>
              Suspendisse erat lectus, vehicula scelerisque libero at, aliquam hendrerit enim.
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Sed id eros ut ex aliquet scelerisque et et quam. Nam quis ligula purus.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Vestibulum consectetur tincidunt leo, nec dictum erat cursus sed. Nam
              fringilla risus non justo blandit, eu semper nisl aliquet. Sed in justo mattis,
              placerat turpis faucibus, mollis leo.
            </p>
            <p>
              Donec posuere id velit vitae rutrum. Aliquam vitae venenatis arcu. Pellentesque
              lobortis felis sed lacinia ornare. Sed finibus diam a elit consequat, ac iaculis
              ante gravida. Nullam ac ornare nulla. Aenean dictum nulla erat. Nam quis ipsum vel
              diam malesuada mattis eget aliquam leo. Curabitur nec posuere purus. Nam erat
              lectus, consequat a pretium laoreet, porttitor eget tortor.
            </p>
            <p>
              Nam sed vehicula elit, ut varius dui. Integer est diam, tempor sed iaculis vel,
              pulvinar eget libero. Nam pharetra eleifend nisi, id tincidunt dui dapibus sed.
              Donec lacinia tortor non elit bibendum, imperdiet ornare nunc vestibulum. Ut at
              enim quis elit volutpat placerat. Phasellus vitae tempor lacus, id pulvinar nibh.
              Duis molestie magna consectetur, egestas neque ut, pretium magna. Fusce pretium
              neque sit amet augue vehicula tristique. Etiam rutrum ipsum est, non laoreet
              mauris consectetur eget. Aenean pharetra est vitae ante faucibus vulputate.
            </p>
            <p>
              Vivamus odio lectus, fringilla nec arcu at, accumsan malesuada elit. Vivamus
              lectus felis, dictum sit amet velit hendrerit, vulputate varius dolor. Vivamus
              ante purus, pretium vel dignissim eu, rhoncus eu eros. Morbi turpis mauris,
              accumsan in tortor sit amet, volutpat euismod dui. Nulla aliquam tincidunt
              accumsan. Sed non eros nisl. Aliquam ante urna, auctor vel lorem eu, tincidunt
              tempus erat. Nunc massa lacus, consequat quis dapibus a, vulputate ut mi. Nullam
              faucibus libero non arcu cursus, quis hendrerit odio maximus. Suspendisse viverra
              leo quam, vitae accumsan magna dictum vitae. Praesent vel feugiat diam. Nulla
              metus augue, pellentesque ut ligula sagittis, dignissim tristique erat. Mauris
              sagittis vehicula enim vel eleifend.
            </p>
          </div>
          <UiButton
            color="primary"
            dark
            rounded
            @click="completeStep(step)"
          >
            Submit
          </UiButton>
        </template>
        <template #step-content-2>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a arcu ut velit
              semper condimentum eu vitae nisl. Aenean et ex at mauris condimentum vulputate.
              Phasellus non leo sit amet erat tristique ultricies at at metus. Fusce dapibus
              purus eu ex hendrerit, at pellentesque mi aliquet. Vivamus urna metus, malesuada
              nec eros at, rutrum lacinia leo. Curabitur gravida pulvinar malesuada. Nullam
              sodales lacus aliquet massa pellentesque mattis. Donec rutrum iaculis dui at
              finibus. Suspendisse imperdiet sagittis augue, nec semper sapien. In id orci
              placerat, facilisis massa laoreet, consequat libero.
            </p>
            <p>
              Suspendisse erat lectus, vehicula scelerisque libero at, aliquam hendrerit enim.
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Sed id eros ut ex aliquet scelerisque et et quam. Nam quis ligula purus.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Vestibulum consectetur tincidunt leo, nec dictum erat cursus sed. Nam
              fringilla risus non justo blandit, eu semper nisl aliquet. Sed in justo mattis,
              placerat turpis faucibus, mollis leo.
            </p>
            <p>
              Donec posuere id velit vitae rutrum. Aliquam vitae venenatis arcu. Pellentesque
              lobortis felis sed lacinia ornare. Sed finibus diam a elit consequat, ac iaculis
              ante gravida. Nullam ac ornare nulla. Aenean dictum nulla erat. Nam quis ipsum vel
              diam malesuada mattis eget aliquam leo. Curabitur nec posuere purus. Nam erat
              lectus, consequat a pretium laoreet, porttitor eget tortor.
            </p>
          </div>
        </template>
        <template #step-header-right="step">
          <UiButton
            v-if="step.data.skippable"
            color="primary"
            dark
            rounded
            @click="completeStep(step)"
          >
            {{ step.isLast ? 'Go to first step' : 'Continue' }}
          </UiButton>
        </template>
      </UiStepper>
    </Preview>
    <template #controls>
      <Knobs>
        <KnobBoolean
          v-model="numbered"
          label="Numbered"
        />
        <KnobBoolean
          v-model="vertical"
          label="Vertical"
        />
      </Knobs>
    </template>
  </Sandbox>
</template>

<script>
import { Preview, Sandbox, Knobs, KnobBoolean } from '@/components'
import { UiStepper, UiButton } from '@vuebits/ui'

export default {
  name: 'StepperExample',
  components: {
    Preview,
    Sandbox,
    Knobs,
    KnobBoolean,
    UiStepper,
    UiButton,
  },
  data() {
    return {
      numbered: true,
      vertical: false,
      currentStep: 1,
      steps: [
        {
          title: 'Step 1',
          subtitle: 'I am step 1',
          complete: false,
          content: 'Content of step 1',
        },
        {
          icon: 'calendar',
          title: 'Step 2',
          subtitle: 'I am step 2',
          complete: false,
          content: 'Content of step 2',
          skippable: true,
        },
        {
          title: 'Step 3',
          subtitle: 'I am step 3',
          complete: false,
          content: 'Content of step 3',
          skippable: true,
        },
      ],
    }
  },
  methods: {
    completeStep(step) {
      this.steps[step.index].complete = true
      step.goTo(step.isLast ? 1 : step.position + 1)
    },
  },
}
</script>
