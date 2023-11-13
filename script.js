qui_somme_nous = document.querySelector(".qui-somme-nous")
objectifs = document.querySelector(".objectifs")


// console.log(bb.top)

window.addEventListener("scroll", function bof () {
    objectifs_position = objectifs.getBoundingClientRect()
    qui_somme_nous_position = qui_somme_nous.getBoundingClientRect()
    cc = objectifs_position.top - qui_somme_nous_position.top
    qui_somme_nous.style.opacity = cc/500
    

})