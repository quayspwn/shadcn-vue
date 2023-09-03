<script setup lang="ts">
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/registry/new-york/ui/button"

</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur">
    <div class="container flex items-center h-14">
      <MainNav />
      <MobileNav />
      <div class="flex items-center justify-between flex-1 space-x-2 md:justify-end">
        <div class="flex-1 w-full md:w-auto md:flex-none">
          <CommandMenu />
        </div>
        <nav class="flex items-center">
          <NuxtLink :to=siteConfig.links.github target="_blank" rel="noreferrer">
            <div :class='cn( buttonVariants({ variant: "ghost", }), "w-9 px-0" )'>
              <IconGithub class="w-4 h-4" />
              <span class="sr-only">GitHub</span>
            </div>
          </NuxtLink>
          <NuxtLink :to= siteConfig.links.twitter  target="_blank" rel="noreferrer">
            <div :class='cn( buttonVariants({ variant: "ghost", }), "w-9 px-0" )'>
              <IconTwitter class="w-4 h-4 fill-current" />
              <span class="sr-only">Twitter</span>
            </div>
          </NuxtLink>
          <!-- <ModeToggle /> -->
        </nav>
      </div>
    </div>
  </header>
</template>
