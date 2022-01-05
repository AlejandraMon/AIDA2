export async function GetResultId(){
    const id = 2
    const response = await fetch(`http://162.214.187.236/~amj/api/result/result.php?idresult=${id}`)
    const responseJson = await response.json()
    return responseJson
}

export default{
    GetResultId
}