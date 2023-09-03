<script setup lang="ts">
import { type NuxtLinkProps } from '#app'

import { Button } from "@/registry/new-york/ui/button"
import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"

type MobileLinkEmits = {
  openChange: (open: boolean) => void
}

interface MobileLinkProps extends NuxtLinkProps {
  class?: string
}



const MobileLink = defineComponent<MobileLinkProps, MobileLinkEmits>({
  name: "MobileLink",
  emits: ["openChange"],
  setup(props, ctx) {
    return () => h(
      'NuxtLink',
      {
        ...props,
        class: cn(props.class),
        onClick: () => ctx.emit("openChange", false),
      },
      ctx.slots
    )
  },
})

const open = ref(false)
</script>

<template>
  <!-- <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          class="px-0 mr-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <ViewVerticalIcon class="w-5 h-5" />
          <span class="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="pr-0"> -->
  <MobileLink to="/" class="flex items-center" @open-change="open = $event">
    <IconLogo class="w-4 h-4 mr-2" />
    <span class="font-bold">{{ siteConfig.name }}</span>
  </MobileLink>
  <!-- <ScrollArea class="my-4 h-[calc(100vh-8rem)] pb-10 pl-6"> -->
    <div class="flex flex-col space-y-3">
      <MobileLink v-for='item in docsConfig.mainNav' :key='item.href' :to='item.href' @open-change='open = $event'>
        {{ item.title }}
      </MobileLink>
    </div>
    <div class="flex flex-col space-y-2">
      <div v-for="(sidebarItem, index) in docsConfig.sidebarNav" :key='index' class="flex flex-col pt-6 space-y-3">
        <h4 class="font-medium">{{ sidebarItem.title }}</h4>
        <template v-for="item in sidebarItem.items" :key=item.href>
          <template v-if="!item.disabled">
            <template v-if="item.href">
              <MobileLink :to=item.href @open-change='open = $event' class="text-muted-foreground">
                {{ item.title }}
              </MobileLink>
            </template>
            <template v-else>
              {{ item.title }}
            </template>
          </template>
        </template>
      </div>
    </div>
    <!-- </ScrollArea>
      </SheetContent>
    </Sheet> -->
</template>
