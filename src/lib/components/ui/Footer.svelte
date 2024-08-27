<script lang="ts">
  import Button from "./Button.svelte";
  import { goto } from "$app/navigation";

  let selectedButton: string = "score"; // デフォルトで'スコア'を選択状態に

  const buttons = [
    { id: "score", label: "スコア", url: "/" },
    { id: "fu", label: "符数計算", url: "/Point-Fusuu" },
    { id: "han", label: "翻数計算", url: "/Point-Hansuu" },
  ];

  function handleClick(buttonId: string) {
    selectedButton = buttonId;
    const button = buttons.find((b) => b.id === buttonId);
    if (button) {
      goto(button.url);
    }
  }
</script>

<div class="flex justify-center">
  <footer>
    {#each buttons as button}
      <Button
        type="footer"
        isSelected="{selectedButton === button.id}"
        on:click="{() => handleClick(button.id)}"
      >
        {button.label}
      </Button>
    {/each}
  </footer>
</div>
