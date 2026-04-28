import { revalidatePath } from "next/cache";
import { postTask } from "./task";
import { redirect } from "next/navigation";

export async function createATask(formData) {
  "use server";

  const title = formData.get("title");
  const description = formData.get("description");
  const status = formData.get("status");
  const assigned = formData.get("assigned");
  const priority = formData.get("priority");

  const newTask = Object.fromEntries(formData.entries());

  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath("/tasks");
  }
  return res;
}

export async function addNewTask(formData) {
    "use server";
  const newTask = Object.fromEntries(formData.entries());

  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath("/tasks");
    redirect("/tasks");
  }
  return res;
}
