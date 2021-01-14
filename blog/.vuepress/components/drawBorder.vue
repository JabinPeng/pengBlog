<template>
    <main class="drawBorder">
        <div class='draw'>
            draw
        </div>
        <div class='draw meet'>
            meet
        </div>
        <div class='center'>
            center
        </div>
    </main>
</template>

<script>
    export default {
        name: 'drawBorder'
    }
</script>

<style scoped>
    .drawBorder{
        width: 100%;
        height: 120px;
        position: relative;
        display: flex;
        justify-content: space-around;
    }
    div {
        background: none;
        border: 0;
        box-sizing: border-box;
        margin: 1em;
        padding: 1em 1em;
        box-shadow: inset 0 0 0 2px #f45e61;
        color: #f45e61;
        font-size: 15px;
        font-weight: 700;
        position: relative;
        vertical-align: middle;
        text-align: center;
        width:100px;
        height:50px;
        line-height: 20px;
    }
    div::before, div::after {
        box-sizing: inherit;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
    }

    div {
        transition: color 0.25s;
    }
    div::before, div::after {
        border: 2px solid transparent;
        width: 0;
        height: 0;
    }
    .draw::before {
        top: 0;
        left: 0;
    }
    .draw::after {
        bottom: 0;
        right: 0;
    }
    .draw:hover {
        color: #60daaa;
    }
    .draw:hover::before, .draw:hover::after {
        width: 100%;
        height: 100%;
    }
    .draw:hover::before {
        border-top-color: #60daaa;
        border-right-color: #60daaa;
        transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
    }
    .draw:hover::after {
        border-bottom-color: #60daaa;
        border-left-color: #60daaa;
        transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
    }
    .meet:hover {
        color: #fbca67;
    }
    .meet::after {
        top: 0;
        left: 0;
    }
    .meet:hover::before {
        border-top-color: #fbca67;
        border-right-color: #fbca67;
    }
    .meet:hover::after {
        border-bottom-color: #fbca67;
        border-left-color: #fbca67;
        transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
    }



    .center:hover {
        color: #6477b9;
    }
    .center::before, .center::after {
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        -webkit-transform-origin: center;
        transform-origin: center;
    }
    .center::before {
        border-top: 2px solid #6477b9;
        border-bottom: 2px solid #6477b9;
        -webkit-transform: scale3d(0, 1, 1);
        transform: scale3d(0, 1, 1);
    }
    .center::after {
        border-left: 2px solid #6477b9;
        border-right: 2px solid #6477b9;
        -webkit-transform: scale3d(1, 0, 1);
        transform: scale3d(1, 0, 1);
    }
    .center:hover::before, .center:hover::after {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        transition: transform 0.5s, -webkit-transform 0.5s;
    }

</style>
