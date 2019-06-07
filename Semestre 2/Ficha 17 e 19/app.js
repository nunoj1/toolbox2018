new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
        healTurns: 3,
        specialTurns: 3,
        id: 0
    },
    methods: {
        healthBar: function () {
            if (this.playerHealth <= 50) {
                document.getElementById("playerHP").style.backgroundColor = "orange";
                if (this.playerHealth <= 25) {
                    document.getElementById("playerHP").style.backgroundColor = "red";
                }
            };
            if (this.monsterHealth <= 50) {
                document.getElementById("monsterHP").style.backgroundColor = "orange";
                if (this.monsterHealth <= 25) {
                    document.getElementById("monsterHP").style.backgroundColor = "red";
                }
            }
        },
        startGame: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameIsRunning = true;
            this.turns = [];
            this.healTurns = 3;
            this.specialTurns = 3;
            this.id=0;
            document.getElementById("playerHP").style.backgroundColor = "green";
            document.getElementById("monsterHP").style.backgroundColor = "green";
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                this.monsterHealth=0;
                this.id++
                this.gameIsRunning = false;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player wins',
                    id: this.id
                });
                
            } else if (this.playerHealth <= 0) {
                this.playerHealth=0;
                this.id++
                this.gameIsRunning = false;
                this.turns.unshift({
                    isPlayer: false,
                    text: 'Monster wins',
                    id: this.id
                });
            }
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        calculateUserDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        attack: function () {
            this.id++
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for' + damage,
                id: this.id
            });
            this.id++
            var damage = this.calculateUserDamage(5, 12);

            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'The Monster hits u for' + damage,
                id: this.id
            });
            if (this.healthBar()) {
                return;
            }
            if (this.checkWin()) {
                return;
            }
        },

        specialAttack: function () {
            if (this.specialTurns == 0) {
                this.id++;
                this.turns.unshift({
                    isPlayer: false,
                    text: 'No more specials',
                    id: this.id
                });
            } else {
                this.id++
                var damage = this.calculateDamage(12, 20);
                this.monsterHealth -= damage;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player hits Monster hard for' + damage,
                    id: this.id
                });
                this.id++
                var damage = this.calculateUserDamage(5, 12);
                this.playerHealth -= damage;
                this.turns.unshift({
                    isPlayer: false,
                    text: 'The Monster hits u for' + damage,
                    id: this.id
                });
                this.specialTurns--
                if (this.healthBar()) {
                    return;
                }
                if (this.checkWin()) {
                    return;
                }
            }
        },
        heal: function () {
            if (this.healTurns == 0) {
                this.idd++;
                this.turns.unshift({
                    isPlayer: false,
                    text: 'No more heals',
                    id: this.id
                });
            } else if (this.playerHealth >= 100) {
                this.id++;
                this.turns.unshift({
                    isPlayer: false,
                    text: 'Already at Max HP',
                    id: this.id
                });
            } else {
                this.id++
                var damage = this.calculateDamage(10, 15);
                this.playerHealth += damage;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player heals for' + damage,
                    id: this.id
                });
                this.id++
                var damage = this.calculateUserDamage(5, 12);
                this.playerHealth -= damage;
                if (this.playerHealth > 100) {
                    this.playerHealth = 100;
                } else if (this.playerHealth > 50) {
                    document.getElementById("playerHP").style.backgroundColor = "green";
                }
                else if (this.playerHealth >25){
                    document.getElementById("playerHP").style.backgroundColor = "orange";
                }
                this.turns.unshift({
                    isPlayer: false,
                    text: 'The Monster hits u for' + damage,
                    id: this.id
                });
                this.healTurns--
                if (this.healthBar()) {
                    return;
                }
                if (this.checkWin()) {
                    return;
                }
            }
        },
        giveUp: function () {
            this.playerHealth =0;
            this.turns.unshift({
                isPlayer: false,
                text: 'You give up',
                id: this.id
            });
            this.gameIsRunning = false;
        }
    }
});