var juego = new Phaser.Game(550, 550, Phaser.CANVAS, "bloque_juego");
var fondoJuego;

var persona;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var nuevo;

var estadoPrincipal = {
    preload: function () {
        juego.load.image("fondo", "img/bg.jpg");
        juego.load.spritesheet("animacion", "img/ANIMACION3.png", 256, 256);
        this.load.audio("musica", "audio/audio.mp3");
    },
    create: function () {
        //mostrar pantalla

        fondoJuego = juego.add.tileSprite(0, 0, 550, 550, "fondo");

        nuevo = juego.add.sprite(200, 280, "animacion");
        nuevo.animations.add("movi", [0, 1, 2, 3, 4, 5], 10, true);

        teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);

        const musica = this.sound.add("musica");
        musica.play();
    },
    update: function () {
        fondoJuego.tilePosition.x -= 1;

        // Movimiento horizontal
        if (teclaDerecha.isDown && nuevo.x < juego.width - 160) {
            nuevo.x++;
            nuevo.animations.play("movi");
        } else if (teclaIzquierda.isDown && nuevo.x > -100) {
            nuevo.x--;
            nuevo.animations.play("movi");
        }

        // Movimiento vertical
        if (teclaArriba.isDown && nuevo.y > 0) {
            nuevo.y--;
            nuevo.animations.play("movi");
        } else if (teclaAbajo.isDown && nuevo.y < juego.height - nuevo.height) {
            nuevo.y++;
            nuevo.animations.play("movi");
        }
    },
};

juego.state.add("principal", estadoPrincipal);
juego.state.start("principal");
