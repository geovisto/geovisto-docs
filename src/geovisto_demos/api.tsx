
export const files = async function fetch_github_files() {
    const response = await fetch('http://avi278.pythonanywhere.com/files', {
    method: 'GET', 
    headers: {
       'Content-Type': 'application/json',
    },
    })
    const json = await response.json();
    return json;
}

export const datasets_search = async function datasets_search(name) {
    console.log(name);
    const response = await fetch('http://avi278.pythonanywhere.com/search/' + name, {
    method: 'GET', 
    headers: {
       'Content-Type': 'application/json',
    },
    })
    const json = await response.json();
    return json;
}

export const datasets_download = async function datasets_download(id) {
    const response = await fetch('http://avi278.pythonanywhere.com/download/' + id, {
    method: 'GET', 
    headers: {
       'Content-Type': 'application/json',
    },
    })
    const json = await response.json();
    return json;
}

