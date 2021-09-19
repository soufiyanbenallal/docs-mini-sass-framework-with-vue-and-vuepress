<template>
    <header class="header" role="banner">
      <div class="container w-100" >
        <div class="header-left">
          <div class="header-brand flex" style="align-items: center;">
            <button type="button" class="header-action" >
              <i class="icon icon-menu"></i>
            </button>
            <a href="#" class="header-brand-image" data-image-loading-animation>
              <img class="lazyload js" src="/images/logo.svg" data-src="https://i.picsum.photos/id/622/200/50.jpg?hmac=Gm6oR9fsvGdjNphma4shjfY2yE8xUp0Qiweghr08jH0"
                data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-sizes="auto"
                :style="{ 'max-width': 160 + 'px'} ">
            </a>
          </div>
        </div>
        <div class="header-center">
          <div class="w-100" style="max-width: 450px;margin: auto;">
            <nav class="flex">
              <input type="search" name="" class="flat" placeholder="Search by Year, Make Model or Product Type..." id="" style="border: 2px solid #32383a">
              <button class="button p-2 flat" style="background-color:#32383a"><i class="icon icon-search"
                  style="font-size: 24px"></i></button>
            </nav>

          </div>
        </div>
        <div class="header-right">
          <div class="header-actions">

            <a href="#" class="header-action" >
              <i class="icon icon-heart"></i>
            </a>

            <a href="#" class="header-action" >
              <i class="icon icon-shopping-cart"></i>
              <span class="cart-count" >15</span>
            </a>

          </div>
        </div>
      </div>
    </header>
</template>
<script>
export default {
    
}
</script>