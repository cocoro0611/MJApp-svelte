<script lang="ts">
    import Modal from "$lib/components/ui/Modal.svelte";
    import Score from "$lib/components/features/Total-Point/Score.svelte";
    import Setting from "$lib/components/features/Total-Point/Setting.svelte";

    let test: number;
</script>

<Score />
<div class="fixed bottom-24 right-10 z-10">
    <Modal>
        <Setting bind:test />
    </Modal>
</div>
