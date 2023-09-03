<script setup lang="ts">
import { siteConfig } from "@/config/site"

useHead({
  title: siteConfig.name,
  titleTemplate: `%s - ${siteConfig.name}`,
  meta: [
    {
      name: "description",
      content: siteConfig.description,
    },
    {
      name: "keywords",
      content: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Server Components",
        "Radix UI",
      ],
    }
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
})

useSeoMeta({

})
</script>

<template>
  <Body class="min-h-screen font-sans antialiased bg-background">
    <div class="relative flex flex-col min-h-screen">
      <SiteHeader />
      <div className="flex-1">
        <slot></slot>
      </div>
      <SiteFooter />
    </div>
  </Body>
</template>
