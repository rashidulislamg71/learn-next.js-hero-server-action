"use client";

import { ListBox, Select } from "@heroui/react";
import { Envelope } from "@gravity-ui/icons";
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField
} from "@heroui/react";

export default function AddToTask({ createATask }) {
    return (
        <Modal>
            <Button variant="primary">Add Task</Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Add Task</Modal.Heading>
                            <p className="mt-1.5 text-sm text-muted">
                                Fill the form to create a new task
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface>
                                <form action={createATask} className="flex flex-col gap-4">

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
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}