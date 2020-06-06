import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import themeMixin from '@theme/mixins/themes'

export default ({
  Vue
}) => {
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  Vue.mixin(themeMixin)
}
