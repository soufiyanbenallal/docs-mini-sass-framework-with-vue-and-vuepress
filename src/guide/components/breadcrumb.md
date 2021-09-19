# Breadcrumb

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper `<AppBreadcrumb :color="'color_HEX'" />` morbi tincidunt. Mi eget mauris pharetra et ultrices
neque ornare.

#### demo

<AppBreadcrumb :color="'#000'" />

#### Component Call

```html

<AppBreadcrumb :color="'#000'" />

```
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
## Options / props

<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.</small>

#### color

<b>Type:</b> String
<br />
<b>Default:</b> #000