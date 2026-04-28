import AddToTask from '@/components/AddToTask'
import TaskCard from '@/components/TaskCard'
import { createATask } from '@/lib/actions'
import { getTasks } from '@/lib/task'
import React from 'react'

async function TasksPage() {

    const tasks = await getTasks()

    return (
        <div>
            <h2>Tasks: {tasks.length} </h2>
            <AddToTask createATask={createATask} />

            <div className='grid grid-cols-3 gap-5'>

                {
                    tasks.map(task => <TaskCard key={task.id} task={task} />)
                }
            </div>
        </div>
    )
}

export default TasksPage