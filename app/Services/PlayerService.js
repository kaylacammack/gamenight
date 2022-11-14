import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";

class PlayerService {
    addPlayer(playerData){
        const newPlayer = new Player(playerData.name)
        appState.players.push(newPlayer)
        console.log(appState.players)
    }

    getPlayers() {
        return appState.players
    }

    addPoint(playerId) {
        let foundPlayer = appState.players.find(player => player.id === playerId)
        foundPlayer.score++
    }

    subtractPoint(playerId) {
        let foundPlayer = appState.players.find(player => player.id === playerId)
        foundPlayer.score--
    }
}
export const playersService = new PlayerService()