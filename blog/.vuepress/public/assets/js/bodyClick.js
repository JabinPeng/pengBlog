window.onload  = function () {
    var a_idx = 0;
    function getRandomColor(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var body = document.body
        body.onclick = function (e) {
            var e = e || window.event;
            const a = ["❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤", "❤爱国❤", "❤敬业❤", "❤诚信❤", "❤友善❤"]
            var $w = document.createElement('span')
            $w.innerHTML = a[a_idx]
            a_idx = (a_idx + 1) % a.length;
            $w.style.zIndex = 99999
            $w.style.top = e.pageY - 20 + 'px'
            $w.style.left = e.pageX + 'px'
            $w.style.position = "absolute"
            $w.style.fontWeight = "blod"
            $w.style.color = `rgb(${getRandomColor(255,0)},${getRandomColor(255,0)},${getRandomColor(255,0)})`
            $w.style.userSelect = "none"
            $w.style.cursor = "default"
            $w.style.opacity = 1
            $w.style.transition = "all 1s"
            body.appendChild($w)
            var timer = setTimeout(() => {
                $w.style.top = e.pageY - 180 + 'px'
                $w.style.opacity = 0
                clearTimeout(timer)
                var cleartimer = setTimeout(() => {
                    body.removeChild($w)
                    clearTimeout(cleartimer)
                },1000)
            })
        }
    }