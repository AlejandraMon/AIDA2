export async function GetDataWearId(){
    const id = 1
    const response = await fetch(`http://162.214.187.236/~amj/api/wearabledata/consulta_iduser.php?iduser=${id}`)
    const responseJson = await response.json()
    return responseJson
}

export default{
    GetDataWearId
}