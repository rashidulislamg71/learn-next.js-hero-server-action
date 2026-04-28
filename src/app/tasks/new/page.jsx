

import { addNewTask } from '@/lib/actions';
import { Button, Input, Label, ListBox, Modal, TextField, Select } from '@heroui/react';


const NewTask =  () => {
    return (
        <div className="max-w-2xl">
            <form action={addNewTask} className="flex flex-col gap-4">

                {/* Title */}
                <TextField name="title">
                    <Label>Title</Label>
                    <Input placeholder="Enter task title" />
                </TextField>

                {/* Description */}
                <TextField name="description">
                    <Label>Description</Label>
                    <Input placeholder="Enter task description" />
                </TextField>

                {/* Priority */}
                <Select name="priority" placeholder="Select priority">
                    <Label>Priority</Label>
                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item value="high">
                                High
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item value="medium">
                                Medium
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item value="low">
                                Low
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                {/* Status */}
                <Select name="status" placeholder="Select status">
                    <Label>Status</Label>
                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item value="pending">
                                Pending
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item value="inProgress">
                                In Progress
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item value="completed">
                                Completed
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                {/* Assigned */}
                <TextField name="assigned">
                    <Label>Assigned To</Label>
                    <Input placeholder="Assign to someone" />
                </TextField>

                {/* Footer */}
                <Modal.Footer>
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button type="submit">
                        Add Task
                    </Button>
                </Modal.Footer>

            </form>
        </div>
    );
};

export default NewTask;