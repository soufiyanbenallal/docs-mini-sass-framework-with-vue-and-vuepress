<template >
    <div class="popover-wrapper">
        <slot />
        <div class="popover-content">
            <slot name="popover" />
        </div>
    </div>
</template>
<script>
export default {
  name: 'AppPopover'
}
</script>
