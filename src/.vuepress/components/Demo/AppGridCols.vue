<template>
    <div class="mt-4">
        <section>
            <div class="demo-grid">
                <div class="is-grid grid-4 gap" :class="classValue + ' ' + classValue2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
        <section>
            
            <h4 class="pt-3 mb-2">justify</h4>
            <div class="flex w-75">
                <div class="form-group flex-form-group my-1 w-100">
                    <div class="radio has-text ">
                        <input type="radio" name="cols"  v-model="classValue2" value="cols-between" id="cols33-1" />
                        <label for="cols33-1">cols-between</label>
                    </div> 
                </div>
                <div class="form-group flex-form-group my-1 w-100">
                    <div class="radio has-text ">
                        <input type="radio" name="cols" v-model="classValue2" value="cols-around"  id="cols33" />
                        <label for="cols33">cols-around</label>
                    </div> 
                </div>
                <div class="form-group flex-form-group my-1 w-100">
                    <div class="radio has-text ">
                        <input type="radio" name="cols" v-model="classValue2" value="cols-evenly" id="cols33-2" />
                        <label for="cols33-2">cols-evenly</label>
                    </div> 
                </div>
               

            </div>
            <div class="flex w-75">
                 <div class="form-group flex-form-group my-1 w-100">
                    <div class="radio has-text ">
                        <input type="radio" name="rows"  v-model="classValue" value="rows-between" id="rows2-3" />
                        <label for="rows2-3">rows2-between</label>
                    </div> 
                </div>
                <div class="form-group flex-form-group my-1 w-100">
                    <div class="radio has-text ">
                        <input type="radio" name="rows2" v-model="classValue" value="rows-around"  id="rows2-4" />
                        <label for="rows2-4">rows2-around</label>
                    </div> 
                </div>
                <div class="form-group flex-form-group my-1 w-100">
                    <div class="radio has-text ">
                        <input type="radio" name="rows2" v-model="classValue" value="rows-evenly" id="rows2-5" />
                        <label for="rows2-5">rows-evenly</label>
                    </div> 
                </div>
            </div>
            <h4 class="pt-3 mb-2">Direction</h4>
            <div class="flex w-75">
                <div class="form-group flex-form-group my-1 w-100">
                    <div class="radio has-text ">
                        <input type="radio" name="1alignitem"  v-model="classValue2" value="cols-between" id="1alignitem-1" />
                        <label for="1alignitem-1">cols-between</label>
                    </div> 
                </div>
                <div class="form-group flex-form-group my-1 w-100">
                    <div class="radio has-text ">
                        <input type="radio" name="1alignitem" v-model="classValue2" value="cols-around"  id="1alignitem" />
                        <label for="1alignitem">cols-around</label>
                    </div> 
                </div>
                <div class="form-group flex-form-group my-1 w-100">
                    <div class="radio has-text ">
                        <input type="radio" name="1alignitem" v-model="classValue2" value="cols-evenly" id="1alignitem-2" />
                        <label for="1alignitem-2">cols-evenly</label>
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
          classValue : '',
          classValue2 : '',
      }
  },
  methods:{
    //   setClass()
  }
}
</script>
