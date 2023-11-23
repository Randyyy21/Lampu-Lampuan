function saklar() {
    let toggle1 = document.getElementById("toggle1")
    let toggle2 = document.getElementById("toggle2")
    let toggle3 = document.getElementById("toggle3")

    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")

    if (toggle1.checked) {
        lampu1.src = 'asset/image/on.gif'
    } else {
        lampu1.src = 'asset/image/off.gif'
    }

    if (toggle2.checked) {
        lampu2.src = 'asset/image/on.gif'
    } else {
        lampu2.src = 'asset/image/off.gif'
    }

    if (toggle3.checked) {
        lampu3.src = 'asset/image/on.gif'
    } else {
        lampu3.src = 'asset/image/off.gif'
    }
}

// untuk memberi validasi toggle utama terhadap toggle1,2,3 //
if (toggle1.checked && toggle2.checked && toggle3.checked) {
    toggleU.checked = true
} else {
    toggleU.checked = false
}

function saklar1() {
    let toggle1 = document.getElementById("toggle1")
    let toggle2 = document.getElementById("toggle2")
    let toggle3 = document.getElementById("toggle3")
    let toggleU = document.getElementById("toggleU")

    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")


    if (toggleU.checked) {
        toggle1.checked = true
        toggle2.checked = true
        toggle3.checked = true
        lampu1.src = 'asset/image/on.gif'
        lampu2.src = 'asset/image/on.gif'
        lampu3.src = 'asset/image/on.gif'
    } else {
        toggle1.checked = false
        toggle2.checked = false
        toggle3.checked = false
        lampu1.src = 'asset/image/off.gif'
        lampu2.src = 'asset/image/off.gif'
        lampu3.src = 'asset/image/off.gif'
    }
}