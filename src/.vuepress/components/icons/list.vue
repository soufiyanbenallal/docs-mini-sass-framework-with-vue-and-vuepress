<template>
  <section>
    <div class="form-group flex f-center mt-4 pt-4 mb-5">
      <input type="search" class="w-50" name="" v-model="search" placeholder="search icon" id="" />
    </div>
    <input type="hidden" id="copycode" v-model="copycode">
    <div class="is-grid grid-6 text-center">
      <div class="p-3 box-icon" v-for="(icon,key) in filteredList()" :key="key" @click="getIcon(icon)">
        <i class="icon" :class="'icon-'+icon"></i>
        <div><small>{{ icon }}</small></div>
      </div>
    </div>
  </section>
</template>
<style>
.icon{
      font-size: 30px;
}
.box-icon:hover{
      box-shadow: 0 0 0 1px #00000038;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
        background: #eee;
}
</style>
<script>
const iconsList =[
  "activity",
  "airplay",
  "alert-circle",
  "alert-octagon",
  "alert-triangle",
  "align-center",
  "align-justify",
  "align-left",
  "align-right",
"anchor",
"aperture",
"archive",
"arrow-down",
"arrow-down-circle",
"arrow-down-left",
"arrow-down-right",
"arrow-left",
"arrow-left-circle",
"arrow-right",
"arrow-right-circle",
"arrow-up",
"arrow-up-circle",
"arrow-up-left",
"arrow-up-right",
"at-sign",
"award",
"bar-chart",
"bar-chart-2",
"battery",
"battery-charging",
"bell",
"bell-off",
"bluetooth",
"bold",
"book",
"book-open",
"bookmark",
"box",
"briefcase",
"calendar",
"camera",
"camera-off",
"cast",
"check",
"check-circle",
"check-square",
"chevron-down",
"chevron-left",
"chevron-right",
"chevron-up",
"chevrons-down",
"chevrons-left",
"chevrons-right",
"chevrons-up",
"chrome",
"circle",
"clipboard",
"clock",
"cloud",
"cloud-drizzle",
"cloud-lightning",
"cloud-off",
"cloud-rain",
"cloud-snow",
"code",
"codepen",
"codesandbox",
"coffee",
"columns",
"command",
"compass",
"copy",
"corner-down-left",
"corner-down-right",
"corner-left-down",
"corner-left-up",
"corner-right-down",
"corner-right-up",
"corner-up-left",
"corner-up-right",
"cpu",
"credit-card",
"crop",
"crosshair",
"database",
"delete",
"disc",
"dollar-sign",
"download",
"download-cloud",
"droplet",
"edit",
"edit-2",
"edit-3",
"external-link",
"eye",
"eye-off",
"facebook",
"fast-forward",
"feather",
"figma",
"file",
"file-minus",
"file-plus",
"file-text",
"film",
"filter",
"flag",
"folder",
"folder-minus",
"folder-plus",
"framer",
"frown",
"gift",
"git-branch",
"git-commit",
"git-merge",
"git-pull-request",
"github",
"gitlab",
"globe",
"grid",
"hard-drive",
"hash",
"headphones",
"heart",
"help-circle",
"hexagon",
"home",
"image",
"inbox",
"info",
"instagram",
"italic",
"key",
"layers",
"layout",
"life-buoy",
"link",
"link-2",
"linkedin",
"list",
"loader",
"lock",
"log-in",
"log-out",
"mail",
"map",
"map-pin",
"maximize",
"maximize-2",
"meh",
"menu",
"message-circle",
"message-square",
"mic",
"mic-off",
"minimize",
"minimize-2",
"minus",
"minus-circle",
"minus-square",
"monitor",
"moon",
"more-horizontal",
"more-vertical",
"mouse-pointer",
"move",
"music",
"navigation",
"navigation-2",
"octagon",
"package",
"paperclip",
"pause",
"pause-circle",
"pen-tool",
"percent",
"phone",
"phone-call",
"phone-forwarded",
"phone-incoming",
"phone-missed",
"phone-off",
"phone-outgoing",
"pie-chart",
"play",
"play-circle",
"plus",
"plus-circle",
"plus-square",
"pocket",
"power",
"printer",
"radio",
"refresh-ccw",
"refresh-cw",
"repeat",
"rewind",
"rotate-ccw",
"rotate-cw",
"rss",
"save",
"scissors",
"search",
"send",
"server",
"settings",
"share",
"share-2",
"shield",
"shield-off",
"shopping-bag",
"shopping-cart",
"shuffle",
"sidebar",
"skip-back",
"skip-forward",
"slack",
"slash",
"sliders",
"smartphone",
"smile",
"speaker",
"square",
"star",
"stop-circle",
"sun",
"sunrise",
"sunset",
"tablet",
"tag",
"target",
"terminal",
"thermometer",
"thumbs-down",
"thumbs-up",
"toggle-left",
"toggle-right",
"tool",
"trash",
"trash-2",
"trello",
"trending-down",
"trending-up",
"triangle",
"truck",
"tv",
"twitch",
"twitter",
"type",
"umbrella",
"underline",
"unlock",
"upload",
"upload-cloud",
"user",
"user-check",
"user-minus",
"user-plus",
"user-x",
"users",
"video",
"video-off",
"voicemail",
"volume",
"volume-1",
"volume-2",
"volume-x",
"watch",
"wifi",
"wifi-off",
"wind",
"x",
"x-circle",
"x-octagon",
"x-square",
"youtube",
"zap",
"zap-off",
"zoom-in",
"zoom-out"
];
  export default {
    name:'ListIcon',
    data() {
      return {
        search: '',
        list:iconsList,
        copycode:''
      }
    },
    methods: {
      filteredList () {
        return this.list.filter(el => {
          return el.toLowerCase().includes(this.search.toLowerCase())
        })
      },
      getIcon(icon){
        this.copycode =`<i class='icon icon-${icon}'></i>`
        this.copyTestingCode()
      },
      copyTestingCode() {
        let testingCodeToCopy = document.querySelector('#copycode')
        testingCodeToCopy.setAttribute('type', 'text') // 不是 hidden 才能複製
        testingCodeToCopy.select()

        try {
          var successful = document.execCommand('copy');
          //var msg = successful ? 'successful' : 'unsuccessful';
          //alert('Testing code was copied ' + msg);
        } catch (err) {
          alert('Oops, unable to copy');
        }

        /* unselect the range */
        testingCodeToCopy.setAttribute('type', 'hidden')
        window.getSelection().removeAllRanges()
      },
    }
  }
</script>