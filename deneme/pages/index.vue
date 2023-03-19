<template>
  <div
    class="home grid grid-cols-1 md:grid-cols-2 gap-2 h-full overflow-auto max-h-screen"
  >
    <div class="profiletext mt-10 text-center sm:text-left">
      <h2>Hi,</h2>
      <h2>I'm Aysegul,</h2>
      <h2>a front-end developer</h2>
      <h2>and, industrial engineer.</h2>
    </div>
    <div class="parent-container profilepic order-first md:order-last">
      <img
        src="~/assets/profile.png"
        class="img-fluid m-auto card-img"
        alt="profilepicture"
      />
      <div class="social-icons">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/aysegulkaradan/"
          class="icons mx-4"
          alt="linkedin"
        >
          <Icon name="uil:linkedin" />
        </a>
        <a
          target="_blank"
          href="mailto:hello@aysegulk.me"
          class="icons mx-4"
          alt="mailto"
        >
          <Icon name="uil:envelope" />
        </a>
        <a
          target="_blank"
          alt="github"
          href="https://github.com/karadanay7"
          class="icons mx-4"
        >
          <Icon name="uil:github" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.icons {
  font-size: 50px;

  cursor: pointer;
  color: white;
}
.parent-container {
  position: relative;
}
.social-icons {
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.social-icons a {
  margin: 0px 10px;
}
.home {
  justify-content: space-around;
  background: url(~/assets/triangles-1430105_1280.webp);
  background-size: cover;
  max-width: 1000cm;
  min-height: 89%;
  color: whitesmoke;
  letter-spacing: 3px;
}
.profilepic {
  padding: 0;
  margin-top: 20%;
  text-align: center;
}
.card-img {
  object-fit: cover;
  max-height: 50vh;
  max-width: 50vh;
  border-radius: 50%;

  box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.9);
}

h2 {
  margin-left: 30px;
  font-size: 50px;
  font-family: "Source Code Pro", monospace;
  justify-content: left;
}

@media screen and (max-width: 994px) {
  h2 {
    font-size: 45px;
  }

  .icons {
    font-size: 30px;
    margin-left: 70px;
    margin-right: 5px;
  }
}
@media screen and (max-width: 733px) {
  h2 {
    font-size: 24px;
  }

  .icons {
    font-size: 30px;
    margin-left: 70px;
    margin-right: 5px;
  }
  .card-img {
    max-height: 30vh;
    max-width: 30vh;
  }
}
</style>
