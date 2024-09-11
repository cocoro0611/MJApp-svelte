<script lang="ts">
    import type { Room } from "$lib/models/Total-Point/types.js";
    import type { User } from "$lib/models/Member/types.js";
    export let rooms: Room[];
    export let users: User[];

    import Modal from "$lib/components/ui/Modal.svelte";
    import ScoreSummary from "$lib/components/features/Total-Point/ScoreSummary.svelte";
    import Setting from "$lib/components/features/Total-Point/Setting.svelte";
    import Score from "$lib/components/features/Total-Point/Score.svelte";
    import Tensuu from "$lib/components/features/Total-Point/Tensuu.svelte";

    export let isScorePage: Boolean;

    let popupModal = false;
    let selectedRoom: Room;

    const roomClick = (event: CustomEvent<Room>) => {
        selectedRoom = event.detail;
        isScorePage = true;
    };

    const closeModal = () => {
        popupModal = false;
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
    <Score bind:isScorePage room="{selectedRoom}" />
    <Tensuu room="{selectedRoom}" />
{/if}
