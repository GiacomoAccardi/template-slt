
<script>
export default {
  
}
</script>

<template>
  <header class="bg-azure d-flex">
    <div class="col-4 d-flex flex-column logo-cont text-center align-items-center justify-content-center">
      <div class="head-title text-dsgrey p-0">Laura Rossi</div>
      <h2 class="text-dsgrey">Logopedista</h2>
    </div>
    <div class="col-4 d-flex head-menu flex-column logo-cont text-end">
      <a class="text-dsgrey" href="">CHI SONO</a>
      <a class="text-dsgrey" href="">SERVIZI</a>
      <a class="text-dsgrey" href="">DOVE MI TROVO</a>
      <a class="text-dsgrey" href="">CONTATTAMI</a>
      <a class="text-dsgrey" href="">COLLABORAZIONI QUI</a>
    </div>
    <div class="col-4 logo-cont d-flex align-items-center justify-content-center">
      <button class="bt bt-dsgrey">PRENDI UN APPUNTAMENTO</button>
    </div>
  </header>
</template>

<style lang="scss">
  header{
    padding: 40px;
      .logo-cont{
        line-height: 1;
        .head-title{
          font-size: 5rem;
        }
      }
      .head-menu{
        line-height: 2.5;
        a{
          text-decoration: none;
          font-weight: lighter;
        }
      }
  }
</style>