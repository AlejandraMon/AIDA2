export async function GetContactId(){
    const id = 1;
    const response = await fetch(`http://162.214.187.236/~amj/api/contact/consulta_iduser.php?iduser=${id}`)
    const responseJson = await response.json()
    return responseJson
}

export default{
    GetContactId
}