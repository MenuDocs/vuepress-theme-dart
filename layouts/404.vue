<template>
  <section class="theme-container" v-if="!noFoundPageByTencent">
    <article class="content">
      <h1>404 Page Not Found!</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <a class="home-link" href="/">Take me home.</a>
    </article>
  </section>
</template>

<script>
const msgs = [
  `Fun Fact: MenuDocs was founded in 2018 by Connor.`,
  `Fun Fact: We're here to stay, the end game doesnt exist. Many more games to play!`,
  `Fun Fact: We're happily sponsored by Oxide Hosting, they're one of the best sponsors any organisations could ask for! `,
  `Fun Fact: You found a dead end.`
]

export default {
  mounted () {
    if (Math.random() <= 0.001) {
      document.getElementsByClassName("home-link")[0].href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  },
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus">
.content
  margin 4rem auto 0
  max-width 800px
  padding 0 2rem
.mod_404
  .desc
    .desc_link
      display: inline-block
      // margin: 20px 0
      background: #424242!important
      color: #ffffff
      padding: 6px 20px!important
      text-decoration: none!important
      border-radius: 4px

@media screen and (max-width: 720px)
  .mod_404
    .desc
      margin: 50px 0
    .wrapper
      margin 0!important
      padding-top 20px
</style>

