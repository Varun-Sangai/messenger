import {  Conversation, Message, User } from "@prisma/client";
export interface InputField{
    id:string;
    name:string;
    label:string;
    helperText?: React.ReactNode;
    error?: boolean | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    value?: unknown;
}

export type FullMessageType = Message & {
  sender: User, 
  seen: User[]
};

export type FullConversationType = Conversation & { 
  users: User[]; 
  messages: FullMessageType[]
};