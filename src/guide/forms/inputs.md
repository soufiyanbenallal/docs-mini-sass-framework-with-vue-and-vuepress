# Inputs

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Mi eget mauris pharetra et ultrices
neque ornare.
#map:

[[toc]]

## input text

### Input

<div>
    <div class="form-group  my-4">
        <label for="input-text">Name</label>
        <input  id="input-text" type="text" placeholder="Name" />
    </div>
    <div class="form-group  mb-4">
        <label for="input-password">password</label>
        <input type="password" id="input-password" class="mb-4" placeholder="Password" />
    </div>
    <div class="form-group  mb-4">
    <label for="input-textarea">Decription</label>
        <textarea placeholder="Textarea" id="input-textarea" ></textarea>
    </div>
</div>

```html
<div>
    <div class="form-group ">
        <label for="input-text">Name</label>
        <input  id="input-text" type="text" placeholder="Name" />
    </div>

    <div class="form-group ">
        <label for="input-password">password</label>
        <input type="password" id="input-password" class="mb-4" placeholder="Password" />
    </div>


    <div class="form-group ">
        <label for="input-textarea">Decription</label>
        <textarea placeholder="Textarea" id="input-textarea" ></textarea>
    </div>
</div>
```


## inputs with icon classes


<div class="form-group input-icon-holder my-4">
    <input autofocus="autofocus" name="email" type="email" class="form-control" placeholder="Email address"
        required="required" />
    <i class="icon icon-user"></i>
</div>

<div class="form-group input-icon-holder mb-5">
    <input autofocus="autofocus" name="email" type="email" class="form-control" placeholder="Email address"
        required="required" />
    <i class="icon icon-mail"></i>
</div>



```html
<div class="form-group input-icon-holder">
    <input autofocus="autofocus" name="email" type="email" class="form-control" placeholder="Email address"
        required="required" />
    <i class="icon icon-user"></i>
</div>

<div class="form-group input-icon-holder">
    <input autofocus="autofocus" name="email" type="email" class="form-control" placeholder="Email address"
        required="required" />
    <i class="icon icon-mail"></i>
</div>
```

## checkbox

<div class="form-group flex-form-group my-4">
    <div class="checkbox has-text ">
        <input type="checkbox" name="remember" id="remember" />
        <label for="remember">Remember me</label>
    </div> 
</div>


```html
<div class="form-group flex-form-group">
    <div class="checkbox has-text ">
        <input type="checkbox" name="remember" id="remember" />
        <label for="remember">Remember me</label>
    </div> 
</div>
```

## radio button

<div class="form-group flex-form-group my-4">
    <div class="radio has-text ">
        <input type="radio" name="lang" id="lang" />
        <label for="lang">Arabic</label>
    </div> 
</div>
<div class="form-group flex-form-group my-4">
    <div class="radio has-text ">
        <input type="radio" name="lang" id="lang-1" />
        <label for="lang-1">French</label>
    </div> 
</div>

<div class="form-group flex-form-group my-4">
    <div class="radio has-text ">
        <input type="radio" name="lang" id="lang-2" />
        <label for="lang-2">English</label>
    </div> 
</div>


```html
<div class="form-group flex-form-group">
    <div class="checkbox has-text ">
        <input type="checkbox" name="remember" id="checkbox" />
        <label for="checkbox">Remember me</label>
    </div> 
</div>
```
 
## Form

<div class="auth-form mb-5 mt-4">
    <form action="#" >
        <div class="heading">
            <h1 class="heading-title">Login</h1>
        </div>
        <div class="is-grid">
            <div class="form-group input-icon-holder mb-4">
                <input autofocus="autofocus" name="email" type="email" class="form-control" placeholder="Email address"
                    required="required">
                <i class="icon icon-mail"></i>
            </div>
            <div class="form-group input-icon-holder mb-4">
                <input name="password" type="password" required="required" class="form-control" placeholder="Password">
                <a href="#">Forgot?</a>
            </div>
            <div class="form-group flex-form-group mb-4">
                <div class="checkbox has-text">
                    <input type="checkbox" name="remember" id="remember">
                    <label for="remember">Remember me</label>
                </div>
                <a href="#">I'm a new customer</a>
            </div>
            <div class="form-group">
                <button type="submit" class="button primary-button block-button">Login</button>
            </div>
        </div>
    </form>
</div>

```html
<div class="auth-form mb-5">
    <form action="#" method="post">
        <div class="heading">
            <h1 class="heading-title">Login</h1>
        </div>
        <div class="is-grid">
            <div class="form-group input-icon-holder mb-4">
                <input autofocus="autofocus" name="email" type="email" class="form-control" placeholder="Email address"
                    required="required">
                <i class="icon icon-mail"></i>
            </div>
            <div class="form-group input-icon-holder mb-4">
                <input name="password" type="password" required="required" class="form-control" placeholder="Password">
                <a href="#">Forgot?</a>
            </div>
            <div class="form-group flex-form-group mb-4">
                <div class="checkbox has-text">
                    <input type="checkbox" name="remember" id="remember">
                    <label for="remember">Remember me</label>
                </div>
                <a href="#">I'm a new customer</a>
            </div>
            <div class="form-group">
                <button type="submit" class="button primary-button block-button">Login</button>
            </div>
        </div>
    </form>
</div>
```
