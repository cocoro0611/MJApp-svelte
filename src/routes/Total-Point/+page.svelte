<script lang="ts">
    import type { Room } from "$lib/models/Total-Point/types.js";
    export let rooms: Room[];

    import Modal from "$lib/components/ui/Modal.svelte";
    import ScoreSummary from "$lib/components/features/Total-Point/ScoreSummary.svelte";
    import Setting from "$lib/components/features/Total-Point/Setting.svelte";

    let popupModal = false;
    let selectedRoom: Room | null = null;

    const roomClick = (event: CustomEvent<Room>) => {
        selectedRoom = event.detail;
        popupModal = true;
    };

    const closeModal = () => {
        popupModal = false;
        selectedRoom = null;
    };
</script>

<ScoreSummary {rooms} on:userClick="{roomClick}" />

<div class="fixed bottom-24 right-10 z-10">
    <Modal bind:popupModal>
        <Setting on:close="{closeModal}" />
    </Modal>
</div>
