<script>
    import { currentColor, setCurrentColor } from "../stores/palette";



</script>
<div onclick={() => setCurrentColor("#7f2b8f")}>
    Purple!!!!
</div>
<div onclick={() => currentColor.set("#000000")}>
    White!!!!
</div>