<script lang="ts">
    import { onMount } from "svelte";
    import type { Room, Score } from "$lib/models/Total-Point/types.js";
    import type { User } from "$lib/models/Member/types.js";
    export let rooms: Room[];
    export let users: User[];
    export let scores: Score[];

    import Modal from "$lib/components/ui/Modal.svelte";
    import ScoreSummary from "$lib/components/features/Total-Point/ScoreSummary.svelte";
    import Setting from "$lib/components/features/Total-Point/Setting.svelte";
    import ScoreCom from "$lib/components/features/Total-Point/Score.svelte";
    import Tensuu from "$lib/components/features/Total-Point/Tensuu.svelte";
    import AddScore from "$lib/components/features/Total-Point/AddScore.svelte";

    export let isScorePage: Boolean;
    let scoreOrder: number = 2; // 1から始める

    let popupModal = false;
    let selectedRoom: Room;
    let tensuuInstances: number[] = [];

    const roomClick = (event: CustomEvent<Room>) => {
        selectedRoom = event.detail;
        isScorePage = true;
        tensuuInstances = [0];
        scoreOrder = 1; // ルームが変わったらリセット
    };

    const closeModal = () => {
        popupModal = false;
    };

    const addTensuu = () => {
        popupModal = false;
        tensuuInstances = [...tensuuInstances, tensuuInstances.length];
        scoreOrder++; // scoreOrderを1増やす
    };
</script>

{#if !isScorePage}
    <ScoreSummary {rooms} on:roomClick="{roomClick}" />

    <div class="fixed bottom-24 right-10 z-10">
        <Modal bind:popupModal>
            <Setting
                on:close="{closeModal}"
                on:roomCreated="{roomClick}"
                {users}
            />
        </Modal>
    </div>
{:else}
    <ScoreCom bind:isScorePage room="{selectedRoom}" />

    {#each tensuuInstances as _, index (index)}
        <Tensuu room="{selectedRoom}" {scores} />
    {/each}

    <div class="fixed bottom-24 right-10 z-10">
        <Modal bind:popupModal>
            <AddScore
                bind:scoreOrder
                on:close="{closeModal}"
                on:add="{addTensuu}"
            />
        </Modal>
    </div>
{/if}
