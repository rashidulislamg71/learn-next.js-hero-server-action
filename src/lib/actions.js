export async function createATask(formData) {
  "use server";

  const title = formData.get("title");
  const description = formData.get("description");
  const status = formData.get("status");
  const assigned = formData.get("assigned");
  const priority = formData.get("priority");

   const newTask = Object.fromEntries(formData.entries())

}