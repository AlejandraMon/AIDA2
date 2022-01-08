//consulta de datos personales
/**
 * @deprecated Use the UserService.getFullData function instead
 * @returns {Promise<any>}
 * @constructor
 */
export async function GetUserId(){
    const id = 2;
    const response = await fetch(`http://eleazartech.0fees.us/api/usuario/consulta_id.php?iduser=${id}`)
    const responseJson = await response.json()
    return responseJson
}

export default{
    GetUserId
}