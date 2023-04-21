
export async function requestProjects() {
    const url = `https://sleepy-bull-frock.cyclic.app/projects`;
    const response = await fetch(url);
    const data = await response.json();

    const dataStringfied = JSON.stringify(data.reverse());
    localStorage.setItem('projects', dataStringfied);
    return data.reverse();
}

export async function requestComEdu() {
    const url = `https://sleepy-bull-frock.cyclic.app/compelmentary-education`;
    const response = await fetch(url);
    const data = await response.json();

    const dataStringfied = JSON.stringify(data);
    localStorage.setItem({ compEdu: dataStringfied });
    return data;
}