export async function GetSuggestionId(){
    const id = 2
    const response = await fetch(`http://162.214.187.236/~amj/api/usuario/consulta_id.php?idsuggestion=${id}`)
    const responseJson = await response.json()
    return responseJson
}

export default{
    GetSuggestionId
}