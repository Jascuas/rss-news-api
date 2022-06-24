
// create request to the API
export const createRequest = (url, method) => {
    var corsUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
    var xhr = new XMLHttpRequest();
    xhr.open(method, corsUrl + url, true);
    xhr.send();
    return new Promise((resolve) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                console.warn('request_error');
            }
        };
    });
}