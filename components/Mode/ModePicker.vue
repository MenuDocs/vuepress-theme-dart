<template>
  <div class="mode-options">
    <h4 class="title">Choose Colour (WIP)</h4>
    <ul class="color-accent-options">
      <li
        v-for="(color, index) in accentColors"
        :key="index"
        :class="getClass(color.color, 'color')"
        @click="selectColor(color.color)"
      >{{ color.title }}</li>
    </ul>
    <hr />
    <h4 class="title">Choose Theme</h4>
    <ul class="color-mode-options">
      <li
        v-for="(mode, index) in modeOptions"
        :key="index"
        :class="getClass(mode.mode, 'mode')"
        @click="selectMode(mode.mode)"
      >{{ mode.title }}</li>
    </ul>
  </div>
</template>

<script>
import applyMode from './applyMode'

export default {
  name: 'ModeOptions',

  data () {
    return {
      accentColors: [ 
        { color: "red", title: "Red" },
        { color: "blue", title: "Blue" },
        { color: "green", title: "Green" },
        { color: "purple", title: "Purple" }
      ],
      modeOptions: [
        { mode: 'dark', title: 'Dark' },
        { mode: 'auto', title: 'Auto' },
        { mode: 'light', title: 'Light' }
      ],
      currentColor: null,
      currentMode: 'auto'
    }
  },

  mounted () {
    // modePicker 开启时默认使用用户主动设置的模式
    this.currentMode = localStorage.getItem('mode') || this.$themeConfig.mode || 'auto'

    // Dark and Light autoswitches
    // 为了避免在 server-side 被执行，故在 Vue 组件中设置监听器
    var that = this
    window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
      that.$data.currentMode === 'auto' && applyMode(that.$data.currentMode)
    })
    window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
      that.$data.currentMode === 'auto' && applyMode(that.$data.currentMode)
    })

    applyMode(this.currentMode)
  },

  methods: {
    selectMode (mode) {
      if (mode !== this.currentMode) {
        this.currentMode = mode
        applyMode(mode)
        localStorage.setItem('mode', mode)
      }
    },
    selectColor (color) {
      if (color !== this.currentColor) {
        this.currentColor = color
        this.setColor(color)
      }
    },
    getClass (value, type) {
      type = type === "mode" ? this.currentMode : this.currentColor
      return value !== type ? value : `${value} active`
    }
  }
}
</script>

<style lang="stylus">
@require '../../styles/mode.styl'

.mode-options
  background-color var(--background-color)
  min-width: max-content;
  margin: 0;
  padding: 1em;
  box-shadow var(--box-shadow);
  border-radius: $borderRadius;
  .title
    margin-top 0
    margin-bottom .6rem
    font-weight bold
    color var(--text-color)
  .color-mode-options
    display: flex;
    flex-wrap wrap
    li
      text-align: center;
      font-size 12px
      color var(--text-color)
      line-height 18px
      padding 3px 6px
      border-top 1px solid #666
      border-bottom 1px solid #666
      background-color var(--background-color)
      cursor pointer
      &.dark
        border-radius: $borderRadius 0 0 $borderRadius
        border-left 1px solid #666
      &.light
        border-radius: 0 $borderRadius $borderRadius 0
        border-right 1px solid #666
      &.mode
        background-color: $accentColor;
        color #fff
      &.active
        background-color: $accentColor;
        color #fff
      &:not(.mode)
        border-right 1px solid #666
  .color-accent-options
    display: flex;
    flex-wrap wrap
    li
      text-align: center;
      font-size 12px
      color var(--text-color)
      line-height 18px
      padding 3px 6px
      border-top 1px solid #666
      border-bottom 1px solid #666
      background-color var(--background-color)
      cursor pointer
      &.red
        border-radius: $borderRadius 0 0 $borderRadius
        border-left 1px solid #666
      &.purple
        border-radius: 0 $borderRadius $borderRadius 0
        border-right 1px solid #666
      &.color
        background-color: $accentColor;
        color #fff
      &.active
        background-color: $accentColor;
        color #fff
      &:not(.color)
        border-right 1px solid #666
</style>
