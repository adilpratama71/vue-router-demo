<template>
  <div class="navbar navbar-expand bg-dark navbar-dark">
    <div class="container d-flex justify-content-between">
      <a href="/" class="navbar-brand">Logo</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/pokemon" class="nav-link">Pokemon</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/card" class="nav-link">Card</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
