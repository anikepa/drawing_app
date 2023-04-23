var canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth - 50

canvas.height = 400


var context = canvas.getContext("2d")

canvas_bg_color = "white"

context.fillStyle = canvas_bg_color
context.fillRect(0, 0, canvas.width, canvas.height);



var draw_color = "black"


function change_color(element) {
    draw_color = element.style.backgroundColor

}



let draw_size = "2"
let isDrawing = false
canvas.addEventListener('mousedown', start, false)
canvas.addEventListener('mousemove', draw, false)
canvas.addEventListener('touchstart', start, false)
canvas.addEventListener('touchmove', draw, false)

/*
canvas.addEventListener('mouseup', stop, false)
canvas.addEventListener('mouseout', stop, false)
canvas.addEventListener('touchend', stop, false)
 */


function start(event) {
    isDrawing = true
    context.beginPath()
    context.moveTo(event.clientX - canvas.offsetLeftX, event.clientY - canvas.offsetTopY)
    event.preventDefault()
}
function draw(event) {
    if (isDrawing) {
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
        context.lineWidth = draw_size;
        context.lineStyle = draw_color;
        context.stroke()
    }
    event.preventDefault()
}
function stop(event) {
    if (isDrawing) {
        context.stroke()
        context.closePath()
        isDrawing = false
    }
    event.preventDefault()
}

/* 
function start(event) {
    isDrawing = true
    context.beginPath()
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
    event.preventDefault()

}

function draw(event) {
    if (isDrawing) {
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        context.strokeStyle = draw_color
        context.lineWidth = draw_size
        context.stroke()
        event.preventDefault()


    }

}

function stop(e) {
    if (isDrawing) {
        context.stroke()
        context.closePath()
        isDrawing = false
    }
    e.preventDefault()

    if (e.type != "mouseout") {
        undo_array.push(context.getImageData(0, 0, canvas.width, canvas.height))
        index += 1;
    }
    console.log(undo_array)


}



document.querySelector('#clear').addEventListener('click', () => {
    context.fillStyle = canvas_bg_color
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillRect(0, 0, canvas.width, canvas.height)

})

function undo(){
if(index<=0){
    context.fillStyle = canvas_bg_color
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillRect(0, 0, canvas.width, canvas.height)
}else{
    index -=1;
    undo_array.pop()
    context.putImageData(undo_array[index],0,0)
}
} */