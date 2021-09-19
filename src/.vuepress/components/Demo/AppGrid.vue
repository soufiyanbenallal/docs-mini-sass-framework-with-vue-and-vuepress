<template>
    <div class="mt-4">
        <section>
            <div class="demo-grid">
                <div class="is-grid "
                    :class="'grid-' + classValue + ' ' + (classValue2 > 1 ? `gap-${classValue2}` : (classValue2 == 0 ? '' : 'gap')) + ' ' + classValue3 + ' ' + classValue4">
                    <div v-for="n in 12" :key="n" class="flex f-center">{{n}}</div>
                    <!-- <div v-for="n in parseInt(classValue)" :key="'2'+n" class="flex f-center ">{{n}}</div>
                    <div v-for="n in parseInt(classValue)" :key="'3'+n" class="flex f-center w-100">{{n}}</div> -->
                </div>
            </div>
        </section>
        <section>
            <div class="flex f-center">
                <div class="form-group flex-form-group my-1 w-50 pr-4">
                    <h4 class="mb-2">number columns</h4>
                    <div class="range flex ">
                        <span>1 </span>
                        <input type="range" class="w-100" name="cols" v-model="classValue" :step='1' :min="1"
                            :max="12" />
                        <span> 12</span>
                    </div>
                </div>
                <div class="form-group flex-form-group my-1 w-50 pl-4">
                    <h4 class="mb-2">Gap columns</h4>
                    <div class="range flex ">
                        <span>0 </span>
                        <input type="range" class="w-100" name="cols" v-model="classValue2" :step='1' :min="0"
                            :max="5" />
                        <span>5</span>
                    </div>
                </div>
            </div>
            <div class="flex f-center mb-5">
                <div class="w-100">

                    <h4 class="pt-3 mb-2">justify</h4>
                    <div class="flex w-75">
                        <div class="form-group flex-form-group my-1 w-100">
                            <div class="radio has-text ">
                                <input type="radio" name="cols" v-model="classValue3" value="cols-between"
                                    id="cols-1" />
                                <label for="cols-1">cols-between</label>
                            </div>
                        </div>
                        <div class="form-group flex-form-group my-1 w-100">
                            <div class="radio has-text ">
                                <input type="radio" name="cols" v-model="classValue3" value="cols-around" id="cols" />
                                <label for="cols">cols-around</label>
                            </div>
                        </div>
                        <div class="form-group flex-form-group my-1 w-100">
                            <div class="radio has-text ">
                                <input type="radio" name="cols" v-model="classValue3" value="cols-evenly" id="cols-2" />
                                <label for="cols-2">cols-evenly</label>
                            </div>
                        </div>


                    </div>
                    <div class="flex w-75">
                        <div class="form-group flex-form-group my-1 w-100">
                            <div class="radio has-text ">
                                <input type="radio" name="rows" v-model="classValue4" value="rows-between"
                                    id="rows-3" />
                                <label for="rows-3">rows-between</label>
                            </div>
                        </div>
                        <div class="form-group flex-form-group my-1 w-100">
                            <div class="radio has-text ">
                                <input type="radio" name="rows" v-model="classValue4" value="rows-around" id="rows-4" />
                                <label for="rows-4">rows-around</label>
                            </div>
                        </div>
                        <div class="form-group flex-form-group my-1 w-100">
                            <div class="radio has-text ">
                                <input type="radio" name="rows" v-model="classValue4" value="rows-evenly" id="rows-5" />
                                <label for="rows-5">rows-evenly</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <pre class="language-html code-copy-added"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>is-grid {{'grid-' + classValue + ' ' + (classValue2 > 1 ? `gap-${classValue2}` : 'gap') + ' ' + classValue3 + ' ' + classValue4}}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<div v-for="n in parseInt(classValue)" :key="n">&nbsp;&nbsp;&nbsp;&nbsp;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></div><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre>
            <!-- <div class="code-copy"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hover" style="bottom: 7.5px;"><path data-v-12703d6d="" fill="none" d="M0 0h24v24H0z"></path> <path data-v-12703d6d="" fill="#27b1ff" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path></svg> <span data-v-12703d6d="" class="" style="bottom: 7.5px;">
        Copied!
    </span></div> -->
        </section>
    </div>
</template>

<script>
    export default {
        name: 'AppGrid',
        data() {
            return {
                classValue: 4,
                classValue2: 1,
                classValue3: '',
                classValue4: '',
            }
        },
    }
</script>