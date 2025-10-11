<script>
    import { colors, currentColor, setCurrentColor } from "../palette";
</script>

<div style="display: flex; gap: 12px; align-items: center;">
    {#each colors as color}
        <div
            style="
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: {color};
                border: 2px solid {color === $currentColor ? '#333' : '#fff'};
                box-shadow: 0 2px 6px rgba(0,0,0,0.1);
                cursor: pointer;
                transition: border 0.2s;
            "
            on:click={() => setCurrentColor(color)}
            title={color}
        ></div>
    {/each}
</div>