<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <div>
        <VToolbar
          :dark="dark"
          :light="light"
          :absolute="absolute"
          :fixed="fixed"
          style="height: 10rem;"
        >
          <template #top-left>
            top-left
          </template>
          <template #top-center>
            top-center
          </template>
          <template #top-right>
            top-right
          </template>
          <template #left>
            <VToolbarHamburger
              v-model="isMenuExpandedOnMobile"
              style="padding: 1rem; font-size: 3rem;"
            />
            <VToolbarLogo
              href="/"
              src="https://via.placeholder.com/350x60?text=logo"
              alt="Home page"
            />
            Left side
          </template>
          <template #center>
            Center side
          </template>
          <template #right>
            <VToolbarMenu
              :dark="dark"
              :light="light"
              :expanded-on-mobile="isMenuExpandedOnMobile"
              style="background-color: red;"
              @click-outside="closeAll"
            >
              <VToolbarMenuItem href="/">
                Link
              </VToolbarMenuItem>
              <VToolbarMenuDropdown
                v-model="isActiveDropdown1"
                active-color="primary"
                active-text-color="white"
              >
                Dropdown 1
                <template #dropdown>
                  <div style="width: 30rem; border: 1px solid black; background-color: white;padding: 1rem;">
                    To left
                  </div>
                </template>
              </VToolbarMenuDropdown>
              <VToolbarMenuDropdown
                v-model="isActiveDropdown2"
                position="right"
                active-color="secondary"
                active-text-color="white"
              >
                Dropdown 2
                <template #dropdown>
                  <div style="width: 40rem; border: 1px solid black; background-color: white;padding: 1rem;">
                    To right
                  </div>
                </template>
              </VToolbarMenuDropdown>
              <VToolbarMenuDropdown
                :model-value="isActiveDropdown3"
                active-color="white"
                active-text-color="primary"
                position="fullsize"
                @open="isActiveDropdown3 = true; isActiveDropdown1 = false; isActiveDropdown2 = false"
                @close="isActiveDropdown3 = false"
              >
                Dropdown 3
                <template #dropdown>
                  <div style="border: 1px solid black; background-color: white;padding: 1rem;">
                    Full size
                  </div>
                </template>
              </VToolbarMenuDropdown>
            </VToolbarMenu>
            Right side
          </template>
        </VToolbar>
        <div
          style="
            height:20rem;
            width: 100%;
            background-color: grey;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          Content with absolute position and z-index 2
        </div>
      </div>
    </Preview>
  </Sandbox>
</template>

<script>
import {
  VToolbar,
  VToolbarLogo,
  VToolbarMenu,
  VToolbarMenuItem,
  VToolbarMenuDropdown,
  VToolbarHamburger,
} from '@vuebits/ui';
import {
  Preview,
  Sandbox,
} from '@/components';

export default {
  name: 'ToolbarExample',
  components: {
    Preview,
    Sandbox,
    VToolbar,
    VToolbarLogo,
    VToolbarMenu,
    VToolbarMenuItem,
    VToolbarMenuDropdown,
    VToolbarHamburger,
  },
  data () {
    return {
      dark: true,
      light: false,
      absolute: false,
      fixed: false,
      isActiveDropdown1: false,
      isActiveDropdown2: true,
      isActiveDropdown3: false,
      isMenuExpandedOnMobile: false,
    };
  },
  methods: {
    closeAll () {
      this.isActiveDropdown1 = false;
      this.isActiveDropdown2 = false;
      this.isActiveDropdown3 = false;
      this.isMenuExpandedOnMobile = false;
    },
  },
};
</script>
