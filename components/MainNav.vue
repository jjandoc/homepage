<template lang='pug'>
  nav
    ul.nav-list
      li
        nuxt-link(to='/') Work
      li
        nuxt-link(to='/about') About
      li
        nuxt-link(to='/blog') Blog
      li
        nuxt-link(to='/resume') Resume
      li
        nuxt-link(to='/contact') Contact
</template>

<style lang='scss'>
nav {
  background: orangered;
  color: #fff;
}
</style>
