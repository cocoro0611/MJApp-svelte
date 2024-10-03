<script lang="ts" context="module">
  export type IconType =
    | "close"
    | "back"
    | "delete"
    | "room"
    | "user"
    | "calculator"
    | "calculatorFilled"
    | "refresh";

  const iconPaths: Record<IconType, string> = {
    close:
      "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z M9 9l6 6m0 -6l-6 6",
    back: "M15 19l-7-7 7-7",
    refresh:
      "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4 M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4",
    delete:
      "M4 7l16 0 M10 11l0 6 M14 11l0 6 M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12 M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",
    room: "M5 12l-2 0l9 -9l9 9l-2 0 M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7 M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6",
    user: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0 M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",
    calculator:
      "M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z M8 14l0 .01 M12 14l0 .01 M16 14l0 .01 M8 17l0 .01 M12 17l0 .01 M16 17l0 .01",
    calculatorFilled:
      "M18 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-10 15a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-8 -4a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-1 -7h-6a2 2 0 0 0 -2 2v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-1a2 2 0 0 0 -2 -2z",
  };
</script>

<script lang="ts">
  export let iconType: IconType;
  export let size = 24;
  export let color = "currentColor";

  $: path = iconPaths[iconType];
  $: isFilled = iconType === "calculatorFilled";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="{size}"
  height="{size}"
  viewBox="0 0 24 24"
  fill="{isFilled ? color : 'none'}"
  stroke="{isFilled ? 'none' : color}"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-{isFilled
    ? 'filled'
    : 'outline'} icon-tabler-{iconType} {iconType === 'back'
    ? 'h-6 w-6'
    : ''} {['room', 'user', 'calculator', 'calculatorFilled'].includes(iconType)
    ? 'iconSize'
    : ''}"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="{path}"></path>
</svg>

<style>
  .iconSize {
    @apply w-[71px] h-8 mb-1;
  }
</style>
