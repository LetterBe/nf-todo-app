export interface Todo{
    id: string;
    task: string;
    description: string;
    status: string;
}

export enum Status {
    Open ='Open',
    Done ='Done'
}