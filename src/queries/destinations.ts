import axios from "axios"

export const getDestionations = async () => {
    const req = await axios.get('destinations').then(response => response.data)
    const res = await req

    return res
}


export const getDestionation = async (id: any) => {
    const req = await axios.get(`destination/${id}`).then(response => response.data)
    const res = await req

    return res
}

export const addDestionation = async (id: any, token: any, data: any) => {
    const req = await axios.post(`destination`, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.data)
    const res = await req

    return res
}

export const deleteDestionation = async (id: any, token: any) => {
    const req = await axios.delete(`destination/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.data)
    const res = await req

    return res
}

export const updateDestionation = async (id: any, token: any, data: any) => {
    const req = await axios.put(`destination/${id}`, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.data)
    const res = await req

    return res
} 