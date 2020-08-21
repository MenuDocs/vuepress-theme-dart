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
const defaultMessages = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  mounted () {
    if (Math.random() <= 0.001) {
      document.getElementsByClassName("home-link")[0].href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  },
  methods: {
    getMsg () {
      const { notFoundMessages, mixNotFoundMessages } = this.$site.themeConfig, messages = [];

      if (notFoundMessages && Array.isArray(notFoundMessages)) {
        messages.push(...notFoundMessages, ...(mixNotFoundMessages ? defaultMessages : []))
      } else {
        messages.push(...defaultMessages)
      }

      return messages[Math.floor(Math.random() * messages.length)]
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

