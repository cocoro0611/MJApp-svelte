<script lang="ts">
    import { onMount } from "svelte";
    import type { User, Room, Score } from "$lib/models/interface.js";
    export let rooms: Room[];
    export let users: User[];
    export let scores: Score[];

    import Modal from "$lib/components/ui/Modal.svelte";
    import ScoreSummary from "$lib/components/features/Score/ScoreSummary.svelte";
    import Setting from "$lib/components/features/Score/Setting.svelte";
    import ScoreCom from "$lib/components/features/Score/Score.svelte";
    import Tensuu from "$lib/components/features/Score/Tensuu.svelte";
    import AddScore from "$lib/components/features/Score/AddScore.svelte";

    export let isScorePage: Boolean;

    let popupModal = false;
    let selectedRoom: Room;
    let tensuuInstances: number[] = [];
    let allUmaValues: Record<number, number[]> = {};

    const roomClick = (event: CustomEvent<Room>) => {
        selectedRoom = event.detail;
        isScorePage = true;
        updateTensuuInstances();
    };

    const closeModal = () => {
        popupModal = false;
    };

    const addTensuu = () => {
        popupModal = false;
        const newScoreOrder = Math.max(...tensuuInstances, 0) + 1;
        tensuuInstances = [...new Set([...tensuuInstances, newScoreOrder])];
    };

    const updateTensuuInstances = () => {
        if (selectedRoom && scores) {
            const roomScores = scores.filter(
                (score) => score.roomId === selectedRoom.id,
            );
            const orders = roomScores.map((score) => score.order);
            tensuuInstances = [...new Set(orders)].sort((a, b) => a - b);
            if (tensuuInstances.length === 0) {
                tensuuInstances = [1];
            }
        }
    };

    $: summedUma = Object.values(allUmaValues).reduce((sums, uma) => {
        return uma.map((value, index) => (sums[index] || 0) + value);
    }, [] as number[]);

    onMount(() => {
        updateTensuuInstances();
    });
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
    <ScoreCom bind:isScorePage room="{selectedRoom}" {summedUma} />

    {#each tensuuInstances as scoreOrder (scoreOrder)}
        <Tensuu
            room="{selectedRoom}"
            {scores}
            {scoreOrder}
            bind:currentUma="{allUmaValues[scoreOrder]}"
        />
    {/each}

    <div class="fixed bottom-24 right-10 z-10">
        <Modal bind:popupModal>
            <AddScore
                scoreOrder="{Math.max(...tensuuInstances, 0) + 1}"
                on:close="{closeModal}"
                on:add="{addTensuu}"
            />
        </Modal>
    </div>
{/if}
