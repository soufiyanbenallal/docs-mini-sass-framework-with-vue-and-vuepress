# Introduction

## What Javascript Events are dispatched by the app?

### Initialized

```js
document.addEventListener('CART::initialized', (e) => {
    console.log('initialized', e)
})
```

### CartHidden

```js
document.addEventListener('CART::Hidden', (e) => {
    console.log('Hidden', e)
})
```

### CartVisible

```js
document.addEventListener('CART::Visible', (e) => {
    console.log('Hidden', e)
})
```

### Show

```js
document.addEventListener('CART::Show', (e) => {
    // true : cart visible
    // false : cart hidden
    console.log('Show', e)
})
```

### CartPage (refreshing when an item is added)

```js
document.addEventListener('CART::CartPage', () => {

})
```

### CartLoaded

```js
document.addEventListener('CART::CartLoaded', (e) => {
    console.log('Cart Loaded', e)
})
```

### BeforeTieredFreeItemsRendered

```js
document.addEventListener('CART::BeforeTieredFreeItemsRendered', (e) => {
    console.log('BeforeTieredFreeItemsRendered', e)
})
```

### TieredFreeItemsRendered

```js
document.addEventListener('CART::TieredFreeItemsRendered', (e) => {
    console.log('TieredFreeItemsRendered', e)
})
```

### ExcludedProducts

```js
document.addEventListener('CART::ExcludedProducts', (e) => {
    console.log('Excluded Products :', e)
})
```

### ProductsUpsells

```js
document.addEventListener('CART::ProductsUpsells', (e) => {
    console.log('ProductsUpsells :', e)
})
```

### ItemCount

```js
document.addEventListener('CART::ItemCount', (e) => {
    console.log('Item Count : ', e)
})
```

### DeleteItem
```js
document.addEventListener('CART::DeleteItem', (e) => {
    console.log('Delete Item : ', e)
})
```

### Show
 ```html
 // add '/cart' to link
 // example :
 <a href="/cart" class="icon-shop-link"><i class="icon-le-panier"></i></a>

 // add class 'open-cart-drawer'
 // example :
 <a href="/cart" class="icon-shop-link"><i class="icon-le-panier"></i></a>
 ```