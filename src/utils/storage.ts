export function setItem(key: string, value: string) {
    return sessionStorage.setItem(key, value);
}

export function getItem(key: string) {
    return sessionStorage.getItem(key);
}

export function cleanStorage() {
    return sessionStorage.clear();
}