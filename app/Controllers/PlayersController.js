
import { playersService } from "../Services/PlayerService.js";
import { getFormData } from "../Utils/FormHandler.js"
export class PlayersController {
    constructor() {
        this.drawPlayers()
    }
    addPlayer() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            let formData = getFormData(form)
            playersService.addPlayer(formData)
            form.reset()
            this.drawPlayers()
        } catch (e) {
            console.error('[addPlayer]', error)
        }
    }

    drawPlayers() {
        try {
            let template = ''
            let players = playersService.getPlayers()
            players.forEach(player => template += player.playerTemplate)
            
            document.getElementById('players').innerHTML = template;
        } catch (error) {
            console.error('Oops I fucked up')
        }
    }

    addPoint(playerId) {
        playersService.addPoint(playerId)
        this.drawPlayers()
    }

    subtractPoint(playerId) {
       playersService.subtractPoint(playerId)
       this.drawPlayers()
    }
}