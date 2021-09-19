<template>
     <div class="track-container">
      <span class="range-value min">{{ minValue}} </span>
      <span class="range-value max">{{ maxValue }}</span>
      <div class="track" ref="_vpcTrack"></div>
      <div class="track-highlight" ref="trackHighlight"></div>
      <button class="track-btn track1" ref="track1"></button>
      <button class="track-btn track2" ref="track2"></button>
    </div>
</template>
<script>
export default {
  name: 'AppRange',
  props: {
    minVal: {
      type: Number,
      default: 10
    },
    maxVal: {
      type: Number,
      default: 150
    }
  },
  data () {
    return {
      min: 10,
      max: 210,
      minValue: this.minVal,
      maxValue: this.maxVal,
      step: 1,
      totalSteps: 0,
      percentPerStep: 0.1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null
      }

    }
  },
  watch: {
    // minValue () {
    //   this.minValue = this.minVal
    // },
    // maxValue () {
    //   this.maxValue = this.maxVal
    // }
  },
  methods: {
    moveTrack (track, ev) {
      const percentInPx = this.getPercentInPx()

      const trackX = Math.round(this.$refs._vpcTrack.getBoundingClientRect().left)
      const clientX = ev.clientX
      const moveDiff = clientX - trackX

      const moveInPct = moveDiff / percentInPx

      if (moveInPct < 1 || moveInPct > 100) return
      const value = (Math.round(moveInPct / this.percentPerStep) * this.step) + this.min
      if (track === 'track1') {
        if (value >= (this.maxValue - this.step)) return
        this.minValue = value
      }

      if (track === 'track2') {
        if (value <= (this.minValue + this.step)) return
        this.maxValue = value
      }

      this.$refs[track].style.left = moveInPct + '%'
      this.setTrackHightlight()
    },
    mousedown (ev, track) {
      if (this.isDragging) return
      this.isDragging = true
      this.pos.curTrack = track
    },

    touchstart (ev, track) {
      this.mousedown(ev, track)
    },

    mouseup (ev, track) {
      if (!this.isDragging) return
      this.isDragging = false
    },

    touchend (ev, track) {
      this.mouseup(ev, track)
    },

    mousemove (ev, track) {
      if (!this.isDragging) return
      this.moveTrack(track, ev)
    },

    touchmove (ev, track) {
      this.mousemove(ev.changedTouches[0], track)
    },

    valueToPercent (value) {
      return ((value - this.min) / this.step) * this.percentPerStep
    },

    setTrackHightlight () {
      this.$refs.trackHighlight.style.left = `calc(${this.valueToPercent(this.minValue)}% + 0px)`
      this.$refs.trackHighlight.style.width = `calc(${(this.valueToPercent(this.maxValue) - this.valueToPercent(this.minValue))}% + 0px)`
    },

    getPercentInPx () {
      const trackWidth = this.$refs._vpcTrack.offsetWidth
      const oneStepInPx = trackWidth / this.totalSteps
      // 1 percent in px
      const percentInPx = oneStepInPx / this.percentPerStep

      return percentInPx
    },

    setClickMove (ev) {
      const track1Left = this.$refs.track1.getBoundingClientRect().left
      const track2Left = this.$refs.track2.getBoundingClientRect().left
      // console.log('track1Left', track1Left)
      if (ev.clientX < track1Left) {
        this.moveTrack('track1', ev)
      } else if ((ev.clientX - track1Left) < (track2Left - ev.clientX)) {
        this.moveTrack('track1', ev)
      } else {
        this.moveTrack('track2', ev)
      }
    }
  },
  mounted () {
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps
    // console.log('percentPerStep', this.percentPerStep)

    // set track1 initilal
    document.querySelector('.track1').style.left = this.valueToPercent(this.minValue) + '%'
    // track2 initial position
    document.querySelector('.track2').style.left = this.valueToPercent(this.maxValue) + '%'
    // set initila track highlight
    this.setTrackHightlight()

    const self = this;

    ['mouseup', 'mousemove'].forEach(type => {
      document.body.addEventListener(type, (ev) => {
        // ev.preventDefault();
        if (self.isDragging && self.pos.curTrack) {
          self[type](ev, self.pos.curTrack)
        }
      })
    });

    ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchmove', 'touchend'].forEach(type => {
      document.querySelector('.track1').addEventListener(type, (ev) => {
        ev.stopPropagation()
        self[type](ev, 'track1')
      })

      document.querySelector('.track2').addEventListener(type, (ev) => {
        ev.stopPropagation()
        self[type](ev, 'track2')
      })
    })

    // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    document.querySelector('.track').addEventListener('click', function (ev) {
      ev.stopPropagation()
      self.setClickMove(ev)
    })

    document.querySelector('.track-highlight').addEventListener('click', function (ev) {
      ev.stopPropagation()
      self.setClickMove(ev)
    })
  }
}
</script>
