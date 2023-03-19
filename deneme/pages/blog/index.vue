<template>
  <main class="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
    <div class="mx-auto max-w-lg lg:max-w-7xl">
      <div class="border-b border-b-gray-200 pb-6">
        <h1
          class="lg:text-5xl text-2xl leading-normal font-semibold text-center"
        >
          Check Out My Latest Blog Posts
        </h1>
        <h1
          class="lg:text-6xl text-4xl text-center leading-normal font-bold rainbow-text"
        >
          Explore With Me!
        </h1>
        <h1 class="lg:text-5xl text-2xl leading-normal text-center">
          Recent Posts
        </h1>
      </div>
      <div class="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        <ContentList path="/blog" v-slot="{ list }">
          <div
            v-for="article in list"
            :key="article._path"
            class="flex flex-col justify-between rounded-lg border border-gray-200 p-4"
          >
            <nuxt-link :href="article._path">
              <p class="text-xl text-gray-900">{{ article.title }}</p>
              <p class="mt-3 text-gray-500">{{ article.description }}</p>
              <img :src="article.img" />
            </nuxt-link>

            <div class="mt-6">
              <a
                :href="`?author=${article.authorname}`"
                class="text-sm font-medium text-gray-900"
              >
                {{ article.authorname }}
              </a>
              <div class="text-sm text-gray-500">
                <time datetime="2020-03-16">{{ article.date }}</time>
              </div>
            </div>
          </div>
        </ContentList>
      </div>
    </div>
  </main>
</template>
<style scoped>
img {
  max-height: 100%;
}
</style>
