<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";

  interface PlayerData {
    name: string;
    score: number;
    balance: number;
    points: number[];
  }

  interface GameData {
    rules: string;
    players: PlayerData[];
  }

  let gameData: GameData = {
    rules: "ルール",
    players: [
      { name: "P1", score: 0, balance: 0, points: [0, 0, 0, 0] },
      { name: "P2", score: 0, balance: 0, points: [0, 0, 0, 0] },
      { name: "P3", score: 0, balance: 0, points: [0, 0, 0, 0] },
      { name: "P4", score: 0, balance: 0, points: [0, 0, 0, 0] },
    ],
  };

  function updateScore(playerIndex: number, pointIndex: number, value: number) {
    gameData.players[playerIndex].points[pointIndex] = value;
    gameData.players[playerIndex].score = gameData.players[
      playerIndex
    ].points.reduce((a, b) => a + b, 0);
    // ここでbalanceの計算ロジックを実装することもできます
    gameData = { ...gameData }; // 反応性のためにオブジェクトを新しく作成
  }
</script>

<div class="grid grid-cols-5">
  <div class="...">{gameData.rules}</div>
  {#each gameData.players as player}
    <div class="..."><Button type="normal">{player.name}</Button></div>
  {/each}
</div>

<div class="grid grid-cols-5">
  <div class="...">スコア</div>
  {#each gameData.players as player}
    <div class="...">{player.score}</div>
  {/each}
</div>

<div class="grid grid-cols-5">
  <div class="...">収支</div>
  {#each gameData.players as player}
    <div class="...">{player.balance}</div>
  {/each}
</div>

{#each gameData.players[0].points as _, pointIndex}
  <div class="grid grid-cols-5">
    <div class="...">{pointIndex + 1}回目点数</div>
    {#each gameData.players as player, playerIndex}
      <div class="...">
        <input
          type="number"
          bind:value="{player.points[pointIndex]}"
          on:input="{() =>
            updateScore(playerIndex, pointIndex, player.points[pointIndex])}"
        />
      </div>
    {/each}
  </div>
{/each}
