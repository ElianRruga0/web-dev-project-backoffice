import axios from "axios"

export const getActivityTypes = async () => {
    const req = await axios.get('activity_types').then(response => response.data)
    const res = await req

    return res
}
