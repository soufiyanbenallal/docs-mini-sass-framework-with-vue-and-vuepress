# Grid

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mi eget mauris pharetra et ultrices
neque ornare.
Position, spacing, media.

#map
[[toc]]

## Basic grid

<style lang="scss">
    .demo-grid {
        .is-grid{
            min-height: 150px;
            background: aliceblue;
        }
        .is-grid>div {
            padding: 5px;
            background: #ffe4c4;
            height: 50px;
            width: 50px;
            border:1px solid gold;
        }
    }
</style>
<Demo-AppGrid />

:::: tabs :options="{ useUrlFragment: false }"

::: tab code
```html
<div class="is-grid grid-4 gap">
    <div></div>
</div>
```
:::


::: tab source
``` vue
<template>
    <div class="mt-4">
        <section>
            <div class="demo-grid">
                <div class="is-grid gap rows-center" :class="'grid-' + classValue">
                    <div v-for="n in parseInt(classValue)" :key="n" class="flex f-center w-100" >{{n}}</div>
                </div>
            </div>
        </section>
        <section>
            <div class="flex f-center mb-5">
                <div class="form-group flex-form-group my-1 w-50">
                    <h4 class="mb-2">number columns</h4>
                    <div class="range flex ">
                        <span>1 </span>
                        <input type="range" class="w-100" name="cols" v-model="classValue" :step='1' :min="1" :max="12" />
                        <span> 12</span>
                    </div> 
                </div>

            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'AppGrid',
  data(){
      return {
          classValue : 1,
      }
  },
}
</script>
```
:::

::::





## Interactive

<Demo-AppGridCols />







*****************************************
*`Is-grid`

Grid system declaration
En uses this element to declare the grid

#### Alignment
<style>
    .items {
        background-color: honeydew;
        height: 300px;
    }

    .item {
        background-color: bisque;
        border: 1px solid gold;
        width: 50px;
        height: 50px;
        padding: 15px;
        text-align: center;
    }
</style>
<div class="items is-grid grid-3 sm-2 md-4 gap cols-center rows-center my-4">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item col-end">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
</div>

#### Code

```html
<div class="items is-grid grid-3 sm-2 md-4 gap cols-center rows-center">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item col-end">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
</div>
```