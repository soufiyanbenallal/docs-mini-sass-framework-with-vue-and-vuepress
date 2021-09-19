# Selects

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mi eget mauris pharetra et ultrices
neque ornare.

## Default select
<p class="demo flex">
              <app-select
                  class="select-class"
                  name="text"
                  :options="[
                    {id:'BEST_SELLING-',text:'Best Selling'},
                    {id:'PRICE-',text:'Price Ascending'},
                    {id:'PRICE-true',text:'Price Descending'},
                    {id:'CREATED_AT-',text:'Date Ascending'},
                    {id:'CREATED_AT-true',text:'Date Descending'},
                    {id:'TITLE-',text:'Name Ascending'},
                    {id:'TITLE-true',text:'Name Descending'},
                    ]"
                  :searchable="false"
                  placeholder="Select Brand"></app-select>
</p>


```vue
<template>
  <app-select
    class="select-class"
    name="text"
    :options="[
      {id:'BEST_SELLING-',text:'Best Selling'},
      {id:'PRICE-',text:'Price Ascending'},
      {id:'PRICE-true',text:'Price Descending'},
      {id:'CREATED_AT-',text:'Date Ascending'},
      {id:'CREATED_AT-true',text:'Date Descending'},
      {id:'TITLE-',text:'Name Ascending'},
      {id:'TITLE-true',text:'Name Descending'},
      ]"
    :searchable="false"
    placeholder="Select Brand"></app-select>
</template>
```

## Search
<p class="demo flex">
              <app-select
                  class="select-class"
                  name="text"
                  :options="[
                    {id:'BEST_SELLING-',text:'Best Selling'},
                    {id:'PRICE-',text:'Price Ascending'},
                    {id:'PRICE-true',text:'Price Descending'},
                    {id:'CREATED_AT-',text:'Date Ascending'},
                    {id:'CREATED_AT-true',text:'Date Descending'},
                    {id:'CREATED_AT-true',text:'Date Descending'},
                    {id:'CREATED_AT-true',text:'Date Descending'},
                    {id:'CREATED_AT-true',text:'Date Descending'},
                    {id:'TITLE-',text:'Name Ascending'},
                    {id:'TITLE-true',text:'Name Descending'},
                    ]"></app-select>
</p>


```vue
<template>
  <app-select
    class="select-class"
    name="text"
    prefix="prefix"
    :options="[
      {id:'BEST_SELLING-',text:'Best Selling'},
      {id:'PRICE-',text:'Price Ascending'},
      {id:'PRICE-true',text:'Price Descending'},
      {id:'CREATED_AT-',text:'Date Ascending'},
      {id:'CREATED_AT-true',text:'Date Descending'},
      {id:'TITLE-',text:'Name Ascending'},
      {id:'TITLE-true',text:'Name Descending'},
      ]"
    placeholder="Select Brand"></app-select>
</template>
```

## Prefix
<p class="demo flex">
              <app-select
                  class="select-class"
                  name="text"
                  prefix="prefix"
                  :options="[
                    {id:'BEST_SELLING-',text:'Best Selling'},
                    {id:'PRICE-',text:'Price Ascending'},
                    {id:'PRICE-true',text:'Price Descending'},
                    {id:'CREATED_AT-',text:'Date Ascending'},
                    {id:'CREATED_AT-true',text:'Date Descending'},
                    {id:'CREATED_AT-true',text:'Date Descending'},
                    {id:'CREATED_AT-true',text:'Date Descending'},
                    {id:'CREATED_AT-true',text:'Date Descending'},
                    {id:'TITLE-',text:'Name Ascending'},
                    {id:'TITLE-true',text:'Name Descending'},
                    ]"></app-select>
</p>


```vue
<template>
  <app-select
    class="select-class"
    name="text"
    :options="[
      {id:'BEST_SELLING-',text:'Best Selling'},
      {id:'PRICE-',text:'Price Ascending'},
      {id:'PRICE-true',text:'Price Descending'},
      {id:'CREATED_AT-',text:'Date Ascending'},
      {id:'CREATED_AT-true',text:'Date Descending'},
      {id:'TITLE-',text:'Name Ascending'},
      {id:'TITLE-true',text:'Name Descending'},
      ]"
    placeholder="Select Brand"></app-select>
</template>
```

## Props

Lorem ipsum dolor sit amet, consectetur adipiscing elit, 


* `class` :called only once, when the directive is first bound to the element. This is where you can do one-time setup work.


* `name` : name of proprety you shoud show in list.
* `options` : called only once, when the directive is first bound to the element. This is where you can do one-time setup work.
* `change` : called only once, when the directive is first bound to the element. This is where you can do one-time setup work.
* `selected` : called only once, when the directive is first bound to the element. This is where you can do one-time setup work.
* `searchable` : called only once, when the directive is first bound to the element. This is where you can do one-time setup work.
* `placeholder` : called only once, when the directive is first bound to the element. This is where you can do one-time setup work.
* `prefix` : called only once, when the directive is first bound to the element. This is where you can do one-time setup work.