<template>
  <div class="total">
    <header class="bg-sky-50">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Aysegul</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/projects" class="btn">Projects</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="page">
      <slot />
    </div>
    <footer class="bg-sky-50 z-50">
      <nav class="flex mx-auto p-2 justify-between items-center">
        <div class="flex items-center">
          <img
            src="~/assets/LogoMakr-9UJwVY.png"
            class="w-10"
            alt="Aysegul logo "
          />
          <p class="motto text-sm">
            Empowering User Experience through Code Craftsmanship.
          </p>
        </div>

        <div class="flex items-end">
          <p class="logomaker text-xs">
            “Created my free logo at LogoMakr.com“
          </p>
        </div>
      </nav>
    </footer>
  </div>
</template>
<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.router-link-exact-active {
  color: rgb(88, 89, 89);
}

header {
  height: 8vh;
  width: 100%;
}
footer {
  height: 8vh;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.page {
  height: 84vh;
  width: 100%;
}
@media screen and (max-width: 700px) {
  .motto {
    font-size: 10px;
  }
  .logomaker {
    font-size: 8px;
  }
}
@media screen and (max-width: 510px) {
  .motto {
    display: none;
  }
  .logomaker {
    font-size: 6px;
  }
}
</style>
