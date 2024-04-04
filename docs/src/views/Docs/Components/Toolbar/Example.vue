<template>
  <Sandbox
    id="example"
    title="Example"
  >
    <Preview>
      <div>
        <UiToolbar
          :dark="dark"
          :light="light"
          :absolute="absolute"
          :fixed="fixed"
          style="height: 10rem"
        >
          <template #top-left> top-left </template>
          <template #top-center> top-center </template>
          <template #top-right> top-right </template>
          <template #left>
            <UiToolbarHamburger
              v-model="isMenuExpandedOnMobile"
              style="padding: 1rem; font-size: 3rem"
            />
            <UiToolbarLogo
              href="/"
              src="https://via.placeholder.com/350x60?text=logo"
              alt="Home page"
            />
            Left side
          </template>
          <template #center> Center side </template>
          <template #right>
            <UiToolbarMenu
              :dark="dark"
              :light="light"
              :expanded-on-mobile="isMenuExpandedOnMobile"
              style="background-color: #f00"
              @click-outside="closeAll"
            >
              <UiToolbarMenuItem href="/"> Link </UiToolbarMenuItem>
              <UiToolbarMenuDropdown
                v-model="isActiveDropdown1"
                active-color="primary"
                active-text-color="white"
              >
                Dropdown 1
                <template #dropdown>
                  <div
                    style="
                      width: 30rem;
                      border: 1px solid #000;
                      background-color: #fff;
                      padding: 1rem;
                    "
                  >
                    To left
                  </div>
                </template>
              </UiToolbarMenuDropdown>
              <UiToolbarMenuDropdown
                v-model="isActiveDropdown2"
                position="right"
                active-color="secondary"
                active-text-color="white"
              >
                Dropdown 2
                <template #dropdown>
                  <div
                    style="
                      width: 40rem;
                      border: 1px solid #000;
                      background-color: #fff;
                      padding: 1rem;
                    "
                  >
                    To right
                  </div>
                </template>
              </UiToolbarMenuDropdown>
              <UiToolbarMenuDropdown
                :model-value="isActiveDropdown3"
                active-color="white"
                active-text-color="primary"
                position="fullsize"
                @open="
                  () => {
                    isActiveDropdown3 = true
                    isActiveDropdown1 = false
                    isActiveDropdown2 = false
                  }
                "
                @close="isActiveDropdown3 = false"
              >
                Dropdown 3
                <template #dropdown>
                  <div style="border: 1px solid #000; background-color: #fff; padding: 1rem">
                    Full size
                  </div>
                </template>
              </UiToolbarMenuDropdown>
            </UiToolbarMenu>
            Right side
          </template>
        </UiToolbar>
        <div
          style="
            height: 20rem;
            width: 100%;
            background-color: #888;
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
  UiToolbar,
  UiToolbarLogo,
  UiToolbarMenu,
  UiToolbarMenuItem,
  UiToolbarMenuDropdown,
  UiToolbarHamburger,
} from '@vuebits/ui'
import { Preview, Sandbox } from '@/components'

export default {
  name: 'ToolbarExample',
  components: {
    Preview,
    Sandbox,
    UiToolbar,
    UiToolbarLogo,
    UiToolbarMenu,
    UiToolbarMenuItem,
    UiToolbarMenuDropdown,
    UiToolbarHamburger,
  },
  data() {
    return {
      dark: true,
      light: false,
      absolute: false,
      fixed: false,
      isActiveDropdown1: false,
      isActiveDropdown2: true,
      isActiveDropdown3: false,
      isMenuExpandedOnMobile: false,
    }
  },
  methods: {
    closeAll() {
      this.isActiveDropdown1 = false
      this.isActiveDropdown2 = false
      this.isActiveDropdown3 = false
      this.isMenuExpandedOnMobile = false
    },
  },
}
</script>
