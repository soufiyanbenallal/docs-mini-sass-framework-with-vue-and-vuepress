# Tabs

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mi eget mauris pharetra et ultrices
neque ornare.

## Example

<div class="p-4">
    <AppTabs  />
</div>

:::: tabs :options="{ useUrlFragment: false }"

<!-- ::: tab code
```html
```
::: -->

::: tab source
``` vue
<template>
 <div class="" >
  <div class="tabs" >
    <ul class="flex list-unstyled f-space-between">
      <li v-for="(tab, index) in tabs" :class="{'is-active': show == index}" :key="'tabs' +index"><a @click.prevent="show = index">{{tab.title}}</a></li>
    </ul>
  </div>
  <div class="texts" >
    <transition-group name="fade-up" target="div" appear @click.native="navigate($event); alerts($event);">
      <template v-for="(tab, index) in tabs">
        <div  v-if="show === index" :key="'tabs-group' + index" v-html="tab.content"></div>
      </template>
    </transition-group>
  </div>
</div>
</template>
<script>
export default {
  name: 'AppRating',
  data () {
    const tabs = [
      {
        title: 'Pictures',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mi eget mauris pharetra et ultrices neque ornare.'
      },
      {
        title: 'Music',
        content: 'Music content. Wanna see some <a href="#" data-show="3">Documents</a> content?'
      },
      {
        title: 'Videos',
        content: 'Videos content. <a href="#" data-alert="VIDEOS!!!">Alert videos</a>'
      },
      {
        title: 'Documents',
        content: 'Documents content. Wanna see some <a href="#" data-show="1">Music</a> content?'
      }
    ]
    return {
      show: 0,
      tabs
    }
  },
  methods: {
    navigate: function (e) {
      if (e.target.dataset.show) {
        e.preventDefault()
        this.show = e.target.dataset.show
      }
    },
    alerts: function (e) {
      if (e.target.dataset.alert) {
        e.preventDefault()
        alert(e.target.dataset.alert)
      }
    }
  }
}
</script>
```
:::

::::