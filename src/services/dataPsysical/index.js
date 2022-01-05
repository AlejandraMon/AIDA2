export async function GetPsysicalId(){
    const id = 1;
    const response = await fetch(`http://162.214.187.236/~amj/api/manual/consult_iduser.php?iduser=${id}`)
    const responseJson = await response.json()
    return responseJson
}

export default{
    GetPsysicalId
}