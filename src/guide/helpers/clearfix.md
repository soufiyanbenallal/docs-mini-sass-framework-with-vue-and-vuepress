# Clearfix

Quickly and easily clear floated content within a container by adding a clearfix utility.

Easily clear floats by adding ``.clearfix`` __to the parent element.__ Can also be used as a mixin.

#### Use in HTML:
```html
<div class="clearfix">...</div>
```

#### The mixin source code:

```scss
@mixin clearfix() {
  &::after {
    display: block;
    clear: both;
    content: "";
  }
}
```
#### Use the mixin in SCSS:
```scss
.class-name {
  @include clearfix;
}
```