export function setItem(key, value) {
    return sessionStorage.setItem(key, value);
}

export function getItem(key) {
    return sessionStorage.getItem(key);
}

export function cleanStorage() {
    return sessionStorage.clear();
}