<script setup lang="ts">
import { siteConfig } from "@/config/site"

const {path} = useRoute()
</script>

<template>
 <div class="hidden mr-4 md:flex">
      <NuxtLink to="/" class="flex items-center mr-6 space-x-2">
        <IconLogo class="w-6 h-6" />
        <span class="hidden font-bold sm:inline-block">
          {{siteConfig.name}}
        </span>
      </NuxtLink>
      <nav class="flex items-center space-x-6 text-sm font-medium">
        <NuxtLink
          to="/docs"
          :class='cn("transition-colors hover:text-foreground/80", path === "/docs" ? "text-foreground" : "text-foreground/60" )'
        >
          Documentation
        </NuxtLink>
        <NuxtLink
          to="/docs/components"
          :class='cn( "transition-colors hover:text-foreground/80", path?.startsWith("/docs/components") ? "text-foreground" : "text-foreground/60" )'
        >
          Components
        </NuxtLink>
        <NuxtLink
          to="/themes"
          :class='cn( "transition-colors hover:text-foreground/80", path?.startsWith("/themes") ? "text-foreground" : "text-foreground/60" )'
        >
          Themes
        </NuxtLink>
        <NuxtLink
          to="/examples"
          :class='cn( "transition-colors hover:text-foreground/80", path?.startsWith("/examples") ? "text-foreground" : "text-foreground/60" )'
        >
          Examples
        </NuxtLink>
        <NuxtLink
          :to=siteConfig.links.github
          :class='cn("hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block")'
        >
          GitHub
        </NuxtLink>
      </nav>
    </div>
</template>
