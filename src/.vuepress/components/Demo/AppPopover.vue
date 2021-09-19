<template>
    <p class="demo">
         
             <app-popover>
              <a href="#" class="header-action mr-2">
                <i class="icon icon-user"></i>
                <small style="font-size: 14px;">My Account</small>
                <i class="icon icon-chevron-down" style="font-size: 14px;"></i>
              </a>
              <template #popover>
                <div class="user-account text-center p-2" style="width:200px">
                  <br>
                  <div>
                    <div class="flex f-center">
                        <img src='https://i.picsum.photos/id/965/200/200.jpg?hmac=OalaXaaPbpRZbMwF3uJMUdZIpUmyqse0anUnQcbStrM' class="w-50 round-100"/>
                    </div>
                  </div>
                  <br>
                  <button class="button primary-button">SIGN IN</button>
                  <p>NEW customer? <a href="#">Sign Up </a></p>
                  <div class="flex f-space-between">
                    <a href="">
                      <i class="icon icon-user"></i>
                      <div><small>My Account</small></div>
                    </a>
                    <a href="">
                      <i class="icon icon-check"></i>
                      <div><small>order</small> </div>
                    </a>
                    <a href="">
                      <i class="icon icon-heart"></i>
                      <div><small>Wish Lists</small> </div>
                    </a>
                  </div>
                </div>
              </template>
            </app-popover>
    </p>
</template>