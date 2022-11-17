const baseUrl = process.env.BASE_URL;

export const getData = async (url, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    }).then((res) => {

    }).catch((error) => {
        console.log('error', error);
    })

    return res.json;
}


export const posData = async (url, postdata, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(postdata)
    })

    return res.json();

}

export const putData = async (url, postdata, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(postdata)
    })

    return res.json;
}

export const patchData = async (url, postdata, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PACTH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(postdata)
    })

    return res.json;
}

export const deleteDtata = async (url, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })

    return res.json;
}



