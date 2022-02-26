export interface Todo{
    id: string;
    task: string;
    description: string;
    status: string;
}

export interface Response {
    results : Array<Todo>
}