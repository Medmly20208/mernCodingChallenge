import Client from "./client"

export const getAllProjects = ()=>{
    return Client.get("projects")
}

export const createAproject = (data)=>{
    return Client.post("projects",data)
}

export const updateAprojectById = (data)=>{
    return Client.put(`projects/${data.id}`,data)
}

export const deleteProjectById = (data)=>{
    return Client.delete(`projects/${data.id}`)
}

//tasks
export const getAllTasks = ()=>{
    return Client.get("tasks")
}

export const createAtask = (data)=>{
    return Client.post("tasks",data)
}

export const updateAtaskById = (data)=>{
    return Client.put(`tasks/${data.id}`,data)
}

export const deletetaskById = (data)=>{
    return Client.delete(`tasks/${data.id}`)
}