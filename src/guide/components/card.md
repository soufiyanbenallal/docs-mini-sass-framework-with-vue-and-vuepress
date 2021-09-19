# Card

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mi eget mauris pharetra et ultrices
neque ornare.

#### demo
<ul class=" flex f-center">
    <li class="w-25 product-item">
        <div class="product-thumbnail">
            <a href="#">
                <app-no-image  />
            </a>
        </div>
        <div class="product-details">
            <div class="product-info">
                <a href="#" class="product-title">Title</a>
            </div>
            <div class="product-price flex">
                <span class="after">$99.90</span>
                <!-- <span class="before" v-if="variants[index].compareAtPrice > 0">{{variants[index].compareAtPrice | currency }}</span> -->
            </div>
        </div>
        <!-- <div class="product-variants" v-if="variants.length > 1">
            <select @change="setProductVariant($event.target.value)">
                <option v-for="(v,key) in variants" :value="v.id" :key="v.sku + '_'+key">{{ v.title }} </option>
            </select>
        </div> -->
        <div class="product-actions" >
            <button class="add-to-cart button primary-button block-button">
                <span>Add to cart</span>
                <!-- <span v-else style='margin:-3px'>
                    <app-spinner size="20px" color="#ffffff" text='Loading...' :zIndex="0" />
                </span> -->
            </button>
        </div>
    </li>
</ul>

#### Code

```html

<ul class="breadcrumb" :style=" color ? `color: ${color};`: null">
    <li>
        <a href="#">COLLECTION</a>
    </li>
    <li>
        <span class="current-page">TOYS</span>
    </li>
</ul>

```