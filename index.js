

    const canvas = document.getElementById('home')
    const c = canvas.getContext('2d')


    canvas.width = innerWidth
    canvas.height = innerHeight

    class Player {
        constructor( x,y,radius,color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        }

    draw () 
    {
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill();
    }

    }

    const x = canvas.width / 2
    const player = new Player (x, 100, 30, '#1A6F5D')
    player.draw

    console.log(player)
