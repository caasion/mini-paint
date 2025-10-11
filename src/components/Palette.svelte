<script>
    import { currentColor, setCurrentColor } from "../stores/palette";
</script>

<div style="display: flex">
    <div onclick={() => setCurrentColor("#7f2b8f")}>
        Purple!!!!
    </div>
    <div onclick={() => setCurrentColor("#000000")}>
        White!!!!
    </div>
</div>

