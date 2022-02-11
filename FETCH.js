//-----------Promesa Fetch usando ASYNC/AWAIT
//const getUser = async() => {
//    const url = "https://jsonplaceholder.typicode.com/users";
//    const getFetch = await fetch(url)
//    const parsearFetch = await getFetch.json();
//    console.log(parsearFetch);
//
//};
//getUser()
//-----------Promesa FETCH usando .then      Notar que .then se utiliza 2 veces porque la primera devuelve otra promesa
//fetch("https://jsonplaceholder.typicode.com/users")
//    .then(response => {return response.json()})
//    .then(responseJson => {
//        responseJson.forEach(element => {
//        
//            let table = document.getElementById("table");
//            table.innerHTML += `
//            <tr class="tr">
//            <td class="td">${element.id}</td>
//            <td class="td">${element.name}</td>
//            <td class="td">${element.email}</td>
//            </tr>
//            `
//        });
//    });
//-----Ejercicio con la misma API, separado en bloques
//1. Guardar URL    
const url_base = "https://jsonplaceholder.typicode.com/";
//2. Hacer petición usando fetch y una url como entrada
const request = async(url) => {
    const getData = await fetch(url);
    const parsearData = await getData.json();
    return parsearData;
};

//3. getPosts, construye la URL de posts y se la entrega a la función principal que hace la petición
const getPosts = async() => {
    const urlPost = `${url_base}posts`;
    return request(urlPost);
};
//4. getUser, construye la URL de users y se la entrega a la función princiapl que hace la petición
const getUser = async(id) => {
    const urlUser = `${url_base}users/${id}`;
    return request(urlUser);
};

const getUserPosts = (id) => {
    getUser(id).then(response=> console.log(response))
    getPosts().then(response => response.forEach(element => {
        if(id == element.userId){
           console.log(element.body)
        }
    }))
};

getUserPosts(1)