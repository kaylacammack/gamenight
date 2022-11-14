import { generateId } from "../Utils/generateId.js"

export class Player {
    constructor(name) {
        this.id = generateId()
        this.name = name
        // The score is defaulted to start at 0
        this.score = 0
    }
    
    get playerTemplate() {
        return /*html*/ `
        <div class="card">
            <button class="btn btn-black" onclick="app.playersController.addPoint('${this.id}')">+</button>
            <h3>${this.name} - ${this.score}</h3>
            <button class="btn btn-black" onclick="app.playersController.subtractPoint('${this.id}')">-</button>
        </div>`
    }
}