# NavBar

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mi eget mauris pharetra et ultrices
neque ornare.

#### demo
<p class="demo">
    <Demo-AppNavbar  />
</p>

#### Code

```html

<header class="header" role="banner">
    <div class="container">
        <div :class=" blocks.logo.settings.align_logo==='left' ? 'header-left' : '' ">
            <div class="header-brand flex" style="align-items: center;">
                <button type="button" class="header-action" @click="openNavigation">
                    <i class="icon icon-menu"></i>
                </button>
                <a :href="blocks.logo.settings.link_logo ? blocks.logo.settings.link_logo: '/'"
                    class="header-brand-image" data-image-loading-animation>
                    <img class="lazyload js" :src="settings_general.logo" :data-src="settings_general.logo"
                        data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-sizes="auto"
                        :style="{ 'max-width': blocks.logo.settings.logo_max_width + 'px'} ">
                </a>
            </div>
        </div>
        <div class="header-center">
            <div class="w-100" style="max-width: 450px;margin: auto;">
                <nav class="flex">
                    <input type="search" name="" class="flat py-2"
                        placeholder="Search by Year, Make Model or Product Type..." id=""
                        style="border: 2px solid #32383a">
                    <button class="button p-2 flat" style="background-color:#32383a"><i class="icon icon-search"
                            style="font-size: 24px"></i></button>
                </nav>

            </div>
        </div>
        <div class="header-right">
            <div class="header-actions">
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
                                <button class="button default-button"><i class="icon icon-user"></i> </button>
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
                <app-popover>
                    <a href="#" class="flex mr-2" style="display: flex;align-items: center;">
                        <i class="icon icon-package mr-2 relative" style="font-size: 22px;">
                            <span class="cart-count " v-if="garage.list.length > 0">{{garage.list.length}}</span>
                        </i>
                        <div class="garage-title">
                            <small style="font-size: 14px;">Garage</small>
                            <p class="current-vehicle-title m-0" v-if="garage.list">
                                {{ garage.list[garage.currentVehicle] }}</p>
                        </div>
                        <i class="icon icon-chevron-down" style="font-size: 14px;"></i>
                    </a>
                    <template #popover>
                        <div class="box garage p-2" style="max-width:300px">
                            <div class="box-header flex pb-2 px-1">
                                <h4 class="w-100 m-0">My Garage</h4>
                                <button class="button text-nowrap p-1" @click="clearAll"> Clear All</button>
                            </div>
                            <div class="divider"></div>
                            <div class="box-body">
                                <table class="table w-100 mt-2" v-if="garage.list.length > 0">
                                    <tbody>
                                        <tr v-for="(g, key) in garage.list" :key="key" class="vehicle mt-1"
                                            :class="{ 'active' : garage.currentVehicle === key }">
                                            <td @click="onSelectVehicle(key)" class="vehicle-title flex">
                                                <p class="m-0 w-100">{{ g }}</p>
                                                <button class="button p-2"><i
                                                        class="icon icon-chevron-right"></i></button>
                                            </td>

                                            <td @click="deleteVehicle(key)" class="vehicle-delete">
                                                <button class="button p-2"><i class="icon icon-trash-2"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p v-else class="mt-4 mx-3 text-center"> Your garage is empty <br> try to add prefered
                                    vehicle</p>
                                <button class="w-100 button primary-button f-center py-2 mt-3" @click="addVehicle">Add
                                    Vehicle</button>
                            </div>
                        </div>
                    </template>
                </app-popover>

                <a href="#" class="header-action" tooltip="Your tooltip message">
                    <i class="icon icon-heart"></i>
                </a>

                <a href="#" class="header-action" @click="openCart" v-tooltip.bottom="'Open your cart'">
                    <i class="icon icon-shopping-cart"></i>
                    <span class="cart-count" v-if="cartData.item_count">{{cartData.item_count}}</span>
                </a>

            </div>
        </div>
    </div>
</header>

```