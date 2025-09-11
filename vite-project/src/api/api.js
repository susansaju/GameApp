import axios from "axios";

const URI = "http://localhost:8080"


const getGames = () => axios.get(`${URI}/games/all`)
const getGamebyID = (id) => axios.get(`${URI}/game/${id}`)
const addGame = (game) => axios.post(`${URI}/game`, game)
const editGame = (game, id) => axios.put(`${URI}/game/edit/${id}`, game)
const deleteGame = (id) => axios.delete(`${URI}/game/delete/${id}`)

const getMembers = () => axios.get(`${URI}/members/all`)
const addMembers = (member) => axios.post(`${URI}/members`, member)

export { getGames, addGame, editGame, deleteGame, getMembers, addMembers, getGamebyID }