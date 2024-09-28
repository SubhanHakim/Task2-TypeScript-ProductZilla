console.log("Testingg");

let arr2: string[][][] = [
    [['Subhan']],
    [['iqbal']],
    [['Hakim']],
]

console.log(arr2[2][0][0]);

let car = {
    merek: 'ferari',
    amountBan: 4,

}


interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function fetchTodo(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if(!response.ok) {
            throw new Error(`HTTP error! status, ${response.status}`)
        }
        const data: Todo = await response.json();
        console.log(data);
        
    
    } catch (error) {   
        console.log("There was as problem with the fetch operations", error);
        
    }
}

fetchTodo()

