# Flex

Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary. 

[[toc]]
<style> 
.flex-demo{
    background:aliceblue;
    height:100px;
}
.flex-demo .item{
    background:#4285f48a;
    padding:5px;
    margin:5px;
    border-radius:3px;
    height:35px;

}
</style>
## Enable flex behaviors

<div class="flex flex-demo p-2 my-5">I'm a flexbox container!</div>


```html
<div class="flex p-2">I'm a flexbox container!</div>
```

For `f-center`:
<div class="flex flex-demo p-2 f-center">
    <div class="item">Item</div>
    <div class="item">Item</div>
    <div class="item">Item</div>
</div>

For `fy-start`:
<div class="flex flex-demo p-2 fy-start">
    <div class="item">Item</div>
    <div class="item">Item</div>
    <div class="item">Item</div>
</div>

 

For `fx-start`:
<div class="flex flex-demo p-2 fx-start">
    <div class="item">Item</div>
    <div class="item">Item</div>
    <div class="item">Item</div>
</div>

 

For `fy-center`:
<div class="flex flex-demo p-2 fy-center">
    <div class="item">Item</div>
    <div class="item">Item</div>
    <div class="item">Item</div>
</div>

 

For `fx-center`:
<div class="flex p-2  flex-demo fx-center">
    <div class="item">Item</div>
    <div class="item">Item</div>
    <div class="item">Item</div>
</div>

 
 

For `fy-end`:
<div class="flex p-2  flex-demo fy-end">
    <div class="item">Item</div>
    <div class="item">Item</div>
    <div class="item">Item</div>
</div>

 

For `fx-end`:
<div class="flex p-2  flex-demo fx-end">
    <div class="item">Item</div>
    <div class="item">Item</div>
    <div class="item">Item</div>
</div>



For `f-space-between`:
<div class="flex p-2  flex-demo f-space-between">
    <div class="item">Item</div>
    <div class="item">Item</div>
    <div class="item">Item</div>
</div>

```html
<div class="flex p-2 f-center">...</div>
<div class="flex p-2 fy-start">...</div>
<div class="flex p-2 fx-start">...</div>
<div class="flex p-2 fy-center">...</div>
<div class="flex p-2 fx-center">...</div>
<div class="flex p-2 fy-end">...</div>
<div class="flex p-2 fx-end">...</div>
<div class="flex p-2 f-space-between">...</div>
```

## Justify content / Align items

*    f-center
*    fy-start
*    fx-start
*    fy-center
*    fx-center
*    fy-end
*    fx-end
*    f-space-between

## Fill