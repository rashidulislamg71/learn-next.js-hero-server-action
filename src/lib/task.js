
import tasks from "../data/data.json";

export const getTasks = async ()=> {
  return tasks;
};


export const postTask = async (newTask) =>{
   newTask.id = tasks.length + 1;
   tasks.unshift(newTask);
   return {ok: true, message: "successfully added task"}
}