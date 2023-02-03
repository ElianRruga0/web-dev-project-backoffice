import axios from "axios"

export const getReservations = async (token: any) => {
    const req = await axios.get('reservations', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.data)
    const res = await req

    return res
}


export const getReservation = async (id: any, token: any) => {
    const req = await axios.get(`reservations/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.data)
    const res = await req

    return res
}


export const addReservation = async (data: any) => {
    const req = await axios.post(`reservations`, data).then(response => response.data)
    const res = await req

    return res
}

export const deleteReservation = async (id: any, token: any) => {
    const req = await axios.delete(`reservations/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.data)
    const res = await req

    return res
}
