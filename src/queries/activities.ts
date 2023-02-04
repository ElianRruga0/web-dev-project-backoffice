import axios from "axios"

export const getActivities = async () => {
    const req = await axios.get('activities').then(response => response.data)
    const res = await req

    return res
}


export const getActivity = async (id: any) => {
    const req = await axios.get(`activities/${id}`).then(response => response.data)
    const res = await req

    return res
}


export const addActivity = async (id: any, token: any, data: any) => {
    const req = await axios.post(`activities`, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.data)
    const res = await req

    return res
}

export const deleteActivity = async (id: any, token: any) => {
    const req = await axios.delete(`activities/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.data)
    const res = await req

    return res
}

export const updateActivity = async (id: any, token: any, data: any) => {
    const req = await axios.post(`activities/${id}`, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.data)
    const res = await req

    return res
} 