
export const files = async function fetch_github_files() {
    const response = await fetch('https://avi278.pythonanywhere.com/files', {
    method: 'GET', 
    headers: {
       'Content-Type': 'application/json',
    },
    })
    const json = await response.json();
    return json;
}

export const datasets_search = async function datasets_search(name) {
    const response = await fetch('https://avi278.pythonanywhere.com/search/' + name, {
    method: 'GET', 
    headers: {
       'Content-Type': 'application/json',
    },
    })
    const json = await response.json();
    return json;
}

export const datasets_download = async function datasets_download(id, abortController) {  
    try {
        const response = await fetch('https://avi278.pythonanywhere.com/download/' + id, {
        method: 'GET', 
        headers: {
        'Content-Type': 'application/json',
        },
        signal: abortController.signal
        })
        const json = await response.json();
        return json;
    } catch (error) {
        if (error.name === 'AbortError') {
            return "ABORT";
        }
    }
}

export const file = async function fetch_github_file(path) {
    const response = await fetch('https://avi278.pythonanywhere.com/file/' + path, {
    method: 'GET', 
    headers: {
       'Content-Type': 'application/json',
    },
    })
    const json = await response.json();
    return json;
}
